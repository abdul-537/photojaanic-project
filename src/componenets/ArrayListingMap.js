import React from 'react';
import { Table } from 'react-bootstrap';

function ArrayListingMap() {

    // const student = ["Anil","Sunil","Sidhu", "Sam"];
    const student =[
        {name:"Abdul", email:"abdul@23", contact:"9820728869"},
        {name:"Rehman", email:"rehman@23", contact:"9820728869"},
        {name:"Ansari", email:"ansari@23", contact:"9820728869"},
        {name:"Anil", email:"anil@23", contact:"9820728869"},
        {name:"Sunil", email:"sunil@23", contact:"9820728869"},

    ]

    function deletuser () {

    }
  return (
    <div>
        <h1>Handle Array with List</h1>

        <Table  >
                <tr>
                   <td>ID</td> 
                   <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
               </tr>
            {
                student.map( (data,i) =>
                    <tr key={i}>
                    <td>{data.id}</td>  
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                        <td><button >Delet</button></td>
                    </tr>
                )
            }
        </Table>

    </div>
  )
}

export default ArrayListingMap