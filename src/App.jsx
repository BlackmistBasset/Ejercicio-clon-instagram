import { useState } from "react";

import { Button } from "@chakra-ui/react";

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
  const [postsArray, setPostsArray] = useState(
    getPosts() || setPosts(JSON.stringify(posts))
  );
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
