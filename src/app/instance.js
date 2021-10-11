import axios from 'axios';

const token = '76|dTdoqvjhU4uuaoclBVeUss25vpK2wZmwEQf5Rrm1';

const instance = axios.create({
  baseURL: 'https://develop.karsazapp.ir',
  headers: {
    Authorization: `Bearer 76|dTdoqvjhU4uuaoclBVeUss25vpK2wZmwEQf5Rrm1`,
    // Authorization: `Wrong 76|dTdoqvjhU4uuaoclBVeUss25vpK2wZmwEQf5Rrm1`,
  },
});

export default instance;
