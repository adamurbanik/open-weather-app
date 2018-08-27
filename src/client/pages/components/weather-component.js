import React, { Component } from 'react';
import PropTypes from 'prop-types';
import errorMessage from 'client/pages/error';

export class WeatherComponent extends Component {

  constructor(props) {
    super(props);

    this.populateHtmlWithData = this.populateHtmlWithData.bind(this);

    this.handleLoad = this.handleLoad.bind(this);
    this.handleLoadResolve = this.handleLoadResolve.bind(this);
    this.handleLoadReject = this.handleLoadReject.bind(this);
  }

  componentWillMount() {

    const {
      requestForecastOnClient,
      forecast
    } = this.props;

    console.log('forecast', forecast);

    // this.handleLoad([
    //   requestForecastOnClient()
    // ]);

    if (forecast) {
      this.display = this.populateHtmlWithData(forecast);
    }
  }

  handleLoad(promises = [], handleLoadRejectCb) {
    return Promise.all(promises)
      .then(this.handleLoadResolve, (handleLoadRejectCb && (() => {
        return handleLoadRejectCb()
          .then(this.handleLoadResolve, this.handleLoadReject);
      }) || this.handleLoadReject));
  }

  handleLoadResolve(data) {
    this.setState({
      loading: false
    });

    return data;
  }

  handleLoadReject() {
    this.setState({
      loading: false,
      error: errorMessage()
    });
  }

  populateHtmlWithData(forecast) {
    const {
      weather,
      main,
      visibility,
      wind,
      clouds,
      sys,
      name
    } = forecast;

    this.description = weather.map(item => <h3>weather description: {item.description}</h3>);
    this.pressure = <h3>pressure: {main.pressure}</h3>;
    this.humidity = <h3>humidity: {main.humidity}</h3>;
    this.temp_min = <h3>humidity: {main.temp_min}</h3>;
    this.temp_max = <h3>humidity: {main.temp_max}</h3>;
    this.visibility = <h3>visibility: {main.visibility}</h3>;
    this.wind = <h3>wind speed: {wind.speed}</h3>;
    this.clouds = <h3>clouds: {clouds.all}</h3>;
    this.sunrise = <h3>sunrise: {sys.sunrise}</h3>;
    this.sunset = <h3>sunset: {sys.sunset }</h3>;
    this.cityName = <h3>city name: {name}</h3>;
  }

  render() {
    const {
      forecast,
      loading
    } = this.props;

    return (
      <span>WeatherComponent

        {forecast &&
        <section>
          {this.description}
          {this.pressure}
          {this.humidity}
          {this.temp_min}
          {this.temp_max}
          {this.visibility}
          {this.wind}
          {this.clouds}
          {this.sunrise}
          {this.sunset}
          {this.cityName}
        </section>}

      </span>

    )
  }
}

WeatherComponent.propTypes = {
  forecast: PropTypes.object.isRequired
};

export default WeatherComponent;
