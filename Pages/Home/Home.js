import React, { Component } from "react";


import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            font: "50px",
            fontFamily: "Impact, fantasy",
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "White",
          }}
        >
          Welcome to 4Rent
        </h1>
        <div
          className="row"
          style={{ margin: "0px 40px", border: "thick", opacity: "0.8" }}
        >
          <div
            className="column"
            style={{
              backgroundColor: "white",
              textAlign: "center",
              border: "thick",
            }}
          >
            <b>
              <h2>About</h2>
              <p>4Rent is a task from Telkom that added to daily quarantine</p>
            </b>
          </div>
          <div
            className="column"
            style={{ backgroundColor: "white", textAlign: "center" }}
          >
            <strong>
              <h2>Usage</h2>
              <p>
                4rent has a main thing for help customer make <b>EASY RENT </b>
                for daily activity
              </p>
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
