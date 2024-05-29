import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./login.css";

export const Register = ({ setIsRegister, setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");
  const [isValid, setIsValid] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
      alert("las contraseñas no coinciden");
    }

    if (username !== "" && email !== "" && password !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
      alert("por favor complete todos los campos");
    }

    if (isValid) {
      alert("se ha registrado exitosamente");
      setIsLoggedIn(true);
      setIsRegister(true);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div className="input__container">
          <label htmlFor="nombre">Nombre de usuario</label>
          <input
            type="text"
            placeholder="Ej: Pepito"
            id="nombre"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className="input__container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ej: pepito@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input__container">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type={typePassword}
            value={password}
            id="contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
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

        <div className="input__container">
          <label htmlFor="repetirContraseña">Repetir contraseña</label>
          <input
            type={typePassword}
            id="repetirContraseña"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
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
        Ya tienes cuenta?{" "}
        <span className="register__btn" onClick={() => setIsRegister(true)}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};
