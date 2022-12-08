import { SetStateAction, useEffect, useState } from 'react'
import Chat from './chat/Chat'
import Header from './header/header'
import './index.css'

// interface IProps_Square {
//   name: string;
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
//   setName: React.Dispatch<SetStateAction<string>>
// }

const App:React.FC= () => {


const [nameText, setNameText] = useState('')
const [name, setName] = useState(nameText)
const [welcomeBanner, setWelcomeBanner] = useState(true)

const addName = ():void => {
  if (nameText !== '' &&  nameText !== undefined) {
    setName(nameText);
    setWelcomeBanner(false)
    sessionStorage.setItem('user', JSON.stringify(nameText)) 
  }
};


      useEffect(() => {
        const userName:any = sessionStorage.getItem('user')
        setName(JSON.parse(userName))
        let session = sessionStorage.getItem('user')
          if (session !== null) {
            setWelcomeBanner(false)
          }
      }, [])
     

     

  return (

    <div className="chat">
      <div className="chat__window">
      <Header />
      <Chat name={name}/>
      </div>
      <div className={welcomeBanner ? 'asq-your-name' : 'completed'}>
        <div className="asq-your-name__form">
        <div className="asq-your-name__form__container">
          <div className='asq-your-name__name'>Как Вас зовут?</div>
          <input value={nameText} onChange={event => setNameText(event.target.value)}  className='asq-you-name__input' placeholder='Введите Ваше имя' />
          <button className='asq-your-name__btn' onClick={addName}>Сохранить</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App