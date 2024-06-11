export const getPosts = () => {
  return JSON.parse(localStorage.getItem("posts"));
};

export const setPosts = (posts) => {
  localStorage.setItem("posts", posts);
};
