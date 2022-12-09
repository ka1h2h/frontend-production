import * as React from "react";
import "./chatWithUser.css";
import { ChatMessage } from "./Message";
import { Message } from "../../redux/ChatSlice";

export interface ChatWithUserProps {
  messagesList: Message[];
}

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

export const ChatWithUser: React.FC<ChatWithUserProps> = ({ messagesList }) => {
  const ref = useChatScroll(messagesList);
  return (
    <div className="chat-with-user" id="scroll" ref={ref}>
      {(messagesList || []).map((item: Message, index: number) => {
        return <ChatMessage key={index} message={item} />;
      })}
    </div>
  );
};
