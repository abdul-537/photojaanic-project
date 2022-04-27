import React,{ useState } from 'react'


function Form() {

    const [name,setName]= useState("");
    const [email,setEmail]= useState("")
    const[fullName,setFullName]= useState("")
    const[newName,setNewName]= useState("")
  
  
    const getData = (event) => {
      setName(event.target.value)
     
    }
    
    const getData2 = (event) => {
     
      setEmail(event.target.value)
    }
  
    const item = (e) =>{
      e.preventDefault();
      setFullName(name);
      setNewName(email);
      
      
    }
  return (
    <div>
        <form  onSubmit={item}>
         <div>
            <h1> Hello {fullName}  {newName} </h1>
            <input  type="text" placeholder="Enter Your Name" 
            onChange={getData}
            value={name}/>
            <br /><br />

            <input  type="email" placeholder="Enter Your Email" 
            onChange={getData2}
            value={email}/>
            <br /><br />
            <button type="submit" >Submit</button>
         </div>
      </form> 
    </div>
  )
}

export default Form