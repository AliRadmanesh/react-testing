import { GET_TOP_CATEGORIES } from '../actions/types';

const initial = {
  top_categories: [],
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_TOP_CATEGORIES:
      return {
        ...state,
        top_categories: action.payload.top_categories,
      };
    default:
      return state;
  }
};
