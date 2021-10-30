/* eslint-disable array-callback-return */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import toast from 'react-hot-toast';
import instance from '../../instance';
import axios from '../../axios';
import {
  SET_KEYWORDS,
  SEARCH_COURSES,
  AUTO_SUGGEST,
  HIDE_SUGGEST,
  SEARCH_CATEGORY_COURSES,
  SET_PAGE_TOTAL,
  SET_CURRENT_PAGE,
} from './types';

export const setKeywords = (string) => (dispatch) => {
  dispatch({
    type: SET_KEYWORDS,
    payload: string,
  });
};

export const setCurrentPage = (page) => (dispatch) =>
  dispatch({ type: SET_CURRENT_PAGE, payload: page });

export const setTotalPage = (page) => (dispatch) =>
  dispatch({ type: SET_PAGE_TOTAL, payload: page });

export const autoSuggest = (query) => async (dispatch) => {
  const res = await axios.get(`/api/v1/web/service/courses/autosuggest/?q=${query}`);
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
  (category, academies = [], types = [], sort = 1, free = 0, page) =>
  async (dispatch) => {
    let proceed = false;
    let search = `?category[0]=${category}`;
    academies.forEach((item, index) => {
      search += `&academy[${index}]=${item.id}`;
    });
    types.map((item, index) => {
      search += `&type[${index}]=${item.id}`;
    });
    search += `&sortby=${sort}&is_free=${free}&page=${page}`;
    // console.log(search);

    try {
      const res = await instance.get(`/api/v1/web/service/courses/search-filters/${search}`);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: SEARCH_CATEGORY_COURSES,
          payload: res.data.data.courses,
        });
        dispatch({
          type: SET_PAGE_TOTAL,
          payload: res.data.meta.last_page,
        });
      } else if (res.status === 404) {
        dispatch({ type: SEARCH_CATEGORY_COURSES, payload: [] });
      }
    } catch (error) {
      if (proceed) toast.error('خطا در دریافت دوره‌های مربوط به دسته‌بندی');
      else proceed = true;
    }
  };
