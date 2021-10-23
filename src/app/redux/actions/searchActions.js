import { SEARCH_COURSES, AUTO_SUGGEST } from './types';
import axios from '../../axios';

export const autoSuggest = (query) => async (dispatch) => {
  const res = await axios.get(`/api/v1/web/service/courses/autosuggest/?q=${query}`);
  // console.log(res);
  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: AUTO_SUGGEST,
      payload: res.data.data.courses,
    });
  }
};
