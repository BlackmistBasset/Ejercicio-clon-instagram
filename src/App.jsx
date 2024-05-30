import { useState } from "react";

import { Post } from "./components/post/Post";
import { Carrousel } from "./components/carrousel/Carrousel";
import { Navbar } from "./components/layout/navbar/Navbar";
import { SlideInfinito } from "./components/slideInfinito/SlideInfinito";

import { posts } from "./posts";

import perfilPlaceholder from "./assets/michiPerfil.jpg";

const usuario = {
  nombre: "Aldana",
  profilePic: perfilPlaceholder,
};

function App({ setIsLoggedIn }) {
  const [postsArray, setPostsArray] = useState(posts);
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
        {postsArray.map(
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
              />
            );
          }
        )}
      </div>
    </>
  );
}

export default App;
