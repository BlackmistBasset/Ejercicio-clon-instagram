import React, { useState } from "react";

import "./login.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = ({ setIsRegister, setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");

  const usuarioAldana = {
    usuario: "Aldana",
    contraseña: "Aldi123",
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //Formulario no controlado para nada (sin usar estados capturo los valores de los inputs)
    //console.log(e.target.nombre.value, e.target.contraseña.value);

    const datos = {
      usuario: username,
      contraseña: password,
    };
    if (
      datos.usuario === usuarioAldana.usuario &&
      datos.contraseña === usuarioAldana.contraseña
    ) {
      setIsLoggedIn(true);
    } else {
      alert("los datos ingresados no coinciden con ningún usuario registrado");
    }
  };

  const handleCheckInput = (e) => {
    setUserName(e.target.value);
    if (username === "grito") {
      setUserName(username.toLocaleUpperCase());
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmitForm}>
        <div className="input__container">
          <label htmlFor="nombre">Nombre de usuario</label>
          <input
            type="text"
            placeholder="Ej: Pepito"
            autoComplete="off"
            id="nombre"
            name="nombre"
            value={username}
            onChange={handleCheckInput}
          />
          <p>Nombre tipeado: {username}</p>
        </div>

        <div className="input__container">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type={typePassword}
            id="contraseña"
            name="contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <span className="view__password">
            {typePassword === "password" ? (
              <FaEye onClick={() => setTypePassword("text")} />
            ) : (
              <FaEyeSlash onClick={() => setTypePassword("password")} />
            )}
          </span>
        </div>

        <input type="submit" value="Iniciar Sesión" />
      </form>
      <p className="register__legend">
        Aun no tiene cuenta?{" "}
        <span className="register__btn" onClick={() => setIsRegister(false)}>
          Regístrate
        </span>
      </p>
    </div>
  );
};
