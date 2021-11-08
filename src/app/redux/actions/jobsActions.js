import toast from 'react-hot-toast';
import instance from '../../instance';

export const setJobsSection = (number) => (dispatch) => {
  dispatch({ type: 'SET_JOBS_SECTION', payload: number });
};

export const getJobsData = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/jobs');
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'GET_JOBS_DATA',
        payload: res.data.data,
      });
    } else if (res.status >= 400 && res.status < 500) {
      toast.error(res.data.message);
    } else if (res.status >= 500) {
      toast.error('خطای سرور');
    } else {
      toast.error('خطای دریافت اطلاعات');
    }
  } catch (error) {
    toast.error(
      'خطا پیش از فرایند دریافت اطلاعات. اتصال خود به شبکه را بررسی نموده و دوباره تلاش نمایید',
    );
  }
};
