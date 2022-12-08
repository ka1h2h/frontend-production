import * as React  from 'react'
import './chatWithUser.css'
import Message from './Message'


export interface IMsg {
    message: object[]
}
const ChatWithUser:React.FC<IMsg> = ({message}) => {
    function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
        const ref = React.useRef<HTMLDivElement>();
        React.useEffect(() => {
          if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
          }
        }, [dep]);
        return ref;
    }
    const ref = useChatScroll(message)

  return (
    <div className="chat-with-user" id="scroll" ref={ref}>  
        <Message message={message}/>
    </div>
  )
}

export default ChatWithUser