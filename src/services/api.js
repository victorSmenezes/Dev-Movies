import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a1b55eb019478e6fb686935b16e69e00',
    language: 'pt-BR',
    page: 1
  }
});

export default api;
