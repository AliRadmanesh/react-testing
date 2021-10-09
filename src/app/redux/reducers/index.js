import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';
import headerReducer from './headerReducer';
import footerReducer from './footerReducer';

export default combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer,
  header: headerReducer,
  footer: footerReducer,
});
