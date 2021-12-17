import toast from 'react-hot-toast';
import {
  SET_USER_CHECK,
  SHOW_USER_HEADER_DATA,
  SHOW_USER_MENU,
  SHOW_CATEGORY_DESKTOP_MENU,
  SHOW_CATEGORY_MOBILE_MENU,
  GET_MENU_CATEGORIES,
} from './types';

import instance from '../../instance';

export const showUserHeaderData = (value) => (dispatch) => {
  dispatch({
    type: SHOW_USER_HEADER_DATA,
    payload: value,
  });
};

export const checkUser = () => async (dispatch) => {
  if (localStorage.getItem('userToken')) {
    try {
      const res = await instance.post('/api/v1/web/service/users/check');
      if (res.data.code === 200 || res.data.code === '200') {
        dispatch({
          type: SET_USER_CHECK,
          payload: res.data,
        });
        // CHANGIN STATE ON authReducer
        dispatch({
          type: 'SET_USER_AUTHENTICATION',
          payload: true,
        });
        showUserHeaderData(true);
      }

      if (res.status === 'error') {
        toast.error(res.message);
      }
    } catch (error) {
      // CHANGIN STATE ON authReducer
      dispatch({
        type: 'SET_USER_AUTHENTICATION',
        payload: false,
      });
      // toast.error('خطا در دریافت اطلاعات کاربری');
    }
  }
};

export const showMenu = (bool) => (dispatch) => {
  dispatch({ type: 'SHOW_MENU', payload: bool });
};

export const showUserMenu = (bool) => (dispatch) => {
  dispatch({
    type: SHOW_USER_MENU,
    payload: bool,
  });
};

export const showCategoryDesktopMenu = (bool) => (dispatch) => {
  dispatch({
    type: SHOW_CATEGORY_DESKTOP_MENU,
    payload: bool,
  });
};

export const showCategoryMobileMenu = (bool) => (dispatch) => {
  dispatch({
    type: SHOW_CATEGORY_MOBILE_MENU,
    payload: bool,
  });
};

export const getMenuCategories = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/content/courses/menu-categories');

    if (res.status === 201 || res.status === 200) {
      dispatch({
        type: GET_MENU_CATEGORIES,
        payload: res.data.data.categories,
      });
    } else {
      toast.error(res.message);
    }
  } catch (error) {
    toast.error('خطا در برقراری ارتباط برای دریافت دسته‌بندی منو');
  }
};
