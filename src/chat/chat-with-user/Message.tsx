import * as React from "react";
import "./message.css";
import { Message } from "../../redux/ChatSlice";

type MessageProps = {
  message: Message;
};

export const ChatMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="message">
      <div className="message__container">
        <div className="sender__name">{message.sender}</div>
        <div className="sender__text">{message.text}</div>
      </div>
    </div>
  );
};
