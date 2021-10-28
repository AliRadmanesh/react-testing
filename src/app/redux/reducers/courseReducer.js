import { GET_COURSE_COMMENTS } from '../actions/types';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
