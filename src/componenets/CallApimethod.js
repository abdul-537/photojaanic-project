import React,{ useEffect, useState } from 'react'

function CallApimethod() {

    const [data, setData]= useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((result) =>{result.json()
        .then((resp) =>{ setData(resp)
                console.warn("result",resp)
 
            })
        })
    }, [])
    
    

    const TableData= data.map((item)=>{
        return (
            <tbody>
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed}</td>
                </tr>
            </tbody>
        )
    })
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>UserId </th>
                    <th>ID </th>
                    <th>Title</th>
                    <th>completed</th>
                </tr>
            </thead>
            {TableData}
        </table>

   
    
    </div>
  )
}

export default CallApimethod