import axios from 'axios';

const token = '76|dTdoqvjhU4uuaoclBVeUss25vpK2wZmwEQf5Rrm1';

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
