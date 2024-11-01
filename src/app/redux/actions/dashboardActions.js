import toast from 'react-hot-toast';
import { ACTIVE_PART, SET_POPUP, CLEAR_POPUP } from './types';
import instance from '../../instance';
import axios from '../../axios';

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
    // const { stat, notifications } = res.data.data;
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_DATA',
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

export const getDashboardBookmarks = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/bookmarks');
    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_BOOKMARKS',
        payload: res.data.data,
      });
    }
  } catch (error) {
    toast.error(error);
    // const { status, data } = error.response;
    // if (status === 401)
    //   toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    // if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    // else toast.error(data.message);
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

export const getDashboardFavoritesLists = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/web/content/courses/all-categories');

    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_FAVORITES_COURSES',
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

  try {
    const res = await axios.get('/api/v1/web/content/jobs/all-categories');

    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_FAVORITES_JOBS',
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

export const getDashboardFavoritesInterests = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/favorites');

    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_FAVORITES_INTERESTS',
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

export const updateDashboardFavoriteInterest = async (
  favorite_course_categories,
  favorite_job_categories,
) => {
  try {
    const data = { favorite_course_categories, favorite_job_categories };
    const res = await instance.post('/api/v1/web/service/users/dashboard/favorites', data);

    if (res.status === 200) {
      window.location.reload();
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401)
      toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
    if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
    else toast.error(data.message);
  }
};

export const getDashboardNotifications = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/notifications');

    if (res.status === 200) {
      dispatch({
        type: 'SET_DASHBOARD_NOTIFICATIONS',
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

export const changeNotifViewStatus = (data) => async () => {
  const res = await instance.post(
    `/api/v1/web/service/users/dashboard/notifications/${data.id}/view`,
    { notification_type: data.type },
  );

  if (res.status === 200 || res.status === 201) {
    // Do nothing :)
  }
};

export const showDashboardModal = (data) => (dispatch) => {
  dispatch({
    type: 'CHANGE_NOTIFICATION_VIEW_STATUS',
    payload: data,
  });
  dispatch({
    type: 'SHOW_DASHBOARD_MODAL',
    payload: data,
  });
};

export const closeDashboardModal = () => (dispatch) => {
  dispatch({ type: 'CLOSE_DASHBOARD_MODAL' });
};

export const addDashboardFavoritesInterestsCourses = (object) => (dispatch) => {
  dispatch({ type: 'ADD_DASHBOARD_FAVORITES_INTERESTS_COURSES', payload: object });
};

export const removeDashboardFavoritesInterestsCourses = (id) => (dispatch) => {
  dispatch({ type: 'REMOVE_DASHBOARD_FAVORITES_INTERESTS_COURSES', payload: id });
};

export const addDashboardFavoritesInterestsJobs = (object) => (dispatch) => {
  dispatch({ type: 'ADD_DASHBOARD_FAVORITES_INTERESTS_JOBS', payload: object });
};

export const removeDashboardFavoritesInterestsJobs = (id) => (dispatch) => {
  dispatch({ type: 'REMOVE_DASHBOARD_FAVORITES_INTERESTS_JOBS', payload: id });
};

export const showDashboardMobileMenu = (bool) => (dispatch) =>
  dispatch({ type: 'SHOW_DASHBOARD_MOBILE_MENU', payload: bool });

export const getDashboardTransactions = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/users/dashboard/wallet/transactions');
    if (res.status === 200) {
      dispatch({
        type: 'GET_DASHBOARD_TRANSACTIONS',
        payload: res.data.data,
      });
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    const { data, status } = error.response;
    toast.error(data.message);
  }
};
