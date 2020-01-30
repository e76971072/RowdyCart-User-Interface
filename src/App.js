import React , { Component } from 'react'; 
import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import  Home  from './components/Home';
import  Checkout  from './components/Checkout'
import  Signup   from './components/Signup';
import  Confirmation from './components/Confirmation'

class App extends Component {
  constructor (){
    super(); 
    this.state = {
      user_name: '' , 
      password: '' ,
      log_in: 'LOGGED_IN',  
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Switch >
        <Route  
          exact 
          path={"/confirmation"}
          component={Confirmation}
          />
          <Route  
          exact 
          path={"/main"}
          render = {props=>
            (
              <Home {...props}  />
            )
          }
          />
          <Route  
          exact 
          path={"/checkout"}
          render = {props=>
            (
              <Checkout {...props}  />
            )
          } 
          />
           <Route  
          exact 
          path={"/"}
          render = {props=>
            (
              <Signup {...props}  />
            )
          }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
