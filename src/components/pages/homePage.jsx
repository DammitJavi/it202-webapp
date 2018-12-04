import React, { Component } from "react";
import GeoWeatherUI from "./../ui/geoWeather";
import http from "../services/httpService";
import apiKeys from "../../config/apiKeys.json";
class HomePage extends Component {
  state = { position: "" };
  geolocation = async () => {
    navigator.geolocation.watchPosition(position => {
      if (this.props.currentPulled === false) {
        const result = http
          .get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${
              position.coords.latitude
            }&lon=${position.coords.longitude}&APPID=${apiKeys.openWeatherKey}`
          )
          .then(value => {
            this.props.updateWeather(value.data, 2);
          });
        console.log("Result", result);
        this.setState({ position });
      }
    });
  };

  componentWillMount() {
    this.geolocation();
  }
  renderPositions = () => {
    const { currentWeather } = this.props;

    return <GeoWeatherUI currentWeather={currentWeather} />;
  };

  render() {
    return this.renderPositions();
  }
}

export default HomePage;
