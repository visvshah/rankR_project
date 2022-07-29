import axios from 'axios';

const url = "http://localhost:5000/lists";

export const fetchLists = () => axios.get(url);