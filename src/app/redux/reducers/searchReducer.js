import {
  SET_KEYWORDS,
  SEARCH_COURSES,
  AUTO_SUGGEST,
  HIDE_SUGGEST,
  SEARCH_CATEGORY_COURSES,
  SET_CURRENT_PAGE,
  SET_PAGE_TOTAL,
  SEARCH_QUERY,
  SET_QUERY_KEYWORDS,
  SET_QUERY_PAGE_TOTAL,
  SET_QUERY_CURRENT_PAGE,
  SET_QUERY_STATUS,
  SET_QUERY_STRING,
  SET_QUERY_FITLERS_ACADEMIES,
  SET_QUERY_FITLERS_TYPES,
  SET_QUERY_FITLERS_FREE,
  SET_QUERY_FITLERS_SORT,
} from '../actions/types';

const initialState = {
  courses: [],
  keywords: '', // query value
  suggest: { show: false, list: [] },
  page: {
    current: 1,
    total: 1,
  },

  query: {
    options: { academies: [], types: [] },
    keywords: '',
    result: [], // returned value from api and string
    page: { current: 1, total: 1 },
    status: null,
    string: '', // stringified query based on other sub-states
    filters: { academies: [], types: [], sort: 1, is_free: 1 },
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

    case SEARCH_QUERY:
      return {
        ...state,
        query: { ...state.query, result: action.payload },
      };

    case SET_QUERY_KEYWORDS:
      return { ...state, query: { ...state.query, keywords: action.payload } };

    case SET_QUERY_PAGE_TOTAL:
      return {
        ...state,
        query: { ...state.query, page: { total: action.payload } },
      };

    case SET_QUERY_CURRENT_PAGE:
      return {
        ...state,
        query: { ...state.query, page: { curernt: action.payload } },
      };

    case SET_QUERY_STATUS:
      return {
        ...state,
        query: { ...state.query, status: action.payload },
      };

    case SET_QUERY_STRING:
      return {
        ...state,
        query: { ...state.query, string: action.payload },
      };

    case SET_QUERY_FITLERS_ACADEMIES:
      return {
        ...state,
        query: { ...state.query, filters: { academies: action.payload } },
      };

    case SET_QUERY_FITLERS_TYPES:
      return {
        ...state,
        query: { ...state.query, filters: { types: action.payload } },
      };

    case SET_QUERY_FITLERS_FREE:
      return {
        ...state,
        query: { ...state.query, filters: { is_free: action.payload } },
      };

    case SET_QUERY_FITLERS_SORT:
      return {
        ...state,
        query: { ...state.query, filters: { sort: action.payload } },
      };

    case 'SET_QUERY_OPTIONS':
      return {
        ...state,
        query: { ...state.query, options: action.payload },
      };

    case 'ADD_COURSES_ACADEMY_FILTER':
      return {
        ...state,
        filters: { ...state.filters, academies: [...state.filters.academies, action.payload] },
      };

    case 'REMOVE_COURSES_ACADEMY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          academies: state.filters.academies.filter((academy) => academy.id !== action.payload),
        },
      };

    case 'ADD_COURSES_TYPE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          course_types: [...state.filters.course_types, action.payload],
        },
      };

    case 'REMOVE_COURSES_TYPE_FILTER':
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
