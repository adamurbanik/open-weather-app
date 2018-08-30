import React from 'react';
import { connect } from 'react-redux';

import WeatherComponent from 'client/pages/components/weather-component';
import { getForecast, getLoadingForecastState, getErrorMessage } from 'client/reducers/forecast/forecast';
import { getPressureAverage } from 'client/reducers/pressure/pressure';
import { requestForecastOnClient } from 'client/actions/forecast-actions';
import { requestPressure } from 'client/actions/pressure-actions';

const mapStateToProps = (state) => {
  return ({
    forecast: getForecast(state),
    loaded: getLoadingForecastState(state),
    errorMessage: getErrorMessage(state),
    pressureAverage: getPressureAverage(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestForecastOnClient(cityName) {
      return dispatch(requestForecastOnClient(cityName))
    },
    requestPressure(cityName) {
      return dispatch(requestPressure(cityName))
    }
  }
};

export const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);

export default WeatherContainer;
