import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Skeleton, Switch, Card, Icon, Avatar, Layout } from "antd";
const { Header, Content, Footer } = Layout;
class GeoWeatherUI extends Component {
  state = { loadingState: true };
  createCurrentWeather = () => {
    const { currentWeather } = this.props;
    if (currentWeather.name === undefined) {
      return (
        <Card
          title={currentWeather.name}
          loading={true}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Temperature: </p>
          <p>Humidity:</p>
          <p>Pressure:</p>
        </Card>
      );
    } else {
      const weather = (
        <div className="container">
          <h2 className="cityHeader">Geo Weather</h2>
          <div className="row">
            <div className="col">
              <Card
                key={currentWeather.name}
                title={currentWeather.name}
                extra={
                  <a
                    href="https://en.wikipedia.org/wiki/Communism"
                    target="_blank"
                  >
                    More
                  </a>
                }
                style={{ width: 300 }}
              >
                <p>Temperature: {currentWeather.main.temp}K </p>
                <p>Humidity: {currentWeather.main.humidity}%</p>
                <p>Pressure: {currentWeather.main.pressure}hpa</p>
              </Card>
            </div>
          </div>
        </div>
      );
      return weather;
    }
  };

  render() {
    return (
      <Layout className="layout">
        <Content className="content-box">{this.createCurrentWeather()}</Content>
        <div>
          <Layout className="min-height-page">
            <Footer className="footer">Created By Javi :) 2018</Footer>
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default GeoWeatherUI;
