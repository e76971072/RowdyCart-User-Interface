
import React, { Component, useState, userEffect } from 'react';
import { async } from 'q';

class  Request extends Component {

 x = async () => {
  const data = await fetch ("http://127.0.0.1:5000/"); 
  const items = await data.json();
  console.log (items); 
  }
  stringArray = [
    "Login",
    "Help",
    "Production"
  ]
  style = {
    display: "inline",
    float: "right",
    height: "auto",
    width: "auto",   
    borderRadius: "1rem", 
    backgroundColor: "lightgray"
  }
  option  = {
    display: "inline",
    paddingRight: "20px",
    float: "left", 
    cursor: "pointer",
    padding: "10px",
    fontSize: "13px"
}
render (){
    return (
      <div>
      <ul style={this.style}>
        Hello
      })}
    </ul>
    </div>
    );
  }
}
export default Top1;
