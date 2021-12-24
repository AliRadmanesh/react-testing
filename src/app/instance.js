import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://karsazapp.ir',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    // Authorization: `Wrong ${localStorage.getItem('userToken')}`,
  },
});

export default instance;
