import React, {Component} from 'react'
import { instance } from "./../../Config/Instance.js"
import Stop from "./../../Images/Stop.jpg"
import "./profile.css"

export default class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			profile : [],
		}
	}


	getProfile = async (e) => {
		try{
			const id = localStorage.id
			const data = await instance.get(`http://localhost:8080/myprofil/${id}`)
			delete data.data.password
			this.setState({profile : data.data.profil[0]})
		}catch(err){
			console.error(err)
		}
	}

	componentDidMount() {
		this.getProfile()
	}

	handleChange = (e) => this.setState({ [e.target.name] : e.target.value })

	handleSubmit = async(e) => {
		try{
			e.preventDefault()
			const {username, email, first_name, last_name, gender, date_birth, no_hp, alamat} = this.state.profile
			const id = localStorage.id
			const data = await instance.post(`http://localhost:8080/myprofil/${id}`, 
				{username, email, first_name, last_name, gender, date_birth, no_hp, alamat} )
			console.log(data)
		}catch(err){

		}
	}

	render() {
		// const {
	 //      firstName,
	 //      lastName,
	 //      gender,
	 //      email,
	 //      password,
	 //      number
	 //    } = this.state;
	    const {
	    	first_name,
	    	last_name,
	    	email,
	    	role,
	    	username,
	    	date_birth,
	    	gender
	    } = this.state.profile
	    return (
	      <div className="col-md-12">
	        <div className="row" style={{ padding: "50px" }}>
	          <div className="card">
	            <img src={Stop} alt="John" style={{ width: "100%" }} />
	            <h1>
	              {first_name} {last_name}
	            </h1>
	            <p className="title">Email : {email}</p>
	            <p>Gender : {gender}</p>
	          </div>

	          <div className="card">
	            <h3>Edit Profile</h3>
	            <div style={{ margin: "10px" }}>
	              <form onSubmit={this.handleSubmit}>
					<p>
	                  <input
	                    placeholder="Username"
	                    name="username"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="text"
	                  />
	                </p>              
	                <p>
	                  <input
	                    placeholder="First Name"
	                    name="first_name"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="text"
	                  />
	                </p>
	                <p>
	                  <input
	                    placeholder="Last Name"
	                    name="last_name"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="text"
	                  />
	                </p>
	                <p>
	                  <input
	                    placeholder="Email"
	                    name="email"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="email"
	                  />
	                </p>
	                <p>
	                  <input
	                    placeholder="Gender"
	                    name="gender"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="text"
	                  />
	                </p>
	                <p>
	                  <input
	                    placeholder="Phone"
	                    name="no_hp"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="number"
	                  />
	                </p>
	                <p>
	                  <input
	                    placeholder="Date"
	                    name="date_birth"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="date"
	                  />
	                </p>
	                <p>
	                 <input
	                    placeholder="Address"
	                    name="alamat"
	                    autoComplete="off"
	                    onChange={this.handleChange}
	                    type="text"
	                  />
	                </p>
	                <p>
	                  <button type="submit">Submit</button>
	                </p>
	              </form>
	            </div>
	          </div>
	        </div>
	      </div>
		)
	}
}
