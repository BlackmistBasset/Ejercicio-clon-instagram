import App from "../../../App";
import "./loginWrapper.css";

export const LoginWrapper = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <App />;
  } else {
    return (
      <a href="#" className="login__link">
        Iniciar Sesión
      </a>
    );
  }
};
