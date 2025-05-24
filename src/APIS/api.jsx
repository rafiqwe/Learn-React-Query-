import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPosts = (pageNumber) => {
    return api.get(`/posts?_start=${pageNumber}&_limit=10`);
}