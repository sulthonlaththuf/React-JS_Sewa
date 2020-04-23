import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:8080/register", this.state);
      this.props.history.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div
        style={{
          margin: "0px 580px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            font: "50px",
            fontFamily: "Impact, fantasy",
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "White",
          }}
        >
          REGISTER
        </h1>
        <div
          style={{ backgroundColor: "grey", opacity: 0.9 }}
        >
          <div style={{ padding: "20px"}}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Username"
                  name="username"
                  onChange={this.handleChange}
                  autocomplete="off"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control" 
                  autocomplete="off"
                  placeholder="Enter Email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control" 
                  autocomplete="off"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
