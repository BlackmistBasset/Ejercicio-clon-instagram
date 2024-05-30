import { useState } from "react";
import "./likes.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Likes = () => {
  const [liked, setLiked] = useState(false);
  const [cantidadLikes, setCantidadLikes] = useState(0);

  const handleToggleLike = () => {
    console.log("click");
    setLiked((estadoAnterior) => !estadoAnterior);

    if (liked) {
      setLiked(false);
      setCantidadLikes(cantidadLikes - 1);
    } else {
      setLiked(true);
      setCantidadLikes(cantidadLikes + 1);
    }
    console.log(liked);
  };

  return (
    <div className="likes__contenedor">
      {liked ? (
        <FaHeart
          color="red"
          size="2em"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLiked(false);
            setCantidadLikes(cantidadLikes - 1);
          }}
        />
      ) : (
        <FaRegHeart
          size="2em"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLiked(true);
            setCantidadLikes(cantidadLikes + 1);
          }}
        />
      )}
      {cantidadLikes > 0 && (
        <p className="likes__contador">
          <span className="likes__cantidad">{cantidadLikes}</span>
          {cantidadLikes === 1 ? " like" : " likes"}
        </p>
      )}
    </div>
  );
};
