import { useState } from "react";

import { Perfil } from "../perfil/Perfil";
import { Likes } from "../likes/Likes";
import { Button } from "@chakra-ui/react";
import { EditPost } from "../editPost/EditPost";
import "./post.css";

export const Post = ({
  seen,
  userName,
  profilePic,
  postImg,
  postDescripcion,
  setPostsArray,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleEdit = () => {
    setIsEdit(true);
  };
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
      {isEdit ? (
        <EditPost
          postDescripcion={postDescripcion}
          setIsEdit={setIsEdit}
          setPostsArray={setPostsArray}
          id={id}
        />
      ) : (
        <>
          <p className="post__descripcion">{postDescripcion}</p>

          <Button
            variant="solid"
            colorScheme="blue"
            mt="10px"
            onClick={handleToggleEdit}
          >
            Editar
          </Button>
        </>
      )}
    </div>
  );
};
