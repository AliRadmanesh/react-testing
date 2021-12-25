/* eslint-disable array-callback-return */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { Redirect } from 'react-router-dom';
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
  SET_TOTAL_RESULTS,
  SET_CURRENT_PAGE,
  SET_QUERY_STATUS,
  SEARCH_QUERY,
  SET_QUERY_KEYWORDS,
  SET_QUERY_PAGE_TOTAL,
  SET_QUERY_TOTAL_RESULTS,
  SET_QUERY_CURRENT_PAGE,
  SET_QUERY_STRING,
  SET_QUERY_FILTERS_IS_FREE,
  SET_QUERY_FILTERS_SORT,
  ADD_QUERY_FILTERS_ACADEMY,
  ADD_QUERY_FILTERS_TYPE,
  REMOVE_QUERY_FILTERS_ACADEMY,
  REMOVE_QUERY_FILTERS_TYPE,
  CLEAR_QUERY_FILTERS,
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
  try {
    const res = await axios.get(`/api/v1/web/service/courses/autosuggest/?q=${query}`);
    if (query) {
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: AUTO_SUGGEST,
          payload: res.data.data.courses,
        });
      }
    } else {
      dispatch({ type: AUTO_SUGGEST, payload: [] });
    }
  } catch (error) {
    dispatch({ type: AUTO_SUGGEST, payload: [] });
  }
};

export const hideSuggest = () => (dispatch) => {
  dispatch({ type: HIDE_SUGGEST });
};

export const searchCourses = (query) => async (dispatch) => {
  let proceed = false;

  try {
    const res = await instance.get(`/api/v1/web/service/courses/search-filters/${query}`);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: SEARCH_CATEGORY_COURSES,
        payload: res.data.data,
      });
      dispatch({
        type: SET_PAGE_TOTAL,
        payload: res.data.meta.last_page,
      });
      dispatch({
        type: SET_TOTAL_RESULTS,
        payload: res.data.meta.total,
      });
    } else if (res.status === 404) {
      dispatch({ type: SEARCH_CATEGORY_COURSES, payload: [] });
    }
  } catch (error) {
    if (proceed) toast.error('خطا در دریافت دوره‌های مربوط به دسته‌بندی');
    else proceed = true;
  }
};

export const setSearchContent = (options) => (dispatch) => {
  dispatch({
    type: 'SET_QUERY_OPTIONS',
    payload: options,
  });
};

export const searchQuery = (query) => async (dispatch) => {
  let proceed = false;
  try {
    const res = await instance.get(`/api/v1/web/service/courses/search/${query}`);
    if (res.status === 200 || res.status === 201) {
      dispatch({ type: SET_QUERY_STATUS, payload: 200 });
      dispatch({ type: SEARCH_QUERY, payload: res.data.data.courses });
      dispatch({ type: SET_QUERY_PAGE_TOTAL, payload: res.data.meta.last_page });
      dispatch({ type: SET_QUERY_TOTAL_RESULTS, payload: res.data.meta.total });
    }
    if (res.data.data.courses.length === 0) {
      dispatch({ type: SET_QUERY_STATUS, payload: 200 });
    }
  } catch (error) {
    if (proceed) toast.error('خطا در اجرای عملیات جستجو');
    else proceed = true;
  }
};

export const setQueryKeywords = (string) => (dispatch) =>
  dispatch({ type: SET_QUERY_KEYWORDS, payload: string });

export const setQueryCurrentPage = (page) => (dispatch) =>
  dispatch({ type: SET_QUERY_CURRENT_PAGE, payload: page });

export const setQueryTotalPage = (page) => (dispatch) =>
  dispatch({ type: SET_QUERY_PAGE_TOTAL, payload: page });

export const setQueryOptions = (object) => (dispatch) => {
  dispatch({ type: 'SET_QUERY_OPTIONS', payload: object });
};

export const setQueryString =
  (query, academies = [], types = [], sort = 1, free = 0, page = 1) =>
  (dispatch) => {
    let proceed = false;
    let string = `q=${query}`;
    academies.forEach((item, index) => {
      string += `&academy[${index}]=${item.id}`;
    });
    types.map((item, index) => {
      string += `&type[${index}]=${item.id}`;
    });
    string += `&sortby=${sort}&is_free=${free}&page=${page}`;
    dispatch({ type: SET_QUERY_STRING, payload: string });
  };

export const setQueryIsFree = (num) => (dispatch) => {
  if (num === 0 || num === 1) {
    dispatch({
      type: SET_QUERY_FILTERS_IS_FREE,
      payload: num,
    });
  }
};

export const setQuerySort = (num) => (dispatch) => {
  if (num === 1 || num === 2 || num === 3) {
    dispatch({
      type: SET_QUERY_FILTERS_SORT,
      payload: num,
    });
  }
};

export const addQueryAcademyFilter = (object) => (dispatch) => {
  dispatch({
    type: ADD_QUERY_FILTERS_ACADEMY,
    payload: { id: object.id, name: object.name },
  });
};

export const addQueryTypeFilter = (object) => (dispatch) => {
  dispatch({
    type: ADD_QUERY_FILTERS_TYPE,
    payload: { id: object.id, name: object.name, type: object.type },
  });
};

export const removeQueryAcademyFilter = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_QUERY_FILTERS_ACADEMY,
    payload: id,
  });
};

export const removeQueryTypeFilter = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_QUERY_FILTERS_TYPE,
    payload: id,
  });
};

export const clearQueryFilters = () => (dispatch) => {
  dispatch({
    type: CLEAR_QUERY_FILTERS,
  });
};

export const clearAllQueryAdjustments = () => (dispatch) => {
  dispatch({ type: 'CLEAR_ALL_SEARCH_ADJUSTMENTS' });
};
