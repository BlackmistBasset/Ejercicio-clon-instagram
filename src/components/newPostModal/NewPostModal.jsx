import { useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { MdOutlineAddBox } from "react-icons/md";

import { v4 as uuidv4 } from "uuid";

export const NewPostModal = ({
  userName,
  profilePic,
  setPostsArray,
  postsArray,
}) => {
  const [input, setInput] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const isError = input === "";

  const handleSubmitNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      seen: false,
      userName: userName,
      profilePic: profilePic,
      postImg: e.target.imgPost.value,
      postDescripcion: e.target.descripcionPost.value,
      id: uuidv4(),
    };

    const updatedPosts = [...postsArray, newPost];

    console.log(updatedPosts);
    setPostsArray(updatedPosts);
    onClose();
  };

  return (
    <>
      <Button
        variant="solid"
        bg="#d2009a"
        _hover={{ bg: "#880364" }}
        color="white"
        onClick={onOpen}
        leftIcon={<MdOutlineAddBox style={{ fontSize: "24px" }} />}
      >
        Nuevo post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuevo post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              as="form"
              className="new_post__form"
              onSubmit={handleSubmitNewPost}
            >
              <FormControl isInvalid={isError}>
                <FormLabel>Imagen</FormLabel>
                <Input
                  type="text"
                  onChange={handleInputChange}
                  name="imgPost"
                />
                <FormErrorMessage>La imagen es obligatoria</FormErrorMessage>
              </FormControl>
              <FormControl mt="20px">
                <FormLabel>Descripción</FormLabel>
                <Textarea name="descripcionPost" />
              </FormControl>
              <HStack mb="20px" mt="10px">
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  variant="outline"
                  color="#d2009a"
                  borderColor="#d2009a"
                  _hover={{ borderColor: "#880364", bg: "#eee" }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="solid"
                  bg="#d2009a"
                  _hover={{ bg: "#880364" }}
                  color="white"
                  type="submit"
                >
                  Subir post
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
