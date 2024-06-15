import { useEffect, useState } from "react";
import { posts } from "../../posts";
import { getPosts } from "../../utils/localStorage";
import { Button, HStack, Text, Container } from "@chakra-ui/react";

export const Filtros = ({ postsArray, setPostsArray }) => {
  const [usersArray, setUsersArray] = useState([]);
  const [filtroPorUsuario, setFiltroPorUsuario] = useState("Todos");
  let users = [];
  useEffect(() => {
    posts.forEach(({ userName }) => {
      !users.includes(userName) && users.push(userName);
    });

    setUsersArray(users);
  }, []);

  useEffect(() => {
    if (filtroPorUsuario !== "Todos") {
      const postsFiltrados = getPosts().filter((post) => {
        return post.userName === filtroPorUsuario;
      });
      setPostsArray(postsFiltrados);
    } else {
      setPostsArray(getPosts());
    }
  }, [filtroPorUsuario]);

  const handleFilter = (user) => {
    setFiltroPorUsuario(user);
  };

  return (
    <Container my="30px">
      <Text maxW="640px" mx="auto">
        Filtrar posteos de: {filtroPorUsuario}
      </Text>
      <HStack maxW="640px" mx="auto" justifyContent="center" gap="20px">
        {usersArray?.map((user) => (
          <Button key={user} onClick={() => handleFilter(user)}>
            {user}
          </Button>
        ))}
        <Button onClick={() => handleFilter("Todos")}>Todos</Button>
      </HStack>
    </Container>
  );
};
