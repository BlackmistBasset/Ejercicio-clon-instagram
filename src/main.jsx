import React from "react";
import ReactDOM from "react-dom/client";

import { LoginWrapper } from "./components/layout/loginWrapper/LoginWrapper.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginWrapper isLoggedIn={true} />
  </React.StrictMode>
);
