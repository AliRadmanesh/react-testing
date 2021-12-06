import toast from 'react-hot-toast';
import { ACTIVE_PART, SET_POPUP, CLEAR_POPUP } from './types';
import instance from '../../instance';

export const setActivePart = (name) => (dispatch) => {
  dispatch({
    type: ACTIVE_PART,
    payload: name,
  });
};

export const setPopup = (title, img, text, date) => (dispatch) => {
  dispatch({
    type: SET_POPUP,
    payload: { title, text, img, date },
  });
};

export const clearPopup = () => (dispatch) => {
  dispatch({
    type: CLEAR_POPUP,
  });
};

export const getDashboardUserRowData = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/profile');
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_USER',
        payload: res.data.data.profile,
      });
    }
  } catch (error) {
    // console.log(error);
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const getDashboardData = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard');
    const { stat, notifications } = res.data.data;
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_DATA',
        payload: { stat, notifications },
      });
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const getDashboardBookmarks = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/bookmarks');
    const { bookmark_courses, bookmark_jobs } = res.data.data;
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_BOOKMARKS',
        payload: { bookmark_courses, bookmark_jobs },
      });
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const getDashboardPurchases = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/purchases');
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_PURCHASES',
        payload: res.data.data,
      });
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const getDashboardWallet = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/wallet');
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_WALLET',
        payload: res.data.data,
      });
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const showDashboardMobileMenu = (bool) => (dispatch) =>
  dispatch({ type: 'SHOW_DASHBOARD_MOBILE_MENU', payload: bool });
