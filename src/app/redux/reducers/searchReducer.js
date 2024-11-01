import {
  SET_KEYWORDS,
  SEARCH_COURSES,
  AUTO_SUGGEST,
  HIDE_SUGGEST,
  SEARCH_CATEGORY_COURSES,
  SET_CURRENT_PAGE,
  SET_PAGE_TOTAL,
  SET_TOTAL_RESULTS,
  SEARCH_QUERY,
  SET_QUERY_KEYWORDS,
  SET_QUERY_PAGE_TOTAL,
  SET_QUERY_TOTAL_RESULTS,
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
  category: null, // Selected categoy
  keywords: '', // query value
  suggest: { show: false, list: [] },
  total_results: 0,
  page: {
    current: 1,
    total: 1,
  },

  query: {
    options: { academies: [], course_types: [] },
    keywords: '',
    result: [], // returned value from api and string
    query_total_results: 0,
    page: { current: 1, total: 1 },
    status: null,
    string: '', // stringified query based on other sub-states
    filters: {
      academies: [],
      course_types: [],
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
        courses: action.payload.courses,
        category: action.payload.category,
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

    case SET_TOTAL_RESULTS:
      return {
        ...state,
        total_results: action.payload,
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

    case SET_QUERY_TOTAL_RESULTS:
      return {
        ...state,
        query: { ...state.query, query_total_results: action.payload },
      };

    case SET_QUERY_CURRENT_PAGE:
      return {
        ...state,
        query: { ...state.query, page: { ...state.query.page, current: action.payload } },
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
            course_types: [...state.query.filters.course_types, action.payload],
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
            course_types: state.query.filters.course_types.filter(
              (item) => item.id !== action.payload,
            ),
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
    case CLEAR_QUERY_FILTERS:
      return {
        ...state,
        query: {
          ...state.query,
          filters: {
            ...state.query.filters,
            academies: [],
            course_types: [],
          },
        },
      };
    default:
      return state;
  }
};
