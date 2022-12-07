import './index.css'
import avatar from './avatar.png'


function App() {
  return (
    <div className="chat">
      <div className="chat__window">
       <div className="header">
        <div className="header__container">
          <div className="header__logo">
            Frontend-Production
          </div>
          <div className="header__search">
          <input className='header__search-inpt' placeholder='Search or type a command'/>
          </div>
        </div>
       </div>

      <div className="users">
        <div className="users__container">
        <div className="users__info-container">
        <div className="users__title">
          Chat
        </div>
        <div className="users__search">
          <a className="_icon-uniE902" href="#"></a>
        </div>
        </div>
        <div className="users-list">
        <div className="users-list__container">
          <div className="users-list-title">
            Pinned
          </div>
          <div className="user-message">
            <div className="user__avatar-container">
                <div className="user__avatar">
                  <img src={avatar} className="user__avatar" />
                </div>
            </div>
            <div className="message">
              <div className="message__sender">
              Annushka Mehta
              </div>
            <div className="message__text">
            Hey, let’s catchup tomorrow!
                </div>
            </div>
            
            <div className="message__time-message">
            2:25 PM
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
   


      </div>
    </div>
  )
}

export default App