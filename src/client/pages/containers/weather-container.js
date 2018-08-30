import React from 'react';
import { connect } from 'react-redux';

import WeatherComponent from 'client/pages/components/weather-component';
import { getForecast, getLoadingForecastState } from 'client/reducers/forecast/forecast';
import { requestForecastOnClient, getIfForecastLoading } from 'client/actions/forecast-actions';

const mapStateToProps = (state) => {
  return ({
    forecast: getForecast(state),
    loaded: getLoadingForecastState(state)
  });

};

const mapDispatchToProps = (dispatch) => {
  return {
    requestForecastOnClient() {
      return dispatch(requestForecastOnClient())
    }
  }
};

export const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);

export default WeatherContainer;
