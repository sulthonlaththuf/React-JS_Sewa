import React, { Component } from 'react'
import { instance } from "./../Config/Instance"

export default class AddOfficer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

	submitHandler = async (e) => {
		try {
			e.preventDefault()
			console.log(this.state)
			const data = await instance.post("http://localhost:8080/register", this.state)
			console.log(data)
			this.props.history.push('/data/officers')
		}catch(err){
			console.error(err)
		}
	}



	render () {
	  return (
        <div
          style={{
            margin: "0px 500px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              font: "50px",
              fontFamily: "Impact, fantasy",
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "White",
            }}
          >
            ADD An OFFICER
          </h2>
          <div
            className="card"
            style={{ backgroundColor: "grey", opacity: 0.9, textAlign : "center" }}
          >
            <div style={{ padding : "12px"}}>
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Username"
                    name="username"
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    autoComplete="off"
                    placeholder="Enter Email"
                    name="email"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className="form-control" 
                    autoComplete="off"
                    placeholder="Password"
                    name="password"
                    onChange={this.changeHandler}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
	  )
	}
}