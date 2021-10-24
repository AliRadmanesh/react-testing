import toast from 'react-hot-toast';
import {
  GET_COURSES_DATA,
  GET_COURSES_SEARCH_DATA,
  DISPLAY_MOBILE_FILTER_MENU,
  SET_COURSES_IS_FREE,
  SET_COURSES_SORT,
} from './types';
import axios from '../../axios';
import instance from '../../instance';

export const getCoursesData = () => (dispatch) => {};

export const getSearchContent = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/web/content/courses/search-content');

    console.log(res.data.data);

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

export const displayMobileFilterMenu = (bool) => (dispatch) => {
  dispatch({ type: DISPLAY_MOBILE_FILTER_MENU, payload: bool });
};

export const setCoursesIsFree = (num) => (dispatch) => {
  if (num === 0 || num === 1) {
    dispatch({
      type: SET_COURSES_IS_FREE,
      payload: num,
    });
  }
};

export const setCoursesType = (num) => (dispatch) => {
  if (num === 1 || num === 2 || num === 3) {
    dispatch({
      type: SET_COURSES_SORT,
      payload: num,
    });
  }
};
