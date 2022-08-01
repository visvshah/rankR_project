import axios from 'axios';

const url = "http://localhost:4000/lists";

export const fetchLists = () => axios.get(url);
export const createList = (newList) => axios.post(url, newList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);