import React from 'react';
import { connect } from 'react-redux';

import WeatherComponent from 'client/pages/components/weather-component';
import { getForecast } from 'client/reducers/forecast/forecast';

const mapStateToProps = (state) => ({
  forecast: getForecast(state)
});

const mapDispatchToProps = (dispatch) => {};

export const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);

export default WeatherContainer;
