import React, { useState } from 'react'
import axios from 'axios';  

function UseEffectapi () {

  const [news, setNews]= useState([])
   
  const fetchNews= () =>{
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc142f9d4334406e8b034b119565250c")
    .then((response) =>{
      console.log(response)
     setNews(response.data.articles)
    })
  }

  return (
    <>

          
           <div className='container-fluid mt-5'>
            <div  className='row  text-center'>
             <div className='col-md-4' >

             <button className='btn btn-primary' onClick={fetchNews}> Indian News</button>
             </div>

            </div>

        </div>

        <div className="container">
          <div className="row">
            {
              news.map((value) => {
                return (
                  <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={value.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{value.title}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href={value.url} className="btn btn-primary" target="_blank">Go somewhere</a>
                        </div>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default UseEffectapi;