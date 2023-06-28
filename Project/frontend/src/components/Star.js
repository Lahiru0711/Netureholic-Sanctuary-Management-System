import React, { useState, useEffect } from "react";
import axios from "axios";
//import './StarF/style.css'; 
import { useHref } from "react-router-dom";
export default function Star(){


    const[stars,setstars] = useState("");
  
    function sendData(e){
      e.preventDefault();
 
     const newArticle ={
      stars
     }
 
 axios.post("http://localhost:8070/article/add",newArticle).then(()=>{
     alert("Rate Submited")

    }).catch((err)=>{
      alert(err)
    })

  }


    return(

           
         
            <div class="con">
            <form onSubmit={sendData}>
            <div className="form-group">

           
               <form>
            <link rel="stylesheet" href="style.css"/>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        

               <div class="post">
                </div>


              <div class="star-widget">
              <form class="form-control" id="stars" onChange={(e)=>{setstars(e.target.value);}}>

                <input type="radio" name="rate" id="rate-5"/>
                <label for="rate-5" class="fas fa-star"> 1 of 5 </label>
              
                <input type="radio" name="rate" id="rate-4"/>
                <label for="rate-4" class="fas fa-star"> 2 of 5 </label>

                <input type="radio" name="rate" id="rate-3"/>
                <label for="rate-3" class="fas fa-star"> 3 of 5 </label>

                <input type="radio" name="rate" id="rate-2"/>
                <label for="rate-2" class="fas fa-star"> 4 of 5 </label>

                <input type="radio" name="rate" id="rate-1"/>
                <label for="rate-1" class="fas fa-star"> 5 of 5 </label>
             </form>
             </div>
             </form>

                <form action="form-group">
                  <div class="bton">
                    <button type="submit">Post</button>
                  </div>
                </form>



              </div>
              </form>
              </div>
          
        
          

    );

}


