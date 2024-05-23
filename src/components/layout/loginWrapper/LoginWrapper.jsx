import App from "../../../App";
import { useState } from "react";
import "./loginWrapper.css";

export const LoginWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogIn = () => {
    setIsLoggedIn(true);
    setUserName("Pepito");
  };
  if (isLoggedIn) {
    return <App userName={userName} setIsLoggedIn={setIsLoggedIn} />;
  } else {
    return (
      <a href="#" className="login__link" onClick={handleLogIn}>
        Iniciar Sesión
      </a>
    );
  }
};
