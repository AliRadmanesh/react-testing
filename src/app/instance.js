import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://develop.karsazapp.ir',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    // Authorization: `Wrong 76|dTdoqvjhU4uuaoclBVeUss25vpK2wZmwEQf5Rrm1`,
  },
});

export default instance;
