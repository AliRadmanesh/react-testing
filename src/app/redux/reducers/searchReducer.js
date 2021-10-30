import {
  SET_KEYWORDS,
  SEARCH_COURSES,
  AUTO_SUGGEST,
  HIDE_SUGGEST,
  SEARCH_CATEGORY_COURSES,
} from '../actions/types';

const initialState = {
  courses: [],
  keywords: '', // query value
  suggest: { show: false, list: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
      };
    case SEARCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    case AUTO_SUGGEST:
      return {
        ...state,
        suggest: { list: action.payload, show: true },
      };

    case HIDE_SUGGEST:
      return {
        ...state,
        suggest: { ...state.suggest, show: false },
      };

    case SEARCH_CATEGORY_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    default:
      return state;
  }
};
