import actionTypes from 'client/utils/action-types';
import config from 'server/config';
import restClient from 'shared/lib/rest-client';

export const setForecast = data => ({
  type: actionTypes.SET_FORECAST_ACTION,
  data
});

export const errorFetchingForecast = err => ({
  type: actionTypes.ERROR_FETCHING_FORECAST_ACTION
});

export const requestForecast = (cityName = 'london') => {
  return dispatch => {

    return restClient.get(`samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`)
      .then(({ body }) => { console.log('server side render', body);

        dispatch(setForecast(body));
        return Promise.resolve(body);
      })
      .catch(err => {

        const error = "ERROR_FETCHING_FORECAST_ACTION";
        dispatch(errorFetchingForecast(error));
        return Promise.reject();
      });
  }
};

export const requestForecastOnClient  = (cityName = 'london') => {
  return dispatch => {

    return restClient.get('http://localhost:8080/weather/forecast/client')
      .then(({ body }) => {

        dispatch(setForecast(body));
        return Promise.resolve();
      })
      .catch(err => {
        console.log('err', err)
        dispatch(errorFetchingForecast(err));
      });

  }
};
