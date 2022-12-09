import { useState } from "react";
import "./textarea.css";

interface TextAreaProps {
  sendMessage: (message: string) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ sendMessage }) => {
  const [messageText, setMessageText] = useState("");
  return (
    <div className="text-area">
      <textarea
        className="text-area__container"
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            sendMessage(messageText);
            setMessageText("");
          }
        }}
      ></textarea>
    </div>
  );
};
