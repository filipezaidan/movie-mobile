import axios from 'axios';

export const key = '80855eb845eed242d2dd0b1d9142f280';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});

export default api;