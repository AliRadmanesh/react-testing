import axios from 'axios';
import toast from 'react-hot-toast';

import { GET_TOP_CATEGORIES } from './types';

export const getTopCategories = () => async (dispatch) => {
  try {
    const res = axios.get('https://develop.karsazapp.ir/api/v1/web/content/courses/top-categories');

    if (res.code === '200') {
      dispatch({
        type: GET_TOP_CATEGORIES,
        payload: res.data,
      });
    }

    if (res.code >= 400) {
      toast.error(res.message);
    }
  } catch (error) {
    toast.error(error);
  }
};
