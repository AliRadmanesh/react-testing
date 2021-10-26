/* eslint-disable array-callback-return */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { useSelector } from 'react-redux';
import instance from '../../instance';
import axios from '../../axios';
import { SEARCH_COURSES, AUTO_SUGGEST, HIDE_SUGGEST } from './types';

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

export const searchCourses =
  (academies = [], types = [], sort = 1, free = 0) =>
  (dispatch) => {
    console.log(1);
  };
