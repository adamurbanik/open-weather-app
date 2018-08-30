import React from 'react';
import { connect } from 'react-redux';

import WeatherComponent from 'client/pages/components/weather-component';
import { getForecast, getLoadingForecastState, getErrorMessage } from 'client/reducers/forecast/forecast';
import { requestForecastOnClient } from 'client/actions/forecast-actions';

const mapStateToProps = (state) => {
  return ({
    forecast: getForecast(state),
    loaded: getLoadingForecastState(state),
    errorMessage: getErrorMessage(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestForecastOnClient(cityName) {
      return dispatch(requestForecastOnClient(cityName))
    }
  }
};

export const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);

export default WeatherContainer;
