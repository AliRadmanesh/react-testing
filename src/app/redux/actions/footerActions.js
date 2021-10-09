import axios from 'axios';
import toast from 'react-hot-toast';

import { GET_TOP_CATEGORIES } from './types';

export const getTopCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://develop.karsazapp.ir/api/v1/web/content/courses/top-categories',
    );
    console.log(res.data);

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
