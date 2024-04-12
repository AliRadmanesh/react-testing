import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://karsaz.liara.run',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    // Authorization: `Wrong ${localStorage.getItem('userToken')}`,
  },
});

export default instance;
