import { ACTIVE_PART, SET_POPUP, CLEAR_POPUP } from './types';

export const setActivePart = (name) => (dispatch) => {
  dispatch({
    type: ACTIVE_PART,
    payload: name,
  });
};

export const setPopup = (title, img, text, date) => (dispatch) => {
  dispatch({
    type: SET_POPUP,
    payload: { title, text, img, date },
  });
};

export const clearPopup = () => (dispatch) => {
  dispatch({
    type: CLEAR_POPUP,
  });
};

export const showDashboardMobileMenu = (bool) => (dispatch) =>
  dispatch({ type: 'SHOW_DASHBOARD_MOBILE_MENU', payload: bool });
