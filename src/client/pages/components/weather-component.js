import React, { Component, PropTypes } from 'react';

export class WeatherComponent extends Component {

  componentWillMount() {

    const {
      forecast
    } = this.props;

    console.log('forecast', forecast);
  }

  render() {
    return (
      <span>WeatherComponent</span>
    )
  }
}

WeatherComponent.propTypes = {

};

export default WeatherComponent;
