import toast from 'react-hot-toast';
import { GET_COURSE_COMMENTS } from './types';
import instance from '../../instance';

export const getCourseComments = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`api/v1/web/service/courses/${id}/comments`);

    console.log(res);
  } catch (error) {
    toast.error(error);
  }
};
