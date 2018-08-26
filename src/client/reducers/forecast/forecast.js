import actionTypes from 'client/utils/action-types';
import errorMessage from 'client/pages/error/';

export const getForecast = (state = {}) => {
  return (state.forecast) ? state.forecast : {};
};

export  default (state = [], action = {}) => {
  switch (action.type) {

    case actionTypes.SET_FORECAST_ACTION:
      return action.data;

    case actionTypes.REQUEST_FORECAST_ERROR:
      return {
        loading: false,
        error: errorMessage(action.error)
      };

    default:
      return state;
  }
};

