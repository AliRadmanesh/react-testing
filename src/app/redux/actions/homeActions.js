import { GET_HOMEPAGE_DATA, HOMEPAGE_ERROR } from './types';
import instance from '../../instance';

const axios = require('axios');

export const getHomePageData = () => async (dispatch) => {
  try {
    // const res = await axios.get('https://api.npoint.io/04cf8cf2ef70f13d23d0');
    const res = await axios.get('https://develop.karsazapp.ir/api/v1/web/service/home');
    console.log(res);
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
