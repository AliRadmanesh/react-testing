import SET_USER_CHECK from '../actions/types';

const initial = {
  data: {},
  meta: {},
};

export default (state = initial, action) => {
  switch (action.type) {
    case SET_USER_CHECK:
      return {
        ...state,
        data: action.payload.data,
        meta: action.payload.meta,
      };

    default:
      return state;
  }
};
