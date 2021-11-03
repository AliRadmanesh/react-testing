import instance from '../../instance';

export const setPrimary = (object) => (dispatch) => {
  dispatch({
    type: 'SET_PRIMARY',
    payload: object,
  });
};

export const setSecondary = (object) => (dispatch) => {
  dispatch({
    type: 'SET_SECONDARY',
    payload: object,
  });
};

export const clearPrimary = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_PRIMARY',
  });
};

export const clearSecondary = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_SECONDARY',
  });
};

export const getData = () => async (dispatch) => {
  const el1 = new URL(window.location).searchParams.get('primary');
  const el2 = new URL(window.location).searchParams.get('secondary');

  console.log(el1, el2);
  let query = '';
  if (el1 !== null) query += `/${el1}`;
  if (el2 !== null) query += `/${el2}`;

  const res = await instance.get(`/api/v1/web/service/courses/compare${query}`);
  console.log(res.data.data);
  console.log(res.data.data.courses[1]);
  if (res.status === 200 || res.status === 201) {
    if (res.data.data.courses[0]) {
      dispatch({
        type: 'SET_PRIMARY',
        payload: res.data.data.courses[0],
      });
    }
    if (res.data.data.courses[1]) {
      dispatch({
        type: 'SET_SECONDARY',
        payload: res.data.data.courses[1],
      });
    }
  }
};

export const setModalSort = (sort) => (dispatch) =>
  dispatch({ type: 'SET_MODAL_SORT', payload: sort });

export const setModalFree = (free) => (dispatch) =>
  dispatch({ type: 'SET_MODAL_FREE', payload: free });

export const setModalQuery = (query) => (dispatch) =>
  dispatch({ type: 'SET_MODAL_QUERY', payload: query });

export const showModal = (show) => (dispatch) =>
  dispatch({ type: 'SET_MODAL_SHOW', payload: show });
