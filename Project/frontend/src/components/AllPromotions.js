import React, { useState, useEffect } from "react";
import axios from "axios";
import './All.css'
//import UpdateArticles from './components/UpdateArticles';
export default function AllPromotions(){

    const [promotions, setPromotions] = useState([]);

    useEffect(()=>{
     function getPromotions() {
     axios.get("http://localhost:8070/promotion/").then((res)=>{
         console.log(res.data);
        setPromotions(res.data);
     }).catch((err)=>{
         console.log(err.message); 
         alert(err.message);
     })
    } 
    getPromotions();
    },[]) 

 return(
 <div className="container">
   <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black"}}>Promotions</h1>  

   <div style ={{padding:"5px 0px 5px 0px" }}>
     
                <table class ="noticetable" style={{width: "50%"}}  border ="5px solid" >



                
                    {promotions.map((promotion) => (

                     <div>
                        <thead>
                     <tr >
                          <th><h2><b>{promotion.P_name}</b></h2></th>  <br></br>

                     </tr>
                        </thead>

                <tr class="content">
                     <td>
                      
   
                       <h4>{promotion.P_description}</h4>  <br></br>  

                       <h6>PID:{promotion.PID} </h6>
                       <h6>Status:{promotion.P_status} </h6>
                       <h6>Duration:{promotion.P_duration} </h6>
                       <h1 class = "blank">blank</h1>
                            
                     </td>
                  </tr>
                        </div>
                    )
                    
                    )}

                    <tbody>

                    </tbody>
                
                </table>
                <br></br>
                </div>

            </div>

)

}