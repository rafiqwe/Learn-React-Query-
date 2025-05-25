import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPosts = (pageNumber) => {
  return api.get(`/posts?_start=${pageNumber}&_limit=10`);
};
// to delete a post
export const deletePost = (postId) => {
  return api.delete(`/posts/${postId}`);
};

// to update post
export const updatePost = (postId) => {
  return api.patch(`/posts/${postId}`, { title: " I have updated" });
};
// get method
export const fecthUsers = async ({ pageParm = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParm}`
    );
    return res.data
  } catch (error) {
    console.log(error);
  }
};
