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
    postDescripcion: "Posteo 1 de Pepito",
    id: uuidv4(),
  },

  {
    seen: false,
    userName: "JACINTA",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion: "Posteo 1 de Pepito",
    id: uuidv4(),
  },

  {
    seen: true,
    userName: "Juancito",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion: "Posteo 1 de Juancito",
    id: uuidv4(),
  },
  {
    seen: false,
    userName: "Martita",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion: "Posteo 1 de Martita",
    id: uuidv4(),
  },
  {
    seen: true,
    userName: "Raul",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion: "Posteo 1 de Raul",
    id: uuidv4(),
  },

  {
    seen: true,
    userName: "Pepito",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion: "Posteo 2 de Pepito",
    id: uuidv4(),
  },

  {
    seen: false,
    userName: "Juancito",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion: "Posteo 2 de Juancito",
    id: uuidv4(),
  },
  {
    seen: true,
    userName: "Martita",
    profilePic: perfilPlaceholder,
    postImg: imgPost,
    postDescripcion: "Posteo 2 de Martita",
    id: uuidv4(),
  },

  {
    seen: true,
    userName: "Raul",
    profilePic: perfilPlaceholder,
    postImg: imgPost2,
    postDescripcion: "Posteo 2 de Raul",
    id: uuidv4(),
  },
];
