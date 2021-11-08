const initial = {
  section: 1,
  recommended: [],
  recent: [],
  search: {},
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
    default:
      return state;
  }
};
