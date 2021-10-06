import { ACTIVE_PART, SET_POPUP, CLEAR_POPUP } from '../actions/types';

const initialState = {
  active: 'dashboard',
  popup: { display: false, data: { title: '', text: '', img: '', date: '' } },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_PART:
      return {
        ...state,
        active: action.payload,
      };
    case SET_POPUP:
      return {
        ...state,
        popup: { display: true, data: action.payload },
      };
    case CLEAR_POPUP:
      return {
        ...state,
        popup: { ...state.popup, display: false, data: { title: '', text: '', date: '' } },
      };
    default:
      return state;
  }
};
