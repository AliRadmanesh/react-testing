const initial = {
  user: {
    authenticated: false,
  },
  login: { stage: 1 },
  retrieve: { stage: 1 },
  signup: { stage: 1 },
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'SET_USER_AUTHENTICATION':
      return {
        ...state,
        user: {
          ...state.user,
          authenticated: action.payload,
        },
      };
    case 'SET_LOGIN_STAGE':
      return {
        ...state,
        login: { ...state.login, stage: action.payload },
      };
    case 'SET_RETRIEVE_STAGE':
      return {
        ...state,
        retrieve: { ...state.login, stage: action.payload },
      };
    case 'SET_SIGNUP_STAGE':
      return {
        ...state,
        signup: { ...state.login, stage: action.payload },
      };
    default:
      return state;
  }
};
