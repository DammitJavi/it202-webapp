import React, { Component } from "react";
import http from "../services/httpService";
import apiKeys from "../../config/apiKeys.json";
import WeekUI from "./../ui/weekUi";

class WeekPage extends Component {
  state = {};

  getWeather = async city => {
    const response = await http.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&APPID=${
        apiKeys.openWeatherKey
      }`
    );
    if (response.status === 200) {
      const type = 1;
      const data = response.data;
      const fiveDay = this.props.fiveDay;
      fiveDay.push(data);
      this.props.updateWeather(fiveDay, type);
      console.log("fiveDay", this.props.fiveDay);
    }
  };

  componentDidMount() {
    if (this.props.fiveDayPulled === false) {
      this.getWeather("Chicago");
      this.getWeather("London");
      this.getWeather("Joliet");
      this.getWeather("Berlin");
      this.getWeather("Rome");
    } else {
    }
  }

  render() {
    return (
      <div>
        <WeekUI data={this.props.fiveDay} getWeather={this.getWeather} />
      </div>
    );
  }
}
export default WeekPage;
