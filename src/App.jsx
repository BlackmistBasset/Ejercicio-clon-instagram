import { useEffect, useState } from "react";
import { useAxios } from "./hooks/useAxios";

import {
  Button,
  Spinner,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";

import { Post } from "./components/post/Post";
import { Carrousel } from "./components/carrousel/Carrousel";
import { Navbar } from "./components/layout/navbar/Navbar";
import { SlideInfinito } from "./components/slideInfinito/SlideInfinito";

import { posts } from "./posts";
import { getPosts, setPosts } from "./utils/localStorage";
import perfilPlaceholder from "./assets/michiPerfil.jpg";

const usuario = {
  nombre: "Aldana",
  profilePic: perfilPlaceholder,
};

function App({ setIsLoggedIn }) {
  const [postsArray, setPostsArray] = useState();
  const [updateApp, setUpdateApp] = useState(false);
  const { response, error, loading } = useAxios({
    url: "/posts",
    method: "get",
  });

  // const { response , error, loading } = useAxios("/notificaciones");

  // const {
  //   response: response,
  //   error: error,
  //   loading: postsLoading,
  // } = useAxios("/posts");

  // const {
  //   response: notificationsResponse,
  //   error: notificationsError,
  //   loading: notificationsLoading,
  // } = useAxios("/notifications");

  useEffect(() => {
    setPostsArray(response);
    setUpdateApp(false);
  }, [response, error]);

  const handleFilter = () => {
    const filteredArray = postsArray.filter((post) => !post.seen);
    setPostsArray(filteredArray);
  };
  return (
    <>
      <Navbar
        userName={usuario.nombre}
        setIsLoggedIn={setIsLoggedIn}
        profilePic={usuario.profilePic}
        setPostsArray={setPostsArray}
        postsArray={postsArray}
        setUpdateApp={setUpdateApp}
      />
      <Carrousel />
      <SlideInfinito />
      <div className="contenedor__posteos" style={{ marginTop: "40px" }}>
        <Button
          onClick={handleFilter}
          variant="outline"
          colorScheme="blue"
          mt="10px"
          mx="auto"
          display="block"
        >
          FILTRAR VISTOS
        </Button>

        {loading && (
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            my="30px"
            mx="auto"
            display="block"
          />
        )}

        {error && (
          <Alert
            flexDirection="column"
            alignItems="center"
            status="error"
            maxWidth="400px"
            margin="50px auto"
          >
            <AlertTitle>Ocurrió el siguiente error:</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        {postsArray?.map(
          (
            { userName, seen, profilePic, postImg, postDescripcion, id },
            index
          ) => {
            return (
              <Post
                userName={userName}
                seen={seen}
                profilePic={profilePic}
                postImg={postImg}
                postDescripcion={postDescripcion}
                key={`${id}-${index}`}
                setPostsArray={setPostsArray}
                id={id}
              />
            );
          }
        )}
      </div>
    </>
  );
}

export default App;
