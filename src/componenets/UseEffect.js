import React, {  useState, useEffect } from 'react'
import axios from 'axios';
import Propsuseseffect from './Propsuseseffect';
import './Style.css'




const UseEffect = ()  => {
  
    const [count, setCount]= useState (0);
    const [data, setData]= useState (10);
  
    
     return (
        <div>

        <Propsuseseffect count={count} data={data} />
               <button   className='primery' onClick={() => setCount(count + 1)}> Update Count </button>
  
               <button  onClick={() => setData(data + 1)}> Update Data </button>
        
       
        </div>
      );
    };
  
  
  export default UseEffect;
  