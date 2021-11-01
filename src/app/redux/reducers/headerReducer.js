import {
  SET_USER_CHECK,
  SHOW_USER_HEADER_DATA,
  SHOW_USER_MENU,
  SHOW_CATEGORY_DESKTOP_MENU,
  SHOW_CATEGORY_MOBILE_MENU,
  GET_MENU_CATEGORIES,
} from '../actions/types';

const initial = {
  show: false,
  data: { profile: { first_name: '', last_name: '', image: '' }, wallet: { balance: 0 } },
  meta: {},
  fetched: false,
  showMenu: false,
  categoryDesktop: false,
  categoryMobile: false,
  categories: [],
  showNav: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        showNav: action.payload,
      };
    case SET_USER_CHECK:
      return {
        ...state,
        data: action.payload.data.user,
        meta: action.payload.meta,
        show: true,
        fetched: true,
      };

    case SHOW_USER_HEADER_DATA:
      return {
        ...state,
        show: action.payload,
      };

    case SHOW_USER_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };

    case SHOW_CATEGORY_DESKTOP_MENU:
      return {
        ...state,
        categoryDesktop: action.payload,
      };

    case SHOW_CATEGORY_MOBILE_MENU:
      return {
        ...state,
        categoryMobile: action.payload,
      };
    case GET_MENU_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
