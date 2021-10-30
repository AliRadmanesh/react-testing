import {
  SET_KEYWORDS,
  SEARCH_COURSES,
  AUTO_SUGGEST,
  HIDE_SUGGEST,
  SEARCH_CATEGORY_COURSES,
  SET_CURRENT_PAGE,
  SET_PAGE_TOTAL,
} from '../actions/types';

const initialState = {
  courses: [],
  keywords: '', // query value
  suggest: { show: false, list: [] },
  page: {
    current: 1,
    total: 1,
  },
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

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: { ...state.page, current: action.payload },
      };

    case SET_PAGE_TOTAL:
      return {
        ...state,
        page: { ...state.page, total: action.payload },
      };

    default:
      return state;
  }
};
