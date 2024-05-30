import { v4 as uuidv4 } from "uuid";

import perfilPlaceholder from "./assets/michiPerfil.jpg";
import imgPost from "./assets/pizza.jpg";
import imgPost2 from "./assets/pizza2.jpg";

export const posts = [
  {
    seen: false,
    userName: "Pepito",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro.",
    id: uuidv4(),
  },

  {
    seen: true,
    userName: "Juancito",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro.",
    id: uuidv4(),
  },
  {
    seen: false,
    userName: "Martita",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro.",
    id: uuidv4(),
  },
  {
    seen: true,
    userName: "Juancito",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse magni odit neque iste asperiores. Ullam, facere numquam vero voluptas praesentium, architecto quidem quo nisi at distinctio id? Labore, porro.",
    id: uuidv4(),
  },
];
