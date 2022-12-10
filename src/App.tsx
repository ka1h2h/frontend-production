import * as React from "react";
import { useState } from "react";
import { Chat } from "./chat/Chat";
import Header from "./header/Header";

import "./index.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { isUserEmpty, setUser, User } from "./redux/UserSlice";

const App: React.FC = () => {
  const currentUser = useAppSelector((s) => s.user.profile);
  const dispatch = useAppDispatch();

  const [nameText, setNameText] = useState("");
  const [welcomeBanner, setWelcomeBanner] = useState(isUserEmpty(currentUser));

  const onNameSave = (): void => {
    const u = new User(nameText);
    if (u.isValid()) {
      setWelcomeBanner(false);
      dispatch(setUser(u));
    }
  };

  return (
    <div className="chat">
      <div className="chat__window">
        <Header />
        <Chat name={currentUser.name} />
      </div>
      <div className={welcomeBanner ? "asq-your-name" : "completed"}>
        <div className="asq-your-name__form">
          <div className="asq-your-name-form__container">
            <div className="asq-your-name__name">Как Вас зовут?</div>
            <input
              value={nameText}
              onChange={(event) => setNameText(event.target.value)}
              className="asq-you-name__input"
              placeholder="Введите Ваше имя"
            />
            <button className="asq-your-name__btn" onClick={onNameSave}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
