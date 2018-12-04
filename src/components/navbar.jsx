import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Weather
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/Current">
              Current
            </NavLink>

            <NavLink className="nav-item nav-link" to="/5-Day">
              5 day
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
