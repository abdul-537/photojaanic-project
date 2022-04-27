import React, {  useState, useEffect } from 'react';
import axios from 'axios';




const Propsuseseffect = (props)  => {
  
    const [count, setCount]= useState (0);
    const [data, setData]= useState (10);
  
    useEffect(() => {
      alert("count is " + props.count);
      console.log("I am Click")
    
    },[props.count])
     return (
        <div>
               <h1 >Count Props: {props.count}</h1>
               <h1  >Data Props : {props.data}</h1>
        
       
        </div>
      );
    };
  
  
  export default Propsuseseffect;
  