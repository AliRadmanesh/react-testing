import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer,
});
