import { ACTIVE_PART, SET_POPUP, CLEAR_POPUP } from '../actions/types';

const initialState = {
  active: 'dashboard',
  popup: { display: false, data: { title: '', text: '', img: '', date: '' } },
  navigation: {
    mobile: { show: false },
  },
  user: {
    fetched: false,
    profile: {
      first_name: '',
      last_name: '',
      headline: '',
      image: '',
    },
  },
  dashboard: {
    user: {},
    stat: {
      purchases: { count: 0, amount: 0 },
      bookmarks: { courses: 0, jobs: 0, sum: 0 },
      wallet: { balance: 0 },
    },
    notifications: [],
  },
  bookmarks: {
    bookmark_courses: [],
    bookmark_jobs: [],
  },
  purchases: {
    course_purchases: [],
    course_purchases_pending: [],
  },
  transactions: {
    transactions: [],
    withdrawals_pending: [],
  },
  wallet: {
    purchases: { count: 0, amount: 0 },
    cashback: { amount: 0 },
    wallet: { balance: 0, balance_available: 0 },
  },
  favorites: {
    courses: {
      interests: {
        fetched: false,
        list: [],
      },
      interested: { fetched: false, list: [] },
    },
    jobs: {
      interests: {
        fetched: false,
        list: [],
      },
      interested: { fetched: false, list: [] },
    },
  },
  notifications: {
    user_notifications: [],
    multicast_notifications: [],
  },
  modal: {
    show: false,
    data: {
      id: null,
      notification_id: null,
      type: '',
      notification: {
        title: '',
        body: '',
        image: '',
      },
      data: {
        id: null,
        type: null,
        link_title: '',
        link_url: '',
      },
      created_at: '',
      created_at_difference: '',
      created_at_gregorian: '',
      is_viewed: 0,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_PART:
      return {
        ...state,
        active: action.payload,
      };
    case SET_POPUP:
      return {
        ...state,
        popup: { display: true, data: action.payload },
      };
    case CLEAR_POPUP:
      return {
        ...state,
        popup: { ...state.popup, display: false, data: { title: '', text: '', date: '' } },
      };
    case 'SHOW_DASHBOARD_MOBILE_MENU':
      return {
        ...state,
        navigation: {
          ...state.navigation,
          mobile: {
            ...state.navigation.mobile,
            show: action.payload,
          },
        },
      };
    case 'SET_DASHBOARD_USER':
      return {
        ...state,
        user: { fetched: true, profile: action.payload },
      };
    case 'SET_DASHBOARD_DATA':
      return {
        ...state,
        dashboard: action.payload,
      };

    case 'SET_DASHBOARD_BOOKMARKS':
      return {
        ...state,
        bookmarks: action.payload,
      };

    case 'SET_DASHBOARD_PURCHASES':
      return {
        ...state,
        purchases: action.payload,
      };

    case 'SET_DASHBOARD_WALLET':
      return {
        ...state,
        wallet: action.payload,
      };

    case 'SET_DASHBOARD_FAVORITES_LISTS':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          courses: {
            ...state.favorites.courses,
            interests: { fetched: true, list: action.payload.categories },
          },
          jobs: {
            ...state.favorites.jobs,
            interests: { fetched: true, list: action.payload.categories },
          },
        },
      };

    case 'SET_DASHBOARD_FAVORITES_INTERESTS':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          courses: {
            ...state.favorites.courses,
            interested: { fetched: true, list: action.payload.favorite_course_categories },
          },
          jobs: {
            ...state.favorites.jobs,
            interested: { fetched: true, list: action.payload.favorite_job_categories },
          },
        },
      };

    case 'ADD_DASHBOARD_FAVORITES_INTERESTS_COURSES':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          courses: {
            ...state.favorites.courses,
            interested: {
              ...state.favorites.courses.interested,
              list: [...state.favorites.courses.interested.list, action.payload],
            },
          },
        },
      };

    case 'ADD_DASHBOARD_FAVORITES_INTERESTS_JOBS':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: {
            ...state.favorites.jobs,
            interested: {
              ...state.favorites.jobs.interested,
              list: [...state.favorites.jobs.interested.list, action.payload],
            },
          },
        },
      };

    case 'REMOVE_DASHBOARD_FAVORITES_INTERESTS_COURSES':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          courses: {
            ...state.favorites.jobs,
            interested: {
              ...state.favorites.jobs.interested,
              list: state.favorites.courses.interested.list.filter(
                (course) => course.id !== action.payload,
              ),
            },
          },
        },
      };

    case 'REMOVE_DASHBOARD_FAVORITES_INTERESTS_JOBS':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: {
            ...state.favorites.jobs,
            interested: {
              ...state.favorites.jobs.interested,
              list: state.favorites.jobs.interested.list.filter(
                (item) => item.id !== action.payload,
              ),
            },
          },
        },
      };
    case 'SET_DASHBOARD_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'SHOW_DASHBOARD_MODAL':
      return {
        ...state,
        modal: {
          data: action.payload,
          show: true,
        },
      };
    case 'CLOSE_DASHBOARD_MODAL':
      return {
        ...state,
        modal: {
          data: initialState.modal.data,
          show: false,
        },
      };
    case 'GET_DASHBOARD_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};
