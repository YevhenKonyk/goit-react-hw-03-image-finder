import axios from 'axios';

const APIkey = '14348648-b031b318d2a0c2c3bc8ffa9be';
const page = 1;

const BASE_URL = `https://pixabay.com/api/?page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12&q=`;
// const DEFAULT_QUERY = 'react';

// eslint-disable-next-line import/prefer-default-export
export const fetchImages = (query = 'limousine') => {
  return axios.get(BASE_URL + query);
};
