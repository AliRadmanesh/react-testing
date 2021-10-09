import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';
import headerReducer from './headerReducer';

export default combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer,
  header: headerReducer,
});
