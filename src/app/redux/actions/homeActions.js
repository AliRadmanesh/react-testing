import { GET_HOMEPAGE_DATA, HOMEPAGE_ERROR } from './types';
import instance from '../../instance';

const axios = require('axios');

export const getHomePageData = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.npoint.io/353ec6ca928b5da0cc73');
    // const res = await instance.get('/api/v1/web/service/home');
    console.log(res.data);
    if (res.data.code === 200) {
      dispatch({
        type: GET_HOMEPAGE_DATA,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: HOMEPAGE_ERROR,
      payload: 'خطا در ارسال درخواست',
    });
  }
};
