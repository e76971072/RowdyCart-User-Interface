import React, { Component, useState } from 'react'
import { withRouter } from "react-router";
import { Form, Col, Button , ButtonGroup, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.scss'
import {browserHistory} from "react-router";
import axios from 'axios'; 
import {   Redirect } from 'react-router-dom'
import { IoIosCard } from "react-icons/io";
import {FaShippingFast, FaShoppingCart , FaShoppingBasket} from "react-icons/fa";
function Checkout(props){
              const [nav, setNav] = useState(false)
              const orderobject = new FormData()

                function handleOrder (e){
                    e.preventDefault();
                  orderobject.set ("total_price", totalPrice)
                  const config = {     
                    headers: { 'content-type': 'application/json' }
                    }
                    console.log(orderobject)
                  axios
                   .post("https://grocery-back-end.herokuapp.com/order", orderobject , config)
                   .then(response => {
                             // checking status Http 
                             if ( response.status === 200  ){
                            
                                  window.location.replace("/confirmation")
                             }
                             else{
                              window.location.replace("/confirmation")
                             }
                   })
                   .catch(error => {
                     console.log(error)
                   })
                }
      let totalPrice = 0 ;
      const listItemsCart = JSON.parse(localStorage.getItem('listItems'))
      function handleChangeLogin (e){
        orderobject.set (e.target.id, e.target.value); 
        console.log (e.target.id + " : " + e.target.value)
      }
    function reCalculate (e, url , price){
        totalPrice = 0; 
        let total = 0; 
        listItemsCart.map (( i => {

            if (i.linkUrl === url && e.target.value){
               i.quantity = parseInt (e.target.value)
               let num = parseInt (e.target.value);
                total = parseInt (  price * num )
            }
              let ItemPrice = i.priceItem * i.quantity
              totalPrice += ItemPrice
        }))
        document.getElementById(url).innerText = "$"+total
        document.getElementById("tab").innerText = "Total Price $"+totalPrice
      }
      
  return (

    <div className="root">

          <div className="cart-item-list">
         
           <ul >
           <FaShoppingBasket style={{fontSize: "5rem",  color:"#493b76"}}/>
      {Object.keys(listItemsCart).map ((objectItem, index )=>{

                totalPrice += parseInt(listItemsCart[objectItem].priceItem) // finding total price of the cart 
                
                return <li>
                <img  
                
                src={listItemsCart[objectItem].linkUrl} />
                
                <h1> {listItemsCart[objectItem].nameItem} </h1>
                <h1 id={listItemsCart[objectItem].linkUrl}> ${listItemsCart[objectItem].priceItem} </h1>
                <div className="quantity">
                <Form.Group 
                style ={{ width: "10%", position: "absolute", right: "5%"}}
                
                controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control 
                        onChange={(e) => reCalculate(e,listItemsCart[objectItem].linkUrl, listItemsCart[objectItem].priceItem)}
                        type="email" 
                        id="email"
                        className="inputQuantity"
                        placeholder="1" />
                        <Form.Text className="text-muted">
                          Quantity
                        </Form.Text>
               </Form.Group>

                        
                  </div>
                  
                </li>
                
          })}
        <li > <h1> <pre id ="tab"class="tab">Total Price: ${totalPrice}
        
        
        
        </pre>
              </h1> </li>
          </ul>

          </div>
    
    <div className="wrapper">
      
  <div className="container">
    <form action>
      <h1>
        <FaShippingFast style={{marginRight: "10px" }}/>
          Shipping Details
      </h1>
      <div className="name">
        <div>
          <label htmlFor="f-name">First</label>
          <input id="first_name" type="text"  name="f-name" onChange={(e)=> handleChangeLogin(e)} />
        </div>
        <div>
          <label  htmlFor="l-name">Last</label>
          <input id="last_name" type="text" name="l-name" onChange={(e)=> handleChangeLogin(e)}/>
        </div>
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email"  onChange={(e)=> handleChangeLogin(e)}/>
        </div>
      <div className="street">
        <label htmlFor="name">Street</label>
        <input id="address" type="text" name="address"onChange={(e)=> handleChangeLogin(e)} />
      </div>
      <div className="address-info">
        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" onChange={(e)=> handleChangeLogin(e)}/>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input id="state" type="text" name="state" onChange={(e)=> handleChangeLogin(e)} />
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <input id="zip_code" type="text" name="zip"  onChange={(e)=> handleChangeLogin(e)}/>
        </div>
      </div>
      <h1>
        <IoIosCard /> Payment Information
      </h1>
      <div className="cc-num">
        <label htmlFor="card-num">Credit Card No.</label>
        <input id="credit_card" type="text" name="card-num" onChange={(e)=>handleChangeLogin(e)}/>
      </div>
      <div className="cc-info">
        <div>
          <label htmlFor="card-num">Exp</label>
          <input id="exp"type="text" name="expire" onChange={(e)=> handleChangeLogin(e)}/>
        </div>
        <div>
          <label htmlFor="card-num">CCV</label>
          <input id="ccv"type="text" name="security" onChange={(e)=>handleChangeLogin(e)}/>
        </div>
      </div>
      <div className="btns">
        <button onClick={(e)=> handleOrder(e)}> Purchase </button>
        <button>Back to cart</button>

        {/* {nav == true && 
            
            
              
          } */}

        
      </div>
    </form>
  </div>
</div>
</div>
  
  )
}

export default withRouter(Checkout); 