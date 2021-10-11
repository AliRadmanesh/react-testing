import { SET_USER_CHECK, SHOW_USER_HEADER_DATA } from '../actions/types';

const initial = {
  show: false,
  data: null,
  meta: {},
};

export default (state = initial, action) => {
  switch (action.type) {
    case SET_USER_CHECK:
      return {
        ...state,
        data: action.payload.data.user,
        meta: action.payload.meta,
        show: true,
      };

    case SHOW_USER_HEADER_DATA:
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
};
