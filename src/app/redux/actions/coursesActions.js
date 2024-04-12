import toast from 'react-hot-toast';
import {
  SET_COURSES_CATEGORY,
  GET_COURSES_DATA,
  GET_COURSES_SEARCH_DATA,
  DISPLAY_MOBILE_FILTER_MENU,
  SET_COURSES_IS_FREE,
  SET_COURSES_SORT,
  ADD_COURSES_TYPE_FILTER,
  ADD_COURSES_ACADEMY_FILTER,
  REMOVE_COURSES_ACADEMY_FILTER,
  REMOVE_COURSES_TYPE_FILTER,
  CLEAR_COURSES_FILTERS,
  SET_COURSES_QUERY,
  SET_CATEGORY_ID,
} from './types';
import axios from '../../axios';
import instance from '../../instance';

export const getCoursesData = () => (dispatch) => {};

export const setCoursesCategory = (id) => (dispatch) => {
  dispatch({
    type: SET_COURSES_CATEGORY,
    payload: id,
  });
};

export const getSearchContent = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/web/content/courses/search-content');
    if (res.data.code === 200) {
      dispatch({
        type: GET_COURSES_SEARCH_DATA,
        payload: res.data.data,
      });
    }
  } catch (err) {
    toast.error(err);
  }
};

export const setSearchContent = (options) => (dispatch) => {
  dispatch({
    type: GET_COURSES_SEARCH_DATA,
    payload: options,
  });
};

export const displayMobileFilterMenu = (bool) => (dispatch) => {
  dispatch({ type: DISPLAY_MOBILE_FILTER_MENU, payload: bool });
};

export const setCoursesQuery =
  (category, academies = [], types = [], sort = 1, free = 0, page) =>
  (dispatch) => {
    let string = `?category[0]=${category}`;
    academies.forEach((item, index) => {
      string += `&academy[${index}]=${item.id}`;
    });
    types.forEach((item, index) => {
      string += `&type[${index}]=${item.id}`;
    });
    string += `&sortby=${sort}${free > 0 ? `&is_free=${free}` : ''}&page=${page}`;
    dispatch({ type: SET_COURSES_QUERY, payload: string });
  };

export const setCoursesIsFree = (num) => (dispatch) => {
  if (num === 0 || num === 1) {
    dispatch({
      type: SET_COURSES_IS_FREE,
      payload: num,
    });
  }
};

export const setCoursesSort = (num) => (dispatch) => {
  if (num === 1 || num === 2 || num === 3) {
    dispatch({
      type: SET_COURSES_SORT,
      payload: num,
    });
  } else {
    toast.error('ورودی اشتباه است.');
  }
};

export const addCoursesAcademyFilter = (object) => (dispatch) => {
  dispatch({
    type: ADD_COURSES_ACADEMY_FILTER,
    payload: { id: object.id, name: object.name },
  });
};

export const addCoursesTypeFilter = (object) => (dispatch) => {
  dispatch({
    type: ADD_COURSES_TYPE_FILTER,
    payload: { id: object.id, name: object.name, type: object.type },
  });
};

export const removeCoursesAcademyFilter = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_COURSES_ACADEMY_FILTER,
    payload: id,
  });
};

export const removeCoursesTypeFilter = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_COURSES_TYPE_FILTER,
    payload: id,
  });
};

export const clearCoursesFilters = () => (dispatch) => {
  dispatch({
    type: CLEAR_COURSES_FILTERS,
  });
};

export const setCategoryId = (id) => (dispatch) => dispatch({ type: SET_CATEGORY_ID, payload: id });
