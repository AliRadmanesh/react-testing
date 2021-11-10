const initial = {
  section: 1,
  recommended: [],
  recent: [],
  search: {
    options: {
      contract_types: [],
      work_experiences: [],
      salary_ranges: [],
    },
    filters: {
      contract_types: [],
      work_experiences: [],
      salary_ranges: [],
    },
    result: [],
    mobile: false,
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'GET_JOBS_DATA':
      return {
        ...state,
        section: 1,
        recommended: action.payload.user_recommended_jobs,
        recent: action.payload.recent_jobs,
      };
    case 'SET_JOBS_SECTION':
      return {
        ...state,
        section: action.payload,
      };
    case 'GET_JOBS_FILTER_OPTIONS':
      return {
        ...state,
        search: {
          ...state.search,
          options: action.payload,
        },
      };
    case 'ADD_JOBS_SEARCH_SALARY_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            salary_ranges: [...state.search.filters.salary_ranges, action.payload],
          },
        },
      };
    case 'ADD_JOBS_SEARCH_CONTRACT_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            contract_types: [...state.search.filters.contract_types, action.payload],
          },
        },
      };
    case 'ADD_JOBS_SEARCH_EXPERIANCE_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            work_experiences: [...state.search.filters.work_experiences, action.payload],
          },
        },
      };
    case 'REMOVE_JOBS_SEARCH_SALARY_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            salary_ranges: state.search.filters.salary_ranges.filter(
              (salary) => salary.id !== action.payload,
            ),
          },
        },
      };
    case 'REMOVE_JOBS_SEARCH_EXPERIANCE_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            work_experiences: state.search.filters.work_experiences.filter(
              (experiences) => experiences.id !== action.payload,
            ),
          },
        },
      };
    case 'REMOVE_JOBS_SEARCH_CONTRACT_FILTER':
      return {
        ...state,
        search: {
          ...state.search,
          filters: {
            ...state.search.filters,
            contract_types: state.search.filters.contract_types.filter(
              (type) => type.id !== action.payload,
            ),
          },
        },
      };
    case 'CLEAR_COURSES_FILTERS':
      return {
        ...state,
        filters: { course_types: [], academies: [] },
      };

    case 'SHOW_JOBS_FILTER_MOBILE':
      return {
        ...state,
        search: {
          ...state.search,
          mobile: action.payload,
        },
      };

    case 'CLEAR_JOBS_FILTERS':
      return {
        ...state,
        search: {
          ...state.search,
          filters: initial.search.filters,
        },
      };
    default:
      return state;
  }
};
