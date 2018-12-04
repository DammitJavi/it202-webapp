import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import WeekPage from "./pages/weekPage";
import CurrentPage from "./pages/currentPage";
import HomePage from "./pages/homePage";
class PageSwitch extends Component {
  state = {};
  render() {
    const {
      updateWeather,
      weather,
      pulled,
      fiveDayPulled,
      fiveDay,
      currentWeather,
      currentPulled
    } = this.props;
    return (
      <Switch>
        <Route
          path="/current"
          render={props => (
            <CurrentPage
              updateWeather={updateWeather}
              weather={weather}
              pulled={pulled}
            />
          )}
        />
        <Route
          path="/5-day"
          render={props => (
            <WeekPage
              updateWeather={updateWeather}
              fiveDay={fiveDay}
              fiveDayPulled={fiveDayPulled}
            />
          )}
        />
        <Route
          path="/"
          render={props => (
            <HomePage
              updateWeather={updateWeather}
              currentWeather={currentWeather}
              currentPulled={currentPulled}
            />
          )}
        />
      </Switch>
    );
  }
}

export default PageSwitch;
