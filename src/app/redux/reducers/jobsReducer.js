const initial = {
  section: 1,
  recommended: [],
  recent: [],
  search: {
    loading: true,
    options: {
      contract_types: [],
      work_experiences: [],
      salary_ranges: [],
    },
    provinces: [],
    cities: [],
    categories: [],
    locations: [],
    filters: {
      contract_types: [],
      work_experiences: [],
      salary_ranges: [],
    },
    location: { id: null, name: '', city: null, province: null },
    category: { id: null, name: '' },
    result: [],
    page: { current: 1, total: 1 },
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
    case 'SET_JOBS_SEARCH_LOADING':
      return {
        ...state,
        search: {
          ...state.search,
          loading: true,
        },
      };
    case 'SEARCH_JOBS':
      return {
        ...state,
        search: {
          ...state.search,
          result: action.payload,
          loading: false,
        },
      };
    case 'SET_JOBS_SEARCH_PAGE_TOTAL':
      return {
        ...state,
        search: {
          ...state.search,
          page: { ...state.search.page, total: action.payload },
        },
      };
    case 'SET_JOBS_SEARCH_CURRENT_PAGE':
      return {
        ...state,
        search: {
          ...state.search,
          page: { ...state.search.page, current: action.payload },
        },
      };
    case 'GET_JOBS_FILTER_OPTIONS':
      return {
        ...state,
        search: {
          ...state.search,
          options: action.payload,
        },
      };
    case 'SET_JOBS_SEARCH_OPTIONS':
      return {
        ...state,
        search: {
          ...state.search,
          categories: action.payload.categories,
          // provinces: action.payload.provinces,
          // cities: action.payload.cities,
          locations: action.payload.locations,
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
    case 'ADD_JOBS_SEARCH_EXPERIENCE_FILTER':
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
    case 'REMOVE_JOBS_SEARCH_EXPERIENCE_FILTER':
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
    case 'SET_JOBS_CATEGORY':
      return {
        ...state,
        search: {
          ...state.search,
          category: { id: action.payload.id, name: action.payload.name },
        },
      };
    case 'SET_JOBS_LOCATION':
      return {
        ...state,
        search: {
          ...state.search,
          location: {
            id: action.payload.id,
            name: action.payload.name,
            province: action.payload.province,
            city: action.payload.city,
          },
        },
      };
    case 'CLEAR_ALL_JOBS_ADJUSTMENTS':
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
