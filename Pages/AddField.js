import React, { Component } from 'react'
import { instance } from "./../Config/Instance"

export default class AddField extends Component {
	constructor(props){
		super(props)
		this.state = {
			action : 'insert'
		}
	}

	changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

	imageHandler = (e) => this.setState({ image: e.target.files[0] })

	submitHandler = async(e) => {
		try{
			e.preventDefault()
			const data = await instance.post("http://localhost:8080/lapangan/save", this.state)
			console.log(data)
			this.props.history.push("../data/fields")
		}catch(err){
			console.error(err)
		}

	}

	render(){
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
	            ADD A FIELD
	          </h2>
	          <div
	            className="card"
	            style={{ backgroundColor: "grey", opacity: 0.9, textAlign : "center" }}
	          >
	            <div style={{ padding : "12px"}}>
	              <form onSubmit={this.submitHandler}>
	                <input 
	                    type="hidden" 
	                    className="form-control" 
	                    name="action"
	                    value="insert"
	                    onChange={this.changeHandler}
	                    autoComplete="off"
	                  />
	                <div className="form-group">
	                  <input 
	                    type="text" 
	                    className="form-control" 
	                    placeholder="Enter Name"
	                    name="nama"
	                    onChange={this.changeHandler}
	                    autoComplete="off"
	                  />
	                </div>
	                <div className="form-group">
	                  <input 
	                    type="number" 
	                    className="form-control" 
	                    autoComplete="off"
	                    placeholder="Enter Price"
	                    name="harga"
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