import React ,{ useState }  from 'react'
import { withRouter } from "react-router";
import {Button, Card, ListGroup, Collapse, InputGroup, FormControl} from 'react-bootstrap'
import './home.scss'
import { FaOpencart, FaCartPlus } from "react-icons/fa";
import {IoIosSearch } from "react-icons/io"
import {   Redirect} from 'react-router-dom'
import CheckOut from './Checkout'

function Navbar (props){

      const [navigate, setNavigate] = useState(false);
      const [open, setOpen] = useState(false);
      const handleRemoveItem = e => {
        props.setFunction(props.arrayList.filter(item => 
          item.nameItem !== e.currentTarget.id))
        props.countFunction(props.countItemLeft - 1); 
      
    }

        function redirectPage (e){
              setNavigate(true)
          }
           
  

  return (
            <div className="linebar2">
              <ul className="nav-bar">
                <li><a href="#"  > 
                </a></li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#"
                   onClick={() => {setOpen(!open)}} >
                  <FaCartPlus  className="nav-bar-cart"/>
                  ({props.countItem})
                  </a>
                  <Collapse  style={{ position: "absolute",  zIndex: "99999", left: "90%", top: "7%"}}   in={open}>
                  <ListGroup className="list-group">
                       {Object.keys(props.arrayList).map((objectItem, i ) =>{
                         
                       return  <ListGroup.Item><img  style={{left:"0"}}width= "70" heigh= "80"src={props.arrayList[objectItem].linkUrl}/>&nbsp;{props.arrayList[objectItem].nameItem}<br/>
                       <Button className="Remove-button" 
                        style={{}}
                        id={props.arrayList[objectItem].nameItem}onClick={(e) => handleRemoveItem(e)}
                        variant="danger">
                          X  
                        </Button>
                      </ListGroup.Item>
                        
                       })
                      }
                        { props.countItemLeft >= 1 && 

                            <Button onClick={(e) => redirectPage(e)} variant="success" > CheckOut </Button>
                        }
                        {
                            navigate == true &&
                            <Redirect push to={{
                              pathname: '/checkout',
                              state: { listItems: props.arrayList }, 
                                search: `?id=${props.arrayList}`  
                          }}/>

                        }
                        
                      
                      
                  </ListGroup>

                  </Collapse>
                 
                  </li>
              </ul>
             
          </div>
         )
       }



function Populate ()
{


  // Use State for hover the cart Icon 
  const [count, setCount] = useState(0);
  const [items, setAddItems] = useState([]);
  
  
                function cartAddEnter (e){
                  e.preventDefault();
                
                  document.getElementById(e.currentTarget.id).style.cssText = "color: blue";
                
                }
                function handleSearch (e){
                    
                }
                function cartAddLeave (e){
                  e.preventDefault();
                  document.getElementById(e.currentTarget.id).style.cssText = "color: none";
                }
                function handleClick (e, name , price, url  ){
                  if (items.length < 1 ){
                              setAddItems([
                                ...items, {
                                nameItem: name,
                                linkUrl:  url, 
                                priceItem: price, 
                                quantity: 1 
                              }
                          ]);
                          
                          setCount(count  + 1 )
                          return; 
                  }
                  for ( var i = 0 ; i < items.length ; i ++ ){
                        if ( items[i].nameItem === name ){
                        
                          return; 
                         }
                  }
                  setAddItems([
                    ...items, {
                    nameItem: name,
                   linkUrl:  url, 
                   priceItem: price,
                   quantity: 1 
                  }
                ]);
                setCount(count  + 1 )
                
              }
                function handleDuplicate (name){
                    return items.some ( item => item.name != name ); 
                }

                  
           
                function handleClickCart (){
                  Object.keys(items).map((obj) => {
                    return (
                      <div>
                        {items[obj].name}
                      </div>
                    )})
                }
                
  const arrayFruitObjects = {
                id1:
                    {
                      name: "Banana"
                      ,
                      url: 'https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                      ,
                      price: 12
                      ,
                      description: "" 
                      ,
                      quantity: 1 
                    } 
                    
                    ,
                id2:
                    {
                    name:"Apple"
                    ,
                    url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    ,
                    price: 13
                    ,
                    description: "",
                    quantity: 1  } 
                    ,
                   
                id3:
                      {
                        name:"Tomato"
                        ,
                        url:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        ,
                        price: 4
                        ,
                        description: "" 
                      ,
                      quantity: 1 } 
                    
                    ,
                id4:
                      { name: "Orange"
                       ,
                       url:  'https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                       ,
                      price: 2
                      ,
                      description: ""
                    ,quantity: 1  } 
                    
                    ,
                id5:
                      {
                        name: "Carrot"
                        ,
                        url:  'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        ,
                        price: 3
                        ,
                        description: ""
                      ,
                      quantity: 1  } 
                    
                    ,
                id6:
                      { name:"Lime"
                      ,
                        url:  'https://images.unsplash.com/photo-1562157244-f75a888ec0cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        ,
                        price: 4
                        ,
                        description: "" 
                      ,quantity: 1 } 
                    
                    ,
                    id7:
                      {name: "Avacado"
                      ,
                      url: 'https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      ,
                      price: 4
                      ,
                      description: ""
                    ,
                    quantity: 1  } 
                    
                    ,
                    id8:
                      {name: "Cherry"
                      ,
                      url: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      ,
                      price: 6
                      ,
                      description: ""
                    ,
                    quantity: 1  } 
                    
                    , 
                    id9:
                      {name: "Pine Apple"
                      ,
                      url: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      ,
                      price: 9
                      ,
                      description: ""
                      ,
                      quantity: 1  } 
                    ,
                    id10:
                      {
                        name: "StrawBerry"
                        ,
                        url: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        ,
                        price: 11
                        ,
                        description: ""
                        , 
                        quantity: 1  } 
                    
                    , 
                    id11:
                      {name: "Blueberries"
                      ,
                      url: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      ,
                      price: 10
                      ,
                      description: ""
                     , 
                     quantity: 1  } 
                    
                    ,
                    id12:
                      {
                        name: "Red Strawberry"
                        ,
                        url:  'https://images.unsplash.com/photo-1498668629810-d79dcafa7617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        ,
                        price: 5
                        ,
                        description: "" 
                      , 
                      quantity: 1 } 
                    
                    ,
                    id13:
                      {
                        name: "HoneyDew"
                        ,
                        url:  'https://images.unsplash.com/photo-1528826234716-96aaa8e9a413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        ,
                        price: 12
                        ,
                        description: "" 
                       ,quantity: 1 } 
                    
                    ,
                    id14:
                      {
                        name: "Watermelon"
                        ,
                        url: 'https://images.unsplash.com/photo-1529701348460-57e405ad9825?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        ,
                        price: 4
                        ,
                        description: ""
                      , quantity: 1  } 
                    
                  }; 
                    
                  
                    return (
                      <div className="Container">
                        <InputGroup style={{
                          width: "20%", left: "20%", top:"10%", position:"absolute"
                          }}className="mb-3">
                            <InputGroup.Prepend>
                             <IoIosSearch style={{fontSize:"60px", color:"gray"}}/>
                            </InputGroup.Prepend>
                            <FormControl 
                            aria-describedby="basic-addon1" 
                            style={{borderRadius:"2rem"}}  
                            placeHolder="Search..."
                            onChange={(e) => handleSearch(e)}/>
                           
                      </InputGroup>

                        <Navbar
                       countItemLeft= {count}
                       countFunction = {setCount} 
                       arrayList= {items}
                       setFunction={setAddItems} 
                       countItem={count}/>
                      <ul  className= "Fruit-Container">
                       
                        {Object.keys(arrayFruitObjects).map((objectItem, i ) => {
                              return (
                              <li >
                                <Card className="each-fruit-picture" raised style={{ 
                                  borderRadius: '2rem'
                                }}>
                                <Card.Img variant="top" src= {arrayFruitObjects[objectItem].url} 
                                style={{
                                  borderTopLeftRadius: '2rem',
                                  borderTopRightRadius: '2rem'
                                  
                                }}
                                />
                                <Card.Body>
                                        <Card.Title>{arrayFruitObjects[objectItem].name}</Card.Title>
                                  <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                   
                                  </Card.Text>
                                  <Card.Text>  <strong>${arrayFruitObjects[objectItem].price} </strong>    </Card.Text>
                                    <FaCartPlus className="cart-plus" 
                                      id = {arrayFruitObjects[objectItem].name}
                                      
                                     //  when onClicl 2 function invoke , setCOunt which increment the count and handClick adding element 
                                   
                                    onClick={(e) => { handleClick( e, arrayFruitObjects[objectItem].name , arrayFruitObjects[objectItem].price, arrayFruitObjects[objectItem].url , i )}} 
                                    onMouseEnter={cartAddEnter} 
                                    onMouseLeave={cartAddLeave}/>
    
                                </Card.Body>
                              </Card>
                              </li>
                              ) 
                        })}
                        </ul>
                       
                        </div>
                    )
}

function Home ()
{
  
    return (
      <div>
    {/* IMAGES FROM PINTEREST, ITS NOT MINE */}

        <Populate />  
      </div>  
    ); 

}


export default withRouter(Home); 
