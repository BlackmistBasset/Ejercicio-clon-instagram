import { Perfil } from "./components/perfil/Perfil";
import { ContenedorHistorias } from "./components/layout/contenedorHistorias/ContenedorHistorias";
import { Post } from "./components/post/Post";

import perfilPlaceholder from "./assets/michiPerfil.jpg";
import imgPost from "./assets/pizza.jpg";
import imgPost2 from "./assets/pizza2.jpg";

function App() {
  return (
    <>
      <ContenedorHistorias>
        <Perfil
          type="historia"
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
        />
        <Perfil
          type="historia"
          seen={false}
          userName="Paco"
          profilePic={perfilPlaceholder}
        />
        <Perfil
          type="historia"
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
        />
        <Perfil
          type="historia"
          seen={false}
          userName="Paco"
          profilePic={perfilPlaceholder}
        />
        <Perfil
          type="historia"
          seen={true}
          userName="Alfonso"
          profilePic={perfilPlaceholder}
        />
        <Perfil
          type="historia"
          seen={true}
          userName="Manuel"
          profilePic={perfilPlaceholder}
        />
      </ContenedorHistorias>

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
