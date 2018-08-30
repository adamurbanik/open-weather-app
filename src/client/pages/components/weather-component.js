import { get } from 'lodash';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorComponent from 'client/pages/error';
export class WeatherComponent extends Component {

  constructor(props) {
    super(props);

    this.handleLoad = this.handleLoad.bind(this);
    this.resolveHandleLoad = this.resolveHandleLoad.bind(this);
    this.handleLoadReject = this.handleLoadReject.bind(this);

    this.state = {
      componentLoaded: false
    };
  }

  componentWillMount() {

    const {
      requestForecastOnClient,
      loaded,
      errorMessage
    } = this.props;

    if(!loaded) {
      this.handleLoad([
        requestForecastOnClient('paris')
      ]);
    }

    if(loaded && !errorMessage) {
      this.resolveHandleLoad();
    }

    if(loaded && errorMessage) {
      this.handleLoadReject();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    const {
      forecast
    } = nextProps;

    let loaded = get(forecast, 'loaded', false);
    let errorMessage = get(forecast, 'errorMessage', false);

    return (loaded || errorMessage) ? true : false;
  }

  handleLoad(promises = []) {
    return Promise.all(promises)
      .then(this.resolveHandleLoad)
      .catch(this.handleLoadReject);
  }

  resolveHandleLoad() {
    this.setState({
      componentLoaded: true
    });
  }

  handleLoadReject() {
    this.setState({
      componentLoaded: true,
      error: true
    });
  }

  render() {

    const {
      componentLoaded,
      error
    } = this.state;

    const {
      forecast,
      errorMessage
    } = this.props;

    return (
      <span>WeatherComponent

        {componentLoaded && !error &&
          <div>
            <h2>Weather forecast</h2>
            <h3>city: {forecast.data.name}</h3>
            <p>pressure: {forecast.data.main.pressure}</p>
            <p>humidity: {forecast.data.main.humidity}</p>
            <p>minimum temperature: {forecast.data.main.temp_min}</p>
            <p>maximum temperature: {forecast.data.main.temp_max}</p>
            <p>visibility: {forecast.data.visibility}</p>
            <p>wind speed: {forecast.data.wind.speed}</p>
            <p>clouds: {forecast.data.clouds.all}</p>
            <p>sunrise: {forecast.data.sys.sunrise}</p>
            <p>sunset: {forecast.data.sys.sunset }</p>
          </div>
        }

        {componentLoaded && error &&
          <ErrorComponent
            error={get(errorMessage, 'forecast.errorMessage', '')}
          >
          </ErrorComponent>
        }

      </span>

    )
  }
}

WeatherComponent.propTypes = {
  // forecast: PropTypes.object.isRequired
};

export default WeatherComponent;

