import axios from 'axios';

const url = "http://localhost:4000/lists";

export const fetchLists = () => axios.get(url);