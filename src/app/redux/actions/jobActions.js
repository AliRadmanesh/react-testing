import toast from 'react-hot-toast';
import instance from '../../instance';

export const getJobData = (id) => async (dispatch) => {
  const res = await instance.get(`/api/v1/web/service/jobs/${id}`);
  // console.log(res);
  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: 'GET_JOB_DATA',
      payload: res.data.data.job,
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
