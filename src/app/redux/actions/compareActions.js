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
  const url = new URL(window.location);
  const el1 = new URL(window.location).searchParams.get('primary');
  const el2 = new URL(window.location).searchParams.get('secondary');

  const el1LastIndexOfKa = el1?.lastIndexOf('ka');
  const el1CourseId = el1?.substring(el1LastIndexOfKa + 2);
  const el2LastIndexOfKa = el2?.lastIndexOf('ka');
  const el2CourseId = el2?.substring(el2LastIndexOfKa + 2);

  let query = '';
  if (el1 !== null) query += `/${el1CourseId}`;
  if (el2 !== null) query += `/${el2CourseId}`;
  const res = await instance.get(`/api/v1/web/service/courses/compare${query}`);
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
    } else {
      dispatch({ type: 'CLEAR_SECONDARY' });
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

export const setDispatcher = (dispatcher) => (dispatch) =>
  dispatch({ type: 'SET_DISPATCHER', payload: dispatcher });
