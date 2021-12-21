import toast from 'react-hot-toast';
import instance from '../../instance';

export const getJobData = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`/api/v1/web/service/jobs/${id}`);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'GET_JOB_DATA',
        payload: res.data.data.job,
      });
      dispatch({
        type: 'SET_JOB_STATUS',
        payload: 200,
      });
    } else {
      // toast.error(res.data.message);
      // window.location.href = `${new URL(window.location).origin}/404`;
      dispatch({
        type: 'SET_JOB_STATUS',
        payload: 400,
      });
    }
  } catch (error) {
    // toast.error(error);
    dispatch({
      type: 'SET_JOB_STATUS',
      payload: 400,
    });
  }
};

export const bookmarkJob = (id) => async (dispatch) => {
  const res = await instance.post(`/api/v1/web/service/jobs/${id}/bookmark`);
  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: 'JOB_BOOKMARK',
      payload: res.data.data.job.is_bookmarked,
    });
  } else {
    toast.error('خطا در برقراری ارتباط');
  }
};
