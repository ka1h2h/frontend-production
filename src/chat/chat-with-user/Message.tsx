import * as React from "react"
import { useState, useEffect } from "react"
import './message.css'
import { IMsg } from "./ChatWithUser"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { loadMessage } from "../../redux/ChatSlice"




const  Message:React.FC<IMsg> = ({message}) => {
const [state, setState] = useState(JSON.stringify(localStorage.getItem('message')))
    
const store = useAppSelector((state) => state.ChatSlice.user)
const dispatch = useAppDispatch()
let init
useEffect(() => {
    window.addEventListener('storage', function(event) {
        console.log(event);
    });
}, [message])

  
  return (
    <>
    {message ? Object.values(message).map((item:any, index:number) => {
            return <div className="message">
            <div className="message__container">
                <div className="sender__name">{item.sender}</div>
                <div className="sender__text">{item.text}</div>
            </div>
            </div> 
        
        }) : <></>
     } 
    </> 
    


  )
}

export default Message