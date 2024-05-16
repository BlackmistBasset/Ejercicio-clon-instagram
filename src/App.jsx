import { Post } from "./components/post/Post";
import { Carrousel } from "./components/carrousel/Carrousel";

import perfilPlaceholder from "./assets/michiPerfil.jpg";
import imgPost from "./assets/pizza.jpg";
import imgPost2 from "./assets/pizza2.jpg";

function App() {
  return (
    <>
      <Carrousel />

      <div className="contenedor__posteos" style={{ marginTop: "40px" }}>
        <Post
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
          postImg={imgPost}
          postDescripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro."
        />

        <Post
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
          postImg={imgPost2}
          postDescripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro."
        />

        <Post
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
          postImg={imgPost}
          postDescripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro."
        />

        <Post
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
          postImg={imgPost2}
          postDescripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro."
        />
      </div>
    </>
  );
}

export default App;
