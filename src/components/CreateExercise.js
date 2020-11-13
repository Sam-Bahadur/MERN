import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercise extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      username: "",
      description: "",
      duration: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          username: res.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onChangedescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChangeduration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onChangedate = (date) => {
    this.setState({
      date: date,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("err", err));
    window.location = "/";
  };
  render() {
    return (
      <div>
        <h3>Crete new exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangedescription}
            />
          </div>
          <div className="form-group">
            <label>Duration(in min):</label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeduration}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangedate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="create log"
              className="btn btn-primary "
            />
          </div>
        </form>
      </div>
    );
  }
}
