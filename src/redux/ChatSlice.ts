import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type DataOnly<T> = {
  [key in keyof T as T[key] extends () => any ? never : key]: T[key];
};

export class Message {
  constructor(public id: number, public sender: string, public text: string) {}

  clone() {
    return new Message(this.id, this.sender, this.text);
  }
}

const LOCAL_STORAGE_KEY = "message";

type UpdateCallback = (data: Message[]) => void;

export class MessagesCache {
  private static parse(raw: string): Message[] {
    let result: Message[] = [];
    try {
      const data: DataOnly<Message>[] = JSON.parse(raw);
      result = data.map((it) => new Message(it.id, it.sender, it.text));
    } catch (e) {
      result = [];
    }
    return result;
  }

  static load(): Message[] {
    let result: Message[] = [];
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      result = MessagesCache.parse(raw);
    } catch (e) {
      result = [];
    }

    return result;
  }

  static save(data: Message[] = []) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }

  private static updateHandler(ev: StorageEvent) {
    if (ev.key === LOCAL_STORAGE_KEY) {
      if (MessagesCache.updateCallback) {
        MessagesCache.updateCallback(MessagesCache.parse(ev.newValue));
      }
    }
  }

  private static updateCallback: UpdateCallback = null;
  static subscribeToUpdate(cb: UpdateCallback) {
    MessagesCache.updateCallback = cb;
    window.addEventListener("storage", MessagesCache.updateHandler);
  }

  static unsubscribeFromUpdate() {
    window.removeEventListener("storage", MessagesCache.updateHandler);
  }
}

export const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: MessagesCache.load(),
  },
  reducers: {
    addMessage: (s, action: PayloadAction<Message>) => {
      s.messages = [...s.messages, action.payload.clone()];

      MessagesCache.save(s.messages);
    },

    mergeChats: (s, action: PayloadAction<Message[]>) => {
      s.messages = [
        ...s.messages,
        ...action.payload
          .filter((m) => !s.messages.find((nm) => nm.id === m.id))
          .map((m) => m.clone()),
      ].sort((a, b) => a.id - b.id);
    },
  },
});

export const { addMessage, mergeChats } = ChatSlice.actions;
