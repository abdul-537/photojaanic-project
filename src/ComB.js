import React,{useContext} from 'react'
import ComC from './ComC';
import { FirstName, LastName  } from './App';



function ComB() {

 const fname = useContext(FirstName);
 const lname = useContext(LastName)
  return (
    <div>
        <h1>My name ia Abdul Rehman {fname} {lname}</h1>
    </div>
  )
}

export default ComB