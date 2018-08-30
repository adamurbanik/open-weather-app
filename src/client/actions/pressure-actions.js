import restClient from 'shared/lib/rest-client';
import config from 'server/config';
import actionTypes from 'client/utils/action-types';

export const setPressureAverage = data => ({
  type: actionTypes.SET_PRESSURE_AVERAGE_ACTION,
  data
});

export const errorFetchingPressure = err => ({
  type: actionTypes.ERROR_FETCHING_PRESSURE_ACTION,
  error: err
});


export const requestPressure = (cityName = 'london') => {
  return dispatch => {

    return restClient.get(`${config.SERVER_PROTOCOL}${config.LOCALHOST}:${config.SERVER_PORT}/weather/pressure?cityName=${cityName}`)
      .then(({ body }) => {

        dispatch(setPressureAverage(body));
        return Promise.resolve();
      })
      .catch(err => {

        let errorMessage = 'error occured while getting pressure data';
        dispatch(errorFetchingPressure(errorMessage));
        return Promise.reject();
      });
  }
};
