import { SEARCH_COURSES, AUTO_SUGGEST, HIDE_SUGGEST } from './types';
import axios from '../../axios';

export const autoSuggest = (query) => async (dispatch) => {
  const res = await axios.get(`/api/v1/web/service/courses/autosuggest/?q=${query}`);
  // console.log(res);
  console.log(query);
  if (query) {
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: AUTO_SUGGEST,
        payload: res.data.data.courses,
      });
    }
  } else {
    dispatch({ type: AUTO_SUGGEST, payload: null });
  }
};

export const hideSuggest = () => (dispatch) => {
  dispatch({ type: HIDE_SUGGEST });
};
