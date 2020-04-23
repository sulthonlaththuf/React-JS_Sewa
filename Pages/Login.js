import React, { Component } from "react";
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState( {[e.target.name] : e.target.value});
  }

  handleSubmit = async (e) => {
    try{
      // e.preventDefault()
      axios.post('http://localhost:8080/login', this.state)
        .then(res => {
          console.log(res)
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("role", res.data.users.role)
          localStorage.setItem("id", res.data.users.id)
        })
      window.location.href = "/data/officers"
     
    }catch(err){
      console.error(err)
    }
  }

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
            LOGIN
          </h1>
          <div
            className="card"
            style={{ backgroundColor: "grey", opacity: 0.9 }}
          >
            <div style={{padding : "20px"}}>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    autocomplete="off"
                    placeholder="Enter Username"
                    name="username"
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
