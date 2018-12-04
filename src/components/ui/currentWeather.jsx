import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Skeleton, Switch, Card, Icon, Avatar, Layout } from "antd";
const { Header, Content, Footer } = Layout;
class CurrentWeatherUI extends Component {
  state = { loadingState: true };
  createCurrentWeather = () => {
    const { data } = this.props;
    if (data[0] == undefined) {
      return (
        <Card
          title={data.name}
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
          <h1 className="cityHeader">Current Weather</h1>
          <div className="row">
            {data.map(item => (
              <div className="col">
                <Card
                  key={item.name}
                  title={item.name}
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
                  <p>Temperature: {item.main.temp}K </p>
                  <p>Humidity: {item.main.humidity}%</p>
                  <p>Pressure: {item.main.pressure}hpa</p>
                </Card>
              </div>
            ))}
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

export default CurrentWeatherUI;
