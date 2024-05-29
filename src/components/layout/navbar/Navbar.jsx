import { HStack } from "@chakra-ui/react";
import { NewPostModal } from "../../newPostModal/NewPostModal";

import "./navbar.css";

export const Navbar = ({ userName, setIsLoggedIn }) => {
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <HStack
        as="nav"
        maxWidth={640}
        justifyContent="space-between"
        margin="auto"
        py="15px"
      >
        <p>Bienvenido, {userName}</p>
        <NewPostModal />
        <button onClick={handleLogOut}>Cerrar Sesión</button>
      </HStack>
    </>
  );
};
