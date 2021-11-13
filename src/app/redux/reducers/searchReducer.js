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
  SET_QUERY_FILTERS_IS_FREE,
  SET_QUERY_FILTERS_SORT,
  ADD_QUERY_FILTERS_ACADEMY,
  ADD_QUERY_FILTERS_TYPE,
  REMOVE_QUERY_FILTERS_ACADEMY,
  REMOVE_QUERY_FILTERS_TYPE,
  CLEAR_QUERY_FILTERS,
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
    filters: {
      academies: [],
      types: [],
      sort: 1,
      is_free: 0,
    },
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
        query: { ...state.query, page: { ...state.query.page, total: action.payload } },
      };

    case SET_QUERY_CURRENT_PAGE:
      return {
        ...state,
        query: { ...state.query, page: { current: action.payload } },
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

    case SET_QUERY_FILTERS_SORT:
      return {
        ...state,
        query: { ...state.query, filters: { ...state.query.filters, sort: action.payload } },
      };

    case SET_QUERY_FILTERS_IS_FREE:
      return {
        ...state,
        query: { ...state.query, filters: { ...state.query.filters, is_free: action.payload } },
      };

    case ADD_QUERY_FILTERS_ACADEMY:
      return {
        ...state,
        query: {
          ...state.query,
          filters: {
            ...state.query.filters,
            academies: [...state.query.filters.academies, action.payload],
          },
        },
      };

    case ADD_QUERY_FILTERS_TYPE:
      return {
        ...state,
        query: {
          ...state.query,
          filters: {
            ...state.query.filters,
            types: [...state.query.filters.types, action.payload],
          },
        },
      };

    case REMOVE_QUERY_FILTERS_ACADEMY:
      return {
        ...state,
        query: {
          ...state.query,
          filters: {
            ...state.query.filters,
            academies: state.query.filters.academies.filter((item) => item.id !== action.payload),
          },
        },
      };

    case REMOVE_QUERY_FILTERS_TYPE:
      return {
        ...state,
        query: {
          ...state.query,
          filters: {
            ...state.query.filters,
            types: state.query.filters.types.filter((item) => item.id !== action.payload),
          },
        },
      };

    case 'SET_QUERY_OPTIONS':
      return {
        ...state,
        query: { ...state.query, options: action.payload },
      };

    case 'CLEAR_ALL_SEARCH_ADJUSTMENTS':
      return {
        ...state,
        query: {
          ...state.query,
          filters: initialState.query.filters,
          page: initialState.query.page,
        },
      };
    default:
      return state;
  }
};
