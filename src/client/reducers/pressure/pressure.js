import actionTypes from 'client/utils/action-types';

export const getPressureAverage = (state = {}) => {
  return (state.pressure) ? state.pressure : {};
};

export  default (state = {}, action = {}) => {
  switch (action.type) {

    case actionTypes.SET_PRESSURE_AVERAGE_ACTION:
      return {
        loaded: true,
        data: action.data
      };

    case actionTypes.ERROR_FETCHING_PRESSURE_ACTION:
      return {
        loaded: true
      };

    default:
      return state;
  }
};
