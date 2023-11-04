import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

httpService.interceptors.request.use(
  async (config) => {
    //* config.headers['Authorization'] = `Bearer token`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
