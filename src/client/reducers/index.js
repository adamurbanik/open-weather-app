import { combineReducers } from 'redux';

import forecast from 'client/reducers/forecast/forecast'
import pressure from 'client/reducers/pressure/pressure';

export default combineReducers({
  forecast,
  pressure
});
