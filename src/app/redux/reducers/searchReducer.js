import { SEARCH_COURSES, AUTO_SUGGEST } from '../actions/types';

const initialState = {
  courses: [],
  value: '', // query value
  autosuggest: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    case AUTO_SUGGEST:
      return {
        ...state,
        courses: action.payload,
      };

    default:
      return state;
  }
};
