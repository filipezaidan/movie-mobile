import axios from 'axios';

export const key = '80855eb845eed242d2dd0b1d9142f280';
export const language = 'pt-BR';
export const urlImage = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;