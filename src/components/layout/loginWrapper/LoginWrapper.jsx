import { useState } from "react";

import App from "../../../App";
import { Login } from "../../login/Login";
import { Register } from "../../login/Register";

import "./loginWrapper.css";

export const LoginWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Aldana");
  const [isRegister, setIsRegister] = useState(true);

  const handleLogIn = () => {
    setIsLoggedIn(true);
    setUserName("Pepito");
  };
  if (isLoggedIn) {
    return <App userName={userName} setIsLoggedIn={setIsLoggedIn} />;
  } else {
    return (
      <>
        {/* <a href="#" className="login__link" onClick={handleLogIn}>
          Iniciar Sesión
        </a> */}
        {isRegister ? (
          <Login setIsRegister={setIsRegister} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Register
            setIsRegister={setIsRegister}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </>
    );
  }
};
