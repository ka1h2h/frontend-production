
import * as React from 'react'
import { useState, useEffect } from 'react'
import { loadMessage } from '../redux/ChatSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

import ChatWithUser from './chat-with-user/ChatWithUser'
import './chat.css'
import TextArea from './textarea/TextArea'


export interface IChat {
    addMessage?: (event: React.KeyboardEvent<HTMLElement>) => void,
    name: string,
} 

const Chat:React.FC<IChat> = ({name}) => {
    const [message, setMessage] = useState<any>([])
    const [messageText, setMessageText] = useState('')
    
    useEffect(() => {
        let local = localStorage.getItem('message')
        if (local == null) {
           return localStorage.setItem('message', '')
        }

        const iim:any = localStorage.getItem('message') || [] 
        setMessage(JSON.parse(iim))
        
      }, [])

      useEffect(() => {
        localStorage.setItem('message', JSON.stringify(message))
      }, [message])
   
  
    const addMessage = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            setMessage([
                ...message,
                {   
                    id: Date.now(),
                    text: messageText,
                    sender: name
                }
            ])
            setMessageText('')
        }
    }
    

  return (
    <div className="users">
    <div className="users__container">
    <ChatWithUser message={message} />
    <TextArea addMessage={addMessage} setMessageText={setMessageText} messageText={messageText}/>
    </div>
  </div>
  )
}

export default Chat