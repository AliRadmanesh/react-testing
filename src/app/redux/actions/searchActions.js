/* eslint-disable array-callback-return */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import instance from '../../instance';
import axios from '../../axios';
import { SEARCH_COURSES, AUTO_SUGGEST, HIDE_SUGGEST, SEARCH_CATEGORY_COURSES } from './types';

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
  (query = '', academies = [], types = [], categories = [], sort = 1, free = 0) =>
  (dispatch) => {
    let search = `?=${query}`;
    academies.forEach(
      (item, index) =>
        function () {
          search += `&academy[${index}]=${item}`;
        },
    );
    types.forEach(
      (item, index) =>
        function () {
          search += `&type[${index}]=${item}`;
        },
    );
    categories.forEach(
      (item, index) =>
        function () {
          search += `&category[${index}]=${item}`;
        },
    );

    console.log(search);
    // axios.get('/')
  };

export const searchCategoryCourses = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`/api/v1/web/service/courses/search-filters/?category[0]=${id}`);

    console.log(res);

    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: SEARCH_CATEGORY_COURSES,
        payload: res.data.data.courses,
      });
    } else if (res.status === 404) {
      dispatch({ type: SEARCH_CATEGORY_COURSES, payload: [] });
    }
  } catch (error) {
    console.error(error);
  }
};
