import React from "react";
import "./navbar.css";

export const Navbar = ({ userName, setIsLoggedIn }) => {
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <nav>
        <p>Bienvenido, {userName}</p>
        <button onClick={handleLogOut}>Cerrar Sesión</button>
      </nav>
    </>
  );
};
