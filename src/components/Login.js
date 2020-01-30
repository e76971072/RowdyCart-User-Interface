
import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import   Profile    from './Profile'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Signup from './Signup'

class Login extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			
		}; 
		this.handleSucessful = this.handleSucessful.bind(this); 
	}
	handleSucessful () {
		this.props.history.push('/login');
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
		 // Catalog Array  
		 //	0:'first_name', 1:'last_name', 2:'user_name', 3:'password', 4:'email', 5:'address', 6:'city', 7:'State', 8:'country', 9:'date_register', 10:'phone_number'
			.post('http://127.0.0.1:5000/user', this.state)
			.then(response => {
				
				if ( response.data.length > 0 ){
					{this.storeInfo(response.data[0])}
					
				}
				else{
					alert(JSON.stringify("You user name "  + this.state.username + "    doesn't Exist"));
					
				}
			})
			.catch(error => {
				console.log(error)
			})
	}
	storeInfo(data)  {
		// this.info.first_name =  data[0]
		// this.first_name = data[1]
		// this.last_name= data[2] 
		// this.user_name= data[3]
		// this.password= data[4] 
		// this.email= data[5] 
		// this.address= data[6] 
		// this.city= data[7]
		// this.State= data[8]
		// this.country= data[9]
		// this.date_register= data[10]
		
		Cookies.set ('first_name',data[0] )
		Cookies.set ('last_name',data[1] )
		Cookies.set ('user_name', data[2])
		Cookies.set ('password',  data[3])
		Cookies.set ('email', data[4])
		Cookies.set ('address',  data[5] ) 
		Cookies.set ('city',    data[6]  )
		Cookies.set ('State', data[7] )
		Cookies.set ('country',data[8] )
		Cookies.set ('date_register',data[9] ) 
		Cookies.set ('phone_number',data[10] )
	
	}

	render() {
		const { username, password} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Login
