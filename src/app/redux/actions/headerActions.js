import toast from 'react-hot-toast';
import { SET_USER_CHECK, SHOW_USER_HEADER_DATA } from './types';

import instance from '../../instance';

export const showUserHeaderData = (value) => (dispatch) => {
  dispatch({
    type: SHOW_USER_HEADER_DATA,
    payload: value,
  });
};

export const checkUser = () => async (dispatch) => {
  try {
    const res = await instance.post('/api/v1/web/service/users/check');
    if (res.data.code === 200 || res.data.code === '200') {
      dispatch({
        type: SET_USER_CHECK,
        payload: res.data,
      });

      showUserHeaderData(true);
    }

    if (res.status === 'error') {
      toast.error(res.message);
    }
  } catch (error) {
    toast.error('خطا در ارسال درخواست برای دریافت اطلاعات کاربر');
  }
};
