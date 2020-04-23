import React, {Component} from 'react'
import { instance } from "./../Config/Instance"

export default class Rents extends Component {
	constructor(props){
		super(props)
		this.state = {
		  rents : []
		}
	}

	getMember = async () => {
		try{
		  instance.get("http://localhost:8080/sewa")
	  	    .then(res => {
			  this.setState({rents : res.data.sewa })
			})
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
	            DATA RENTS
	          </h1>
	          
	           <div style={{textAlign : 'center', margin : "0px 40px"}}>
				  <table className="table">
			  	    <thead className="thead-dark">
					  <tr>
					      <th scope="col">Fields</th>
					      <th scope="col">Username</th>
					      <th scope="col">Rent Date</th>
					      <th scope="col">Start Rent</th>
					      <th scope="col">Finish Rent</th>
					      <th scope="col">Price</th>
					      <th scope="col">Status</th>
					      <th scope="col">Action</th>
					  </tr>
					</thead>
					<tbody>
					    {this.state.rents.map(rent => {
					      return(
					        <tr className="table-light" key={rent.id_sewa}>
					      	  <td>{rent.nama_lapangan}</td>
					      	  <td>{rent.username}</td>
					      	  <td>{rent.tgl_book}</td>
					      	  <td>{rent.wkt_mulai}</td>
					      	  <td>{rent.wkt_selesai}</td>
					      	  <td>{rent.biaya}</td>
					      	  <td>{rent.status}</td>
					      	  {rent.status === 'done' ? <td style={{color : 'red'}}>No Action</td> : 
					      	    <td>
					      	      <button onClick={this.acceptHandler} className="btn btn-success">Accept</button>
					      	      <button onClick={this.rejectHandler} className="btn btn-danger">Reject</button>
					      	    </td>
						      }
					      	  
					        </tr>  
					    )})}
					</tbody>
				  </table>
			  </div>
			</div>			
		)
	}
}