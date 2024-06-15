import { useRef, useEffect } from "react";

import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { getPosts, setPosts } from "../../utils/localStorage";
import "./editPost.css";

export const EditPost = ({ postDescripcion, setIsEdit, setPostsArray, id }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    console.log("Edito un post");
    textareaRef.current.focus();
    const length = textareaRef.current.value.length;
    textareaRef.current.setSelectionRange(length, length);

    return () => {
      console.log("Se desmonta mi componente editar");
    };
  }, []);

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const newPostsArray = getPosts().map((arrayPost) => {
      if (arrayPost.id === id) {
        return {
          ...arrayPost,
          postDescripcion: e.target.descripcion.value,
        };
      } else {
        return arrayPost;
      }
    });
    setPostsArray(newPostsArray);
    setPosts(JSON.stringify(newPostsArray));
  };

  return (
    <Stack as="form" className="edit_post__form" onSubmit={handleEditPost}>
      <textarea
        ref={textareaRef}
        defaultValue={postDescripcion}
        name="descripcion"
      ></textarea>
      <ButtonGroup gap="3" justifyContent="end" display="flex">
        <Button
          onClick={handleCancelEdit}
          variant="outline"
          colorScheme="blue"
          mt="10px"
        >
          Cancelar
        </Button>

        <Button type="submit" variant="solid" colorScheme="blue" mt="10px">
          Editar
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
