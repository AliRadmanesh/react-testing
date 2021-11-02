import toast from 'react-hot-toast';
import { GET_COURSE_COMMENTS } from './types';
import instance from '../../instance';

// 'GET_COURSE_DATA'
// 'COURSE_BOOKMARK'
// 'CREATE_COMMENT'
// 'LIKE_COURSE_COMMENT'
// 'DISLIKE_COURSE_COMMENT'
// 'REPORT_COURSE_COMMENT'
// 'COURSE_FEEDBACK'
// 'COURSE_COMMENT_CURRENT_PAGE'
// 'COURSE_COMMENT_PAGE_TOTAL'

export const getCourseComments = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`api/v1/web/service/courses/${id}/comments`);
    dispatch({ type: GET_COURSE_COMMENTS, payload: res.data.data.comments });
  } catch (error) {
    toast.error(error);
  }
};

export const getCourseData = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`api/v1/web/service/courses/${id}`);
    dispatch({ type: 'GET_COURSE_DATA', payload: res.data.data.course });
  } catch (error) {
    toast.error(error);
  }
};

export const bookmarkCourse = (id) => async (dispatch) => {
  const res = await instance.post(`/api/v1/web/service/courses/${id}/bookmark`);

  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: 'COURSE_BOOKMARK',
      payload: res.data.data.course.is_bookmarked,
    });
  }
};

export const createComment =
  (id, rating, content = null, is_anonymous) =>
  async (dispatch) => {
    const data = {
      rating,
      content,
      is_anonymous,
    };
    const res = await instance.post(`/api/v1/web/service/courses/${id}/comments/create`, data);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'CREATE_COMMENT',
      });
      window.location.reload();
    } else {
      toast.error('خطا هنگام ثبت بازخورد شما');
    }
  };

export const likeComment = (courseId, commentId) => async (dispatch) => {
  const res = await instance.post(
    `/api/v1/web/service/courses/${courseId}/comments/${commentId}/like`,
  );
  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: 'LIKE_COMMENT',
      payload: res.data.data.comment,
    });
  }
};

export const dislikeComment = (courseId, commentId) => async (dispatch) => {
  const res = await instance.post(
    `/api/v1/web/service/courses/${courseId}/comments/${commentId}/dislike`,
  );
  if (res.status === 200 || res.status === 201) {
    dispatch({
      type: 'DISLIKE_COMMENT',
      payload: res.data.data.comment,
    });
  }
};
