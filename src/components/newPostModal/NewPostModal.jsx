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
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { validacionTexto } from "../../utils/validaciones";

export const NewPostModal = ({
  userName,
  profilePic,
  setPostsArray,
  postsArray,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log("objeto que crea la libreria:", data);
    console.log("submit");

    const newPost = {
      seen: false,
      userName: userName,
      profilePic: profilePic,
      postImg: data.postImg,
      postDescripcion: data.postDescription,
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl isInvalid={errors.postImg ? true : false}>
                <FormLabel>Imagen</FormLabel>
                <Input
                  type="text"
                  name="imgPost"
                  {...register("postImg", {
                    required: "este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "la url es demasiado corta",
                    },
                    maxLength: {
                      value: 10,
                      message: "la url es demasiado extensa",
                    },
                    pattern: {
                      value: /\d+/,
                      message: "Este input acepta solo números",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="postImg"
                  render={({ messages }) => {
                    console.log(messages);
                    return (
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <FormErrorMessage key={type}>
                          {message}
                        </FormErrorMessage>
                      ))
                    );
                  }}
                />
                {/* <FormErrorMessage>La imagen es obligatoria</FormErrorMessage> */}
              </FormControl>
              <FormControl
                mt="20px"
                isInvalid={errors.postDescription ? true : false}
              >
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  name="descripcionPost"
                  {...register("postDescription", { required: true })}
                />
                <FormErrorMessage>
                  La Descripción es obligatoria
                </FormErrorMessage>
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
