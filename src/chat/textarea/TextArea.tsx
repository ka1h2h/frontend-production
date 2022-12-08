import { SetStateAction, useState, useEffect } from 'react'
import './textarea.css'


interface Message {
    addMessage: (event: React.KeyboardEvent<HTMLElement>) => void,
    messageText: string,
    setMessageText: React.Dispatch<SetStateAction<string>>,
}

const TextArea: React.FC<Message> = ({messageText, addMessage, setMessageText}) => {
   
  return (
    <div className="text-area">
    <textarea className='text-area__container' value={messageText}
     onChange={event => setMessageText(event.target.value)} 
     onKeyPress={addMessage}
     >
     </textarea>
    
  </div>
  )
}

export default TextArea