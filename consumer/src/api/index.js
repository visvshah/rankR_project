import axious from 'axious';

const url = "http://localhost:5000/lists";

export const getPost = () => axious.get(url);