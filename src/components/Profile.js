import React , { Component } from 'react'; 
import Cookies from 'js-cookie'
import Login from './Login'

class Profile extends React.Component {

retriveData (){
    const data = Cookies.get ("first_name")
   
    return data
}

render (){
    return (
        <div>
          {this.retriveData()}
        </div>
    );
}



}

export default Profile