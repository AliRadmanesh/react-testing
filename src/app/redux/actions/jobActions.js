import instance from '../../instance';

export const getJobData = (id) => async (dispatch) => {
  const res = await instance.get(`/api/v1/web/jobs/service/${id}`);
  console.log(res);
};
