import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';
import headerReducer from './headerReducer';
import footerReducer from './footerReducer';
import coursesReducer from './coursesReducer';
import searchReducer from './searchReducer';
import courseReducer from './courseReducer';
import compareReducer from './compareReducer';

export default combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer,
  header: headerReducer,
  footer: footerReducer,
  courses: coursesReducer,
  search: searchReducer,
  course: courseReducer,
  compare: compareReducer,
});
