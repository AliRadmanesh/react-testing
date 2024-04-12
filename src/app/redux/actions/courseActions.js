import toast from 'react-hot-toast';
import { GET_COURSE_COMMENTS } from './types';
import instance from '../../instance';

// const axios = require('axios');

// 'GET_COURSE_DATA'
// 'COURSE_BOOKMARK'
// 'CREATE_COMMENT'
// 'LIKE_COURSE_COMMENT'
// 'DISLIKE_COURSE_COMMENT'
// 'REPORT_COURSE_COMMENT'
// 'COURSE_FEEDBACK'
// 'COURSE_COMMENT_CURRENT_PAGE'
// 'COURSE_COMMENT_PAGE_TOTAL'

export const setCommentsLoading = () => (dispatch) => {
  dispatch({ type: 'SET_COMMENTS_LOADING' });
};

export const getCourseComments =
  (id, sort = 2, page = 1) =>
  async (dispatch) => {
    dispatch({ type: 'SET_COMMENTS_LOADING' });
    try {
      const res = await instance.get(
        `api/v1/web/service/courses/${id}/comments/?sortby=${sort}&page=${page}`,
      );
      dispatch({ type: GET_COURSE_COMMENTS, payload: res.data.data.comments });
      if (res.data.meta.last_page !== 1) {
        dispatch({
          type: 'COURSE_COMMENT_PAGE_TOTAL',
          payload: res.data.meta.last_page,
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

export const getCourseData = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`api/v1/web/service/courses/${id}`);
    // const res = await axios.get('https://api.npoint.io/4c1914e948df5f2c971c');
    const { course } = res.data.data;
    // const course = courses?.find((item) => Number(item?.id) === Number(id));
    dispatch({ type: 'GET_COURSE_DATA', payload: course });
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

export const createComment = (id, rating, content) => async (dispatch) => {
  const data = content !== '' && content !== null ? { rating, content } : { rating };

  const res = await instance.post(`/api/v1/web/service/courses/${id}/comments/create`, data);
  if (res.status === 200 || res.status === 201) {
    dispatch({ type: 'CREATE_COMMENT' });
    // window.location.reload();
    dispatch({ type: 'RESET_COMMENTS' });
    dispatch({ type: 'SET_COMMENTS_LOADING' });
    const res1 = await instance.get(
      `api/v1/web/service/courses/${id}/comments/?sortby=${2}&page=${1}`,
    );
    dispatch({ type: GET_COURSE_COMMENTS, payload: res1.data.data.comments });
    if (res1.data.meta.last_page !== 1) {
      dispatch({
        type: 'COURSE_COMMENT_PAGE_TOTAL',
        payload: res1.data.meta.last_page,
      });
    }
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

export const sortComment = (sort) => (dispatch) => {
  dispatch({ type: 'SORT_COMMENT', payload: sort });
};

export const pageComment = (page) => (dispatch) => {
  dispatch({ type: 'COURSE_COMMENT_CURRENT_PAGE', payload: page });
};
