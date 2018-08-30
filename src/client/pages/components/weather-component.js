import { get } from 'lodash';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import errorMessage from 'client/pages/error';
export class WeatherComponent extends Component {

  constructor(props) {
    super(props);

    this.populateHtmlWithData = this.populateHtmlWithData.bind(this);

    this.handleLoad = this.handleLoad.bind(this);

    this.state = {
      componentLoaded: false
    };
  }

  componentWillMount() {

    const {
      requestForecastOnClient,
      loaded,
      forecast
    } = this.props; console.log('loaded prop', loaded);

    if(!loaded) { console.log('going to handle load');
      this.handleLoad([
        requestForecastOnClient()
      ]);
    }

    if(loaded) { console.log('loaded', loaded);
      this.populateHtmlWithData(forecast);
      this.setState({
        componentLoaded: true
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);


    const {
      forecast
    } = nextProps;

    let loaded = get(forecast, 'loaded', ''); console.log('loaded::', loaded);

    if (loaded) {
      this.populateHtmlWithData(forecast)
      return true;
    }

    return false;
  }


  handleLoad(promises = []) {
    return Promise.all(promises)
      .then((res) => {
        this.setState({
          componentLoaded: true
        });
      })
      .catch(() => Promise.reject());
  }

  // handleLoadReject() {
  //   this.setState({
  //     loading: false,
  //     error: errorMessage()
  //   });
  // }

  populateHtmlWithData({ data }) { console.log('populateHtmlWithData data', data);

    const {
      weather,
      main,
      visibility,
      wind,
      clouds,
      sys,
      name
    } = data;

    this.name = name;

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
      componentLoaded
    } = this.state; console.log('componentLoaded', componentLoaded);

    const {
      forecast,
      loaded,
      data
    } = this.props;

    let weather = get(forecast, 'data.weather', null);

    return (
      <span>WeatherComponent

        {componentLoaded &&
          <div>
            WeatherComponent
          </div>
        }


        {componentLoaded &&
        <section>
          this.pressure = <h3>pressure: pressure</h3>
          city name: {this.name}
        </section>
        }

      </span>

    )
  }
}

WeatherComponent.propTypes = {
  // forecast: PropTypes.object.isRequired
};

export default WeatherComponent;


  {/*${loaded}*/}
  {/*${data}*/}
  {/*{this.description}*/}
  {/*{this.pressure}*/}
  {/*{this.humidity}*/}
  {/*{this.temp_min}*/}
  {/*{this.temp_max}*/}
  {/*{this.visibility}*/}
  {/*{this.wind}*/}
  {/*{this.clouds}*/}
  {/*{this.sunrise}*/}
  {/*{this.sunset}*/}
  {/*{this.cityName}*/}
