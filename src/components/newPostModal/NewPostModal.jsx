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
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineAddBox } from "react-icons/md";

export const NewPostModal = () => {
  const [input, setInput] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const isError = input === "";

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
            <FormControl isInvalid={isError}>
              <FormLabel>Titulo</FormLabel>
              <Input type="text" onChange={handleInputChange} />
              <FormErrorMessage>El título es obligatorio</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
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
            >
              Subir post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
