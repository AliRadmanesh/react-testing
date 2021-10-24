import {
  GET_COURSES_SEARCH_DATA,
  DISPLAY_MOBILE_FILTER_MENU,
  SET_COURSES_IS_FREE,
  SET_COURSES_SORT,
  ADD_COURSES_TYPE_FILTER,
  ADD_COURSES_ACADEMY_FILTER,
  REMOVE_COURSES_TYPE_FILTER,
  REMOVE_COURSES_ACADEMY_FILTER,
} from '../actions/types';

const initialState = {
  options: { academies: [], course_types: [] },
  showMenu: false,
  is_free: 0,
  sort: 1,
  category: [],
  filters: { academies: [], course_types: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_SEARCH_DATA:
      return {
        ...state,
        options: action.payload,
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

    case ADD_COURSES_ACADEMY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, academies: [...state.filters.academies, action.payload] },
      };

    case REMOVE_COURSES_ACADEMY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          academies: state.filters.academies.filter((academy) => academy.id !== action.payload),
        },
      };

    case ADD_COURSES_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          course_types: [...state.filters.course_types, action.payload],
        },
      };

    case REMOVE_COURSES_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          course_types: state.filters.course_types.filter((type) => type.id !== action.payload),
        },
      };
    default:
      return state;
  }
};
