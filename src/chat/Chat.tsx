import * as React from "react";
import { useEffect } from "react";

import { ChatWithUser } from "./chat-with-user/ChatWithUser";
import "./chat.css";
import { TextArea } from "./textarea/TextArea";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addMessage,
  mergeChats,
  Message,
  MessagesCache,
} from "../redux/ChatSlice";

export interface ChatProps {
  name: string;
}

export const Chat: React.FC<ChatProps> = ({ name }) => {
  const messagesList = useAppSelector((s) => s.chat.messages);
  const dispatch = useAppDispatch();

  const sendMessage = (messageText: string) => {
    dispatch(addMessage(new Message(Date.now(), name, messageText)));
  };

  useEffect(() => {
    MessagesCache.subscribeToUpdate((messages) =>
      dispatch(mergeChats(messages))
    );
    return () => {
      MessagesCache.unsubscribeFromUpdate();
    };
  }, []);

  return (
    <div className="users">
      <div className="users__container">
        <ChatWithUser messagesList={messagesList} />
        <TextArea sendMessage={sendMessage} />
      </div>
    </div>
  );
};
