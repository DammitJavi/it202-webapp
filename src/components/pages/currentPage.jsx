import React, { Component } from "react";
import http from "../services/httpService";
import apiKeys from "../../config/apiKeys.json";
import CurrentWeatherUI from "./../ui/currentWeather";

class CurrentPage extends Component {
  state = {};
  getWeather = async city => {
    const response = await http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        apiKeys.openWeatherKey
      }`
    );
    console.log("response", response);
    if (response.status === 200) {
      const type = 0;
      const data = response.data;
      console.log("data", data);
      const weather = this.props.weather;
      weather.push(data);
      this.props.updateWeather(weather, type);
      console.log("weather", this.props.weather);
    }
  };

  componentDidMount() {
    if (this.props.pulled === false) {
      this.getWeather("Chicago");
      this.getWeather("London");
      this.getWeather("Joliet");
      this.getWeather("Mexico City");
      this.getWeather("Berlin");
      this.getWeather("Rome");
    } else {
    }
  }

  render() {
    return (
      <div>
        <CurrentWeatherUI
          data={this.props.weather}
          getWeather={this.getWeather}
        />
      </div>
    );
  }
}

export default CurrentPage;
