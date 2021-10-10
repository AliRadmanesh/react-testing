import toast from 'react-hot-toast';
import { SET_USER_CHECK } from './types';

import instance from '../../instance';

export const getUserCheck = () => async (dispatch) => {
  try {
    const res = await instance.post('/api/v1/web/service/users/check');

    if (res.code === '200') {
      dispatch({
        type: SET_USER_CHECK,
        payload: res.data,
      });
    }

    if (res.status === 'error') {
      toast.error(res.message);
    }
  } catch (error) {
    toast.error('خطا در اراسل درخواست به سرور');
  }
};
