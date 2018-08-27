import actionTypes from 'client/utils/action-types';
import config from 'server/config';
import restClient from 'shared/lib/rest-client';

export const setForecast = data => ({
  type: actionTypes.SET_FORECAST_ACTION,
  data
});

export const errorFetchingForecast = err => ({
  type: actionTypes.ERROR_FETCHING_FORECAST
});

export const requestForecast = (cityName = 'london') => {
  return dispatch => {

    return restClient.get(`${config.OPEN_WEATHER_MAP_HOST}/data/2.5/weather?q=${cityName}&appid=${config.APPID}`)
      .then(({ body }) => dispatch(setForecast(body)))
      .catch(err => {

        const error = "REQUEST_FORECAST_ERROR";

        dispatch(errorFetchingForecast(error));

        return Promise.reject();
      });
  }
};
