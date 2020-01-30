import React ,{ useState }  from 'react'
import { withRouter } from "react-router";
import {Button, Card, ListGroup, Collapse, InputGroup, FormControl} from 'react-bootstrap'
import './home.scss'
import { FaOpencart, FaCartPlus } from "react-icons/fa";
import {IoIosSearch } from "react-icons/io"
import {   Redirect} from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead';
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
            localStorage.setItem('listItems',  JSON.stringify(props.arrayList))
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
                  <Collapse  style={{ position: "absolute",  zIndex: "99999", left: "88%", top: "7%"}}   in={open}>
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
                              state: { listItems: props.arrayList }
                              
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
  const listStringSearch = [    ] 
  
  
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
                function selectItemClick (e, name , price, url  ){
                  if (items.length < 1 ){
                    const listOfItem  = JSON.parse(localStorage.getItem('listItems'))
                
                              setAddItems([
                                ...items, {
                                nameItem: name,
                                linkUrl:  url, 
                                priceItem: price, 
                                quantity: 1 
                              }
                          ]);
                          setCount(count  + 1 )
                          console.log ("1")
                          console.log (items)
                          localStorage.setItem('listItems',JSON.stringify(items))
                          localStorage.setItem("count", count)
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

                localStorage.setItem('listItems',  JSON.stringify(items))
                localStorage.setItem("count", count)
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
                      description: "banana contains 110 calories, 30 grams of carbohydrate and 1 gram of protein. Bananas are naturally free of fat, cholesterol, and sodium. Bananas provide a variety of vitamins and minerals: Vitamin B6 - 0.5 mg" 
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
                    description: "apples are a relatively high-carbohydrate fruit and their most significant nutrient is vitamin C. They’re a very versatile fruit; while often eaten as a snack, they’re also used in a variety of dessert recipes.",
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
                        description: "Tomatoes have a thin red skin and their flesh is acidic, slightly sweet, and juicy; in fact, tomatoes have a water content of 94.5%.Like many types of fruit, The main polyphenolic compound in tomatoes is lycopene " 
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
                      description: "Orange varieties and they can vary between sweet, bitter, and sour. Oranges are a relatively high-carbohydrate fruit and they provide a decent amount of vitamin C."
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
                        description: "Carrots were one of the vegetables examined in recent research on foods rich in beta-carotene and bone health. More specifically, native to Europe and Southwestern Asia "
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
                        description: "Very close in nature to lemons, the lime is another sour citrus fruit. There are many different types of lime species, and all are believed to have originated in Indonesia and South-Eastern Asia. Similar to lemons, it is common to use limes for flavor in various drinks, cocktails, and teas" 
                      ,quantity: 1 } 
                    
                    ,
                    id7:
                      {name: "Avocado"
                      ,
                      url: 'https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      ,
                      price: 4
                      ,
                      description: "Avocados are extremely nutrient-dense, and they are rich in fiber, protein, vitamins, and minerals – especially potassium.The fruit originated in South America, possibly in Mexico or Peru, and it was first referred to in English by the name of “crocodile pear”."
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
                      description: "The cherry is a small fruit with a sweet and juicy taste. There are also two main types of cherry; sour cherries and sweet cherries.These two varieties are fairly similar, but sour cherries have the slightly better nutritional profile"
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
                      description: "Pineapples are a sweet and slightly sour tropical fruit originating from South America.Similar to other tropical fruits, pineapples have many culinary uses. For instance, they’re a popular choice in  smoothies. "
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
                        description: "Strawberries are thought to be berries, . Commonly eaten fresh, with cream, or in a range of desserts, strawberries are a soft and sweet-tasting fruit. Strawberries have an excellent nutrition profile and contain large amounts of vitamin C. "
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
                      description: "On a positive note, research studies demonstrate that blueberries may lower high blood pressure and improve cardiovascular risk factors, Blueberries are somewhat low in carbohydrate too, putting them near the top of the low carb list of fruits"
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
                        description: "Strawberries are bright red, juicy, and sweet. They're an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.Strawberries are very rich in antioxidants and plant compounds, which may have benefits blood sugar control" 
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
                        description: "Honeydew melons are large, . The flesh is usually a pale green, although some varietals have a slightly gold flesh. Honeydew melon is the ideal food to eat immediately after a workout. It is also rich in electrolytes, such as potassium, calcium, sodium, and calcium, " 
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
                        description: "The origin of watermelons is Southern Africa, and it is a large fruit that grows in tropical and subtropical regions. The fruit can wildly vary in size, with some fruit being a few kilograms in weight, but others reaching gigantic proportions. "
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
                                      {arrayFruitObjects[objectItem]. description}

                                  </Card.Text>
                                  <Card.Text>  <strong>${arrayFruitObjects[objectItem].price} </strong>    </Card.Text>
                                    <FaCartPlus className="cart-plus" 
                                      id = {arrayFruitObjects[objectItem].name}
                                      
                                     //  when onClicl 2 function invoke , setCOunt which increment the count and handClick adding element 
                                   
                                    onClick={(e) => { selectItemClick( e, arrayFruitObjects[objectItem].name , arrayFruitObjects[objectItem].price, arrayFruitObjects[objectItem].url , i )}} 
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
