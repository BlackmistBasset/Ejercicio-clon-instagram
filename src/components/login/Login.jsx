import React, { useState, useEffect } from "react";

import {
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import "./login.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = ({ setIsRegister, setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [canTryLogin, setCanTryLogin] = useState(true);
  const [nroIntentos, setNroIntentos] = useState(3);
  const [typePassword, setTypePassword] = useState("password");
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  useEffect(() => {
    //NO HACER ESTO!! No se modifica un estado dentro de un useEffect sin control si el estado es dependencia
    // setNroIntentos(nroIntentos + 1);
    console.log("UseEffect ejecutandose");
    console.log(nroIntentos);
    if (nroIntentos === 0) {
      setCanTryLogin(false);
    }
  }, [nroIntentos]);

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
      setShowErrorLogin(true);
      if (nroIntentos > 0) {
        setNroIntentos(nroIntentos - 1);
      }
    }
  };

  const handleCheckInput = (e) => {
    setUserName(e.target.value);
    if (username === "grito") {
      setUserName(username.toLocaleUpperCase());
    }
  };

  return (
    <>
      <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmitForm}>
          <div className="input__container">
            <label htmlFor="nombre">Nombre de usuario</label>
            <Input
              type="text"
              placeholder="Ej: Pepito"
              autoComplete="off"
              id="nombre"
              name="nombre"
              onChange={() => {
                handleCheckInput;
                setShowErrorLogin(false);
              }}
            />
          </div>

          <div className="input__container">
            <label htmlFor="contraseña">Contraseña</label>
            <Input
              type={typePassword}
              id="contraseña"
              name="contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
                setShowErrorLogin(false);
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

          <Button type="submit" variant="solid" display="block" mx="auto">
            Iniciar Sesión
          </Button>

          <p>Número de intentos disponibles: {nroIntentos}</p>
          {showErrorLogin && (
            <Alert>
              <AlertDescription>
                Los datos ingresados no coinciden con ningún usuario registrado
              </AlertDescription>
            </Alert>
          )}
        </form>
        <p className="register__legend">
          Aun no tiene cuenta?{" "}
          <span className="register__btn" onClick={() => setIsRegister(false)}>
            Regístrate
          </span>
        </p>
      </div>
      {!canTryLogin && (
        <Alert status="error" w="80%" mt="200px" mx="auto">
          <AlertIcon />
          <AlertTitle>Tu cuenta ha sido bloqueada!</AlertTitle>
          <AlertDescription>
            Si crees que fue un error, contactate con soporte técnico.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
