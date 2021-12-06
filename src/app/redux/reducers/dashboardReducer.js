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
    course_purchases_approved: [],
  },
  wallet: {
    purchases: { count: 0, amount: 0 },
    cashback: { amount: 0 },
    wallet: { balance: 0, balance_available: 0 },
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

    default:
      return state;
  }
};
