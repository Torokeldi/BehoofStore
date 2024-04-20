import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";

interface Props {}

const Login: React.FC<Props> = () => {
  const [currentSection, setCurrentSection] = useState<
    "registration" | "authorization"
  >("registration");

  const handleSectionChange = (section: "registration" | "authorization") => {
    setCurrentSection(section);
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-content">
        <div className="buttonsNav">
          <button onClick={() => handleSectionChange("registration")}>
            Регистрация
          </button>
          <button onClick={() => handleSectionChange("authorization")}>
            Авторизация
          </button>
        </div>
        <div className="auth-register">
          {currentSection === "registration" && (
            <form action="#" className="registration-form">
              <h1>Регистрация</h1>
              <div className="form-block">
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" />
              </div>
              <div className="form-block">
                <label htmlFor="number">Номер</label>
                <input type="tel" id="number" />
              </div>
              <div className="form-block">
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" />
              </div>
              <div className="form-block">
                <label htmlFor="confirmPassword">Подтверждение пароля</label>
                <input type="password" id="confirmPassword" />
              </div>
              <div className="form-block">
                <button type="submit">Зарегистрироваться</button>
              </div>
            </form>
          )}

          {currentSection === "authorization" && (
            <form action="#" className="authorization-form">
              <h1>Авторизация</h1>
              <div className="form-block">
                <label htmlFor="authName">Имя</label>
                <input type="text" id="authName" />
              </div>
              <div className="form-block">
                <label htmlFor="authNumber">Номер</label>
                <input type="tel" id="authNumber" />
              </div>
              <div className="form-block">
                <label htmlFor="authPassword">Пароль</label>
                <input type="password" id="authPassword" />
              </div>
              <div className="auth-bottom">
                <button type="submit">Войти</button>
                <a href="#">ЗАБЫЛИ ПАРОЛЬ ?</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
