import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          {" "}
          Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create UserExercises
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}