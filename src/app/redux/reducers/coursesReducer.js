import { GET_COURSES_SEARCH_DATA, DISPLAY_MOBILE_FILTER_MENU } from '../actions/types';

const initialState = {
  search: { academies: [], course_types: [] },
  showMenu: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_SEARCH_DATA:
      return {
        ...state,
        search: action.payload,
      };

    case DISPLAY_MOBILE_FILTER_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };

    default:
      return state;
  }
};
