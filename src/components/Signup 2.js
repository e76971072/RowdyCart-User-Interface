import { Form, Col, Button , ButtonGroup, Container} from 'react-bootstrap';
import  React from 'react';
import { Route , Redirect , Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import  './Signup.css'; 
import  Login  from './Login';
import  { Home }  from './Home';
import axios from 'axios'; 


class Signup extends  React.Component {
   
constructor (props){
  
    super (props); 
    this.state = {
        first_name:'', 
		last_name:'', 
		user_name:'', 
		password:'', 
		email:'', 
		address:'', 
		city:'', 
		state:'', 
		zip_code:'', 
		phone_number: '',
    }
}

Authencicate  = false; 
onChangeHandler = e => {
    this.setState ({ [e.target.name] : e.target.value })
}
onChangeEmailandUserName = e => {
    this.setState ({["user_name"]: e.target.value})
    this.setState ({[e.target.name]: e.target.value})
}
onSubmitHandle = e => {
    e.preventDefault()
      
        
		axios
		 // Catalog Array  
		 //	0:'first_name', 1:'last_name', 2:'user_name', 3:'password', 4:'email', 5:'address', 6:'city', 7:'State', 8:'country', 9:'date_register', 10:'phone_number'
			.post('http://127.0.0.1:5000/new', this.state)
			.then(response => {
                // checking status Http 
                if ( response.status == 200 ){
                    document.getElementById('signupContainer').style.display='none'; 
                    document.getElementById('success').style.display='inline'; 
                }
                else{
    
                }
			})
			.catch(error => {
				console.log(error)
			})
}
loginData =  new FormData();
onChangeHandlerLogin = e => {
   this.loginData.set(e.target.name, e.target.value);
}
onSubmitLogin = e => { 
    e.preventDefault()
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios
     // Catalog Array  
     //	0:'first_name', 1:'last_name', 2:'user_name', 3:'password', 4:'email', 5:'address', 6:'city', 7:'State', 8:'country', 9:'date_register', 10:'phone_number'
        .post('http://127.0.0.1:5000/user', this.loginData, config)
        .then(response => {
            if ( response.data.length  >= 1  ){
                this.props.history.push ("/main");
            }
            else{
                //document.getElementById('username').style.cssText = "border: red; box-shadow: 0 8px 6px -6px red";
                document.getElementById('alert-message').style.cssText= "display:inline" ; 
            }
        })
        .catch(error => {
            console.log(error)
        })

}

changetologin  (){
    // window.location = ("/login");
    document.getElementById('loginpage').style.cssText= "background-color: tomato; color: white"; 
    document.getElementById('homepage').style.cssText= "background-color: transparent; color: tomato"; 
    document.getElementById('loginContainer').style.display='inline';
    document.getElementById('success').style.display='none';
    document.getElementById('signupContainer').style.display='none'; 
    document.getElementById('alert-message').style.cssText= "display:none" ;
}
changetohome (){
    document.getElementById('loginContainer').style.display='none';
    document.getElementById('signupContainer').style.display='inline';
    document.getElementById('success').style.display='none';
    document.getElementById('loginpage').style.cssText= "background-color: transparent; color: tomato"; 
    document.getElementById('homepage').style.cssText= "background-color: tomato; color: white" ; 

}

  
 render () {
    return (
        <div className="background"> 
        <div className= "selection-container" > 
            
        {/* Login style sheet  */}
        <div id="alert-message"className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
        </div>
        <div className="alert alert-success" id="success"role="alert" style={{display: "none"}}>
                User account created successfully message
        </div>
        <Form  id= "loginContainer" ref="LoginContainer" className="Login-Container">
        <Form.Group  as={Col} controlId="loginemail">
                <Form.Label> Email </Form.Label>
                <Form.Control 
                    required
                    type="username" 
                    placeholder="Enter Email or Phone Number" 
                    name= "username"
                    id= "username"
                    className= "username"
                    onChange= {this.onChangeHandlerLogin}/>
                </Form.Group>
                <Form.Group  as={Col} controlId="loginpassword">
                <Form.Label> Password </Form.Label>
                <Form.Control 
                    required
                    type="password" 
                    placeholder="Enter Password" 
                    name= "password"
                    className= "password"
                    onChange= {this.onChangeHandlerLogin}/>
                </Form.Group>
                <Button onClick={this.onSubmitLogin} className= "submitLogin" variant="primary" type="submit">
                          Sign In
            </Button>
        </Form>

         <ButtonGroup className="button-group"aria-label="Basic example">
                        <Button onClick={this.changetologin} id="loginpage"variant="secondary">Login
                        </Button>
                        <Button onClick={this.changetohome} id="homepage"variant="secondary">Signup</Button>
                    </ButtonGroup>



         {/* Sign Up Style Sheet  */}
            <Form  id="signupContainer" className="form-container"onSubmit= {this.onSubmitHandle} style={{ 
                   
                    }}>
                   
            <Form.Row>
                <Form.Group  as={Col} controlId="formGridFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    required
                    type="firstname" 
                    placeholder="Enter First Name" 
                    name= "first_name"
                    className= "first_name"
                    onChange= {this.onChangeHandler}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    required 
                    type="lastname" 
                    placeholder="Enter Last Name" 
                    name= "last_name"
                    onChange= {this.onChangeHandler}/> 
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLast">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    required
                    type="phone_number" 
                    placeholder="XXX-XXX-XXXX" 
                    name= "phone_number"
                    onChange= {this.onChangeHandler}/> 
                </Form.Group>
              
            </Form.Row>
           
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Email" 
                    name= "email"
                    onChange= {this.onChangeEmailandUserName}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    name= "password"
                    onChange= {this.onChangeHandler}/> 
                </Form.Group>
            </Form.Row>
            
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                name="address"
                placeholder="1234 Main St" 
                onChange={this.onChangeHandler}/>
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  name= "city"
                  placeholder="Enter City"
                  onChange= {this.onChangeHandler}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    as="select"
                    name= "state"
                    placeholder="TX"
                    onChange= {this.onChangeHandler}>
                    <option>Choose...</option>
                    <option> Alabama - AL</option>
                    <option> Alabama - AL</option>
                    <option> Alaska - AK</option>
                    <option> Arizona - AZ</option>
                    <option> Arkansas - AR</option>
                    <option> California - CA</option>
                    <option>  Colorado - CO</option>
                    <option>   Connecticut - CT</option>
                    <option>  Delaware - DE</option>
                    <option>   Florida - FL</option>
                    <option>  Georgia - GA</option>
                    <option>Hawaii - HI</option>
                    <option>Idaho - ID</option>
                    <option>Illinois - IL</option>
                    <option>Indiana - IN</option>
                    <option>Iowa - IA</option>
                    <option>Kansas - KS</option>
                    <option>Kentucky - KY</option>
                    <option>Louisiana - LA</option>
                    <option>Maine - ME</option>
                    <option>Maryland - MD</option>
                    <option>Massachusetts - MA</option>
                    <option>Michigan - MI</option>
                    <option>Minnesota - MN</option>
                    <option>Mississippi - MS</option>
                    <option>  Missouri - MO</option>
                    <option>Montana - MT</option>
                    <option>Nebraska - NE</option>
                    <option>Nevada - NV</option>
                    <option>New Hampshire - NH</option>
                    <option>New Jersey - NJ</option>
                    <option>New Mexico - NM</option>
                    <option>New York - NY</option>
                    <option>North Carolina - NC</option>
                    <option>North Dakota - ND</option>
                    <option>Ohio - OH</option>
                    <option>Oklahoma - OK</option>
                    <option>Oregon - OR</option>
                    <option>Pennsylvania - PA</option>
                    <option>Rhode Island - RI</option>
                    <option>South Carolina - SC</option>
                    <option>South Dakota - SD</option>
                    <option>Tennessee - TN</option>
                    <option>Texas - TX</option>
                    <option>Utah - UT</option>
                    <option>Vermont - VT</option>
                    <option>Virginia - VA</option>
                    <option>Washington - WA</option>
                    <option>West Virginia - WV</option>
                    <option>Wisconsin - WI</option>
                    <option>Wyoming - WY</option>
                    <option> Alaska - AK</option>
                    <option> Arizona - AZ</option>
                    <option> Arkansas - AR</option>
                    <option> California - CA</option>
                    <option>  Colorado - CO</option>
                    <option>   Connecticut - CT</option>
                    <option>  Delaware - DE</option>
                    <option>   Florida - FL</option>
                    <option>  Georgia - GA</option>
                    <option>Hawaii - HI</option>
                    <option>Idaho - ID</option>
                    <option>Illinois - IL</option>
                    <option>Indiana - IN</option>
                    <option>Iowa - IA</option>
                    <option>Kansas - KS</option>
                    <option>Kentucky - KY</option>
                    <option>Louisiana - LA</option>
                    <option>Maine - ME</option>
                    <option>Maryland - MD</option>
                    <option>Massachusetts - MA</option>
                    <option>Michigan - MI</option>
                    <option>Minnesota - MN</option>
                    <option>Mississippi - MS</option>
                    <option>  Missouri - MO</option>
                    <option>Montana - MT</option>
                    <option>Nebraska - NE</option>
                    <option>Nevada - NV</option>
                    <option>New Hampshire - NH</option>
                    <option>New Jersey - NJ</option>
                    <option>New Mexico - NM</option>
                    <option>New York - NY</option>
                    <option>North Carolina - NC</option>
                    <option>North Dakota - ND</option>
                    <option>Ohio - OH</option>
                    <option>Oklahoma - OK</option>
                    <option>Oregon - OR</option>
                    <option>Pennsylvania - PA</option>
                    <option>Rhode Island - RI</option>
                    <option>South Carolina - SC</option>
                    <option>South Dakota - SD</option>
                    <option>Tennessee - TN</option>
                    <option>Texas - TX</option>
                    <option>Utah - UT</option>
                    <option>Vermont - VT</option>
                    <option>Virginia - VA</option>
                    <option>Washington - WA</option>
                    <option>West Virginia - WV</option>
                    <option>Wisconsin - WI</option>
                    <option>Wyoming - WY</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                    name= "zip_code"
                    placeholder="Enter Zip Code"
                    onChange= {this.onChangeHandler}>
                    </Form.Control> 
                </Form.Group>
            </Form.Row>
            {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button className= "submit" variant="primary" type="submit">
               GET STARTED
            </Button>
            </Form>
            </div>
            </div>
            
        );
    }
}
export default Signup; 
