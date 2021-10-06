import { GET_HOMEPAGE_DATA } from '../actions/types';

const initialState = {
  message: '',
  data: {
    categories: [],
    recent_posts: [],
    top_search: [],
    stat: { users: 0, courses: 0, academies: 0 },
    recommended_courses: [],
  },
  meta: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_DATA:
      return {
        ...state,
        message: action.payload.message,
        data: action.payload.data,
        meta: action.payload.meta,
      };

    default:
      return state;
  }
};
