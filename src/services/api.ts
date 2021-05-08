import axios from 'axios';

export const key = '';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});

export default api;