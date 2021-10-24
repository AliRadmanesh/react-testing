import {
  GET_COURSES_SEARCH_DATA,
  DISPLAY_MOBILE_FILTER_MENU,
  SET_COURSES_IS_FREE,
  SET_COURSES_SORT,
} from '../actions/types';

const initialState = {
  search: { academies: [], course_types: [] },
  showMenu: false,
  is_free: 0,
  sort: 1,
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

    case SET_COURSES_IS_FREE:
      return {
        ...state,
        is_free: action.payload,
      };

    case SET_COURSES_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};
