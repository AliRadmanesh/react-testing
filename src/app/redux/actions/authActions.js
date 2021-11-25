export const setLoginStage = (value) => (dispatch) =>
  dispatch({ type: 'SET_LOGIN_STAGE', payload: value });

export const setRetrieveStage = (value) => (dispatch) =>
  dispatch({ type: 'SET_RETRIEVE_STAGE', payload: value });

export const setSignupStage = (value) => (dispatch) =>
  dispatch({ type: 'SET_SIGNUP_STAGE', payload: value });
