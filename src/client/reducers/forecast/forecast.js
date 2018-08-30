import actionTypes from 'client/utils/action-types';
import errorMessage from 'client/pages/error';

export const getForecast = (state = {}) => {
  return (state.forecast) ? state.forecast : {};
};

export const getLoadingForecastState = ({ forecast }) => {
  return (forecast.loaded) ? true : false;
};

export const getErrorMessage = ({ forecast }) => {
  return (forecast.errorMessage) ? forecast.errorMessage : null;
};

export  default (state = [], action = {}) => {
  switch (action.type) {

    case actionTypes.SET_FORECAST_ACTION:
      return {
        loaded: true,
        data: action.data
      };

    case actionTypes.LOADING_FORECAST_STATUS_ACTION:
      return {
        loaded: true
      };

    case actionTypes.ERROR_FETCHING_FORECAST_ACTION:
      return {
        loaded: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
};

