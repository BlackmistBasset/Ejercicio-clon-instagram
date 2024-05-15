import { Perfil } from "../perfil/Perfil";
import { Likes } from "../likes/Likes";
import "./post.css";

export const Post = ({
  seen,
  userName,
  profilePic,
  postImg,
  postDescripcion,
}) => {
  return (
    <div className="post__container">
      <Perfil
        type="post"
        seen={seen}
        userName={userName}
        profilePic={profilePic}
      />

      <img src={postImg} alt="Imagen posteo" className="post__img" />

      <Likes />
      <p className="post__descripcion"> {postDescripcion}</p>
    </div>
  );
};
