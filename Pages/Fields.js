import React, { Component } from 'react'
import { instance } from "./../Config/Instance"

export default class Fields extends Component {
	constructor(props){
		super(props)
		this.state = {
		  fields : []
		}
	}

	getMember = async () => {
		try{
		  await instance.get("http://localhost:8080/lapangan")
	  	    .then(res => {
			  this.setState({fields : res.data.lapangan })
			})
		}catch(err){
		  console.error(err)
		}
	}

	deleteField = async (id) => {
		try {
			instance.delete(`http://localhost:8080/lapangan/drop/${id}`)
			window.location.reload()
		}catch(err){
			console.error(err)
		}
	}

	componentDidMount() {
		this.getMember()
	}

	render(){
		return(
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
	            DATA FIELDS
	          </h1>


	          <div style={{ margin : "0px 40px"}}>
	              <div style={{marginBottom : "10px"}}>	
           		    <button className="btn btn-success" onClick={() => this.props.history.push("../add/field")} >Add Field</button>
	              </div>
				  <table className="table" style={{textAlign:"center"}}>
			  	    <thead className="thead-dark">
					  <tr>
					      <th scope="col">Name</th>
					      <th scope="col">Price</th>
					      <th scope="col">Action</th>
					  </tr>
					</thead>
					<tbody>
					    {this.state.fields.map(field => {
					      return(
					        <tr className="table-light" key={field.id}>
					      	  <td>{field.nama}</td>
					      	  <td>{field.harga}</td>
					      	  <td>
					      	    <button className="btn btn-danger" onClick={() => this.deleteField(field.id)}>Remove</button>
					      	  </td>
					        </tr>  
					    )})}
					</tbody>
				  </table>
			  </div>
			</div>			
		)
	}
}