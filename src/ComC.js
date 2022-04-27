import React from 'react';
import { FirstName, LastName } from './App';

const  ComC = () => {
  return (
    <div>

        <FirstName.Consumer>
            
            {(fname) => {
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return(
                                <h1>My name ia Abdul Rehman {fname} {lname} </h1>
                            );
                        }}
                    </LastName.Consumer>
                )
            }}

        </FirstName.Consumer>
        
    </div>
  );
};

export default ComC;