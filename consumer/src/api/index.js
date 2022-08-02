import axios from 'axios';

const url = "http://localhost:4000/lists";

export const fetchLists = () => axios.get(url);
export const createList = (newList) => axios.post(url, newList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);
export const updateList = (id, newList) => axios.patch(`${url}/${id}`, newList);
export const likeList = (id) => axios.patch(`${url}/${id}/thumbs`);