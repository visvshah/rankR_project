import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4000"});

API.interceptors.request.use((request) => {
    if(localStorage.getItem("profile")){
        request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return request;
});

export const fetchLists = () => API.get("/lists");
export const createList = (newList) => API.post("/lists", newList);
export const deleteList = (id) => API.delete(`/lists/${id}`);
export const updateList = (id, newList) => API.patch(`/lists/${id}`, newList);
export const likeList = (id) => API.patch(`/lists/${id}/thumbs`);
export const dislikeList = (id) => API.patch(`/lists/${id}/thumbsDown`);

export const signin = (userData) => API.post("/user/signin", userData);
export const signup = (userData) => API.post("/user/signup", userData);