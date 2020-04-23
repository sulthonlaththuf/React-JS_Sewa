import React, { Component } from 'react'
import { instance } from "./../Config/Instance"


export default class Officers extends Component {
	constructor(props){
		super(props)
		this.state = {
		  members : []
		}
	}

	getMember = async () => {
		try{
		  await instance.get("http://localhost:8080/member")
	  	    .then(res => {
			  this.setState({members : res.data.member })
			  console.log(this.state)
			})
		}catch(err){
		  console.error(err)
		}
	}

	deleteOfficer = async (id) => {
		try {
			instance.delete(`http://localhost:8080/member/drop/${id}`)
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
	            DATA OFFICERS
	          </h1>
	          
	           <div style={{margin : "0px 40px"}}>

	              <div style={{marginBottom : "10px"}}>	
           		    <button className="btn btn-success" onClick={() => this.props.history.push('/add/officer')}>Add Officer</button>
	              </div>

				  <table className="table" style={{textAlign:"center"}}>
			  	    <thead className="thead-dark">
					  <tr>
					      <th scope="col">Usename</th>
					      <th scope="col">Email</th>
					      <th scope="col">Last Name</th>
					      <th scope="col">Gender</th>
					      <th scope="col">Action</th>
					  </tr>
					</thead>
					<tbody>
					    {this.state.members.map(member => {
					      return(
					        <tr className="table-light" key={member.id}>
					      	  <td>{member.username}</td>
					      	  <td>{member.email}</td>
					      	  <td>{member.last_name}</td>
					      	  <td>{member.gender}</td>
					      	  <td>
					      	    <button type="submit" onClick={() => this.deleteOfficer(member.id)} className="btn btn-danger">Remove</button>
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