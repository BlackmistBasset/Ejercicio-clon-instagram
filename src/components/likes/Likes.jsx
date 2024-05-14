import "./likes.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Likes = ({ liked, count }) => {
  return (
    <div className="likes__contenedor">
      {liked ? (
        <FaHeart color="red" size="2em" style={{ cursor: "pointer" }} />
      ) : (
        <FaRegHeart size="2em" style={{ cursor: "pointer" }} />
      )}
      {count > 0 && (
        <p className="likes__contador">
          <span className="likes__cantidad">{count}</span>
          {count === 1 ? " like" : " likes"}
        </p>
      )}
    </div>
  );
};
