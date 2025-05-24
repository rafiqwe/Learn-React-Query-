import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPosts = async () => {
    try {
        const response = await api.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}