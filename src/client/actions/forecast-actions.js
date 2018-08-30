import actionTypes from 'client/utils/action-types';
import config from 'server/config';
import restClient from 'shared/lib/rest-client';

export const setForecast = data => ({
  type: actionTypes.SET_FORECAST_ACTION,
  data
});

export const errorFetchingForecast = err => ({
  type: actionTypes.ERROR_FETCHING_FORECAST_ACTION,
  error: err
});

export const requestForecast = (cityName = 'london') => {
  return dispatch => {

    return restClient.get(`${config.OPEN_WEATHER_MAP_HOST}/data/2.5/weather?q=${cityName}&appid=${config.APPID}`)
      .then(({ body }) => { console.log('body',body)

        dispatch(setForecast(body));
        return Promise.resolve(body);
      })
      .catch(err => {

        console.error(err);
        dispatch(errorFetchingForecast(err));
        return Promise.reject(err);
      });
  }
};

export const requestForecastOnClient  = (cityName = 'london') => {
  return dispatch => {

    return restClient.get(`${config.SERVER_PROTOCOL}${config.LOCALHOST}:${config.SERVER_PORT}/weather/forecast/client?cityName=${cityName}`)
      .then(({ body }) => {

        dispatch(setForecast(body));
        return Promise.resolve();
      })
      .catch(err => {

        console.error(err);
        let errorMessage = 'error occured while getting forecast data';
        dispatch(errorFetchingForecast(errorMessage));
        return Promise.reject();
      });

  }
};
