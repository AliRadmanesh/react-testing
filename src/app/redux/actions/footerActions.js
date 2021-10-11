import axios from 'axios';
import toast from 'react-hot-toast';
import instance from '../../instance';

import { GET_TOP_CATEGORIES } from './types';

export const getTopCategories = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/content/courses/top-categories');

    if (res.data.code === 200) {
      dispatch({
        type: GET_TOP_CATEGORIES,
        payload: res.data.data.top_categories,
      });
    }
  } catch (error) {
    toast.error(error);
  }
};
