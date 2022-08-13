import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";




function App() {
  const [listFoods, setFoods] = useState(foods)
  
  

  return (
  <div className="App">
{listFoods.map( element => {
     return(
       <div>
         <p> {element.name} </p>
         <img src={element.image} width={100} />
       </div>
     )    
   })
   }

  </div>
  )
}
export default App;