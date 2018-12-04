import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import PageSwitch from "./components/switch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  state = {
    fiveDay: [],
    fiveDayPulled: false,
    weather: [],
    pulled: false,
    currentWeather: [],
    currentPulled: false
  };
  updateWeather = (weather, type) => {
    if (type == 0) {
      this.setState({ weather, pulled: true });
    } else if (type == 1) {
      this.setState({ fiveDay: weather, fiveDayPulled: true });
    } else if (type == 2) {
      console.log("weather", weather);
      this.setState({
        currentWeather: weather,
        currentPulled: true
      });
    }
  };
  render() {
    const {
      weather,
      fiveDay,
      pulled,
      fiveDayPulled,
      currentPulled,
      currentWeather
    } = this.state;
    return (
      <div className="container-fluid">
        <ToastContainer />
        <NavBar />
        <PageSwitch
          updateWeather={this.updateWeather}
          weather={weather}
          fiveDay={fiveDay}
          pulled={pulled}
          fiveDayPulled={fiveDayPulled}
          currentWeather={currentWeather}
          currentPulled={currentPulled}
        />
      </div>
    );
  }
}

export default App;
