
import React, {useState, useEffect} from "react";
import axios from "axios";
//import './Background.css';
//import { Link } from "react-router-dom";
//import Article from "../../../BACKEND/models/Article";

export default function UpdatePromotions(){

    const [promotions, setPromotions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const [PID, setPID] = useState('');
    const [P_description, setPdescription] = useState('');
    const [P_name, setPname] = useState('');
    const [P_duration, setPduration] = useState('');
    const [P_status, setPstatus] = useState('');


    useEffect(() => {
        function getPromotions() {
            axios.get("http://localhost:8070/promotion/").then((res)=>{
        setPromotions(res.data);
    }).catch((err) =>{
        alert(err.message);
    })
}

getPromotions();
}, [])
           
           const updatePromotion = (_id) => {

        

               const P_description = prompt("Update Description: ")
               if(P_description === null){
                   return;
               }

               const P_name = prompt("Update Name: ")
               if(P_name === null){
                   return;
               }
               
               const P_duration = prompt("Update Duration: ")
               if(P_duration === null){
                   return;
               }
    
               const P_status = prompt("Update Status: ")
               if(P_status === null){
                   return;
               }               
 
             


  axios.put(`http://localhost:8070/promotion/update/${_id}`,
  {
       P_description : P_description,
       P_name : P_name,
       P_duration: P_duration,
       P_status : P_status,
       _id : _id

    })  .then(()=> {
        alert("Promotion updated")
        setPromotions(promotions.map((val) => {
            return val._id ==_id ?
            {
                _id : _id,
                PID : PID,
                P_description : P_description,
                P_name : P_name,
                P_duration: P_duration,
                P_status : P_status,
           

            }: val; 

        })) 
    })
    
};


function ConfirmDelete(id)
{
 var x = window.confirm("Are you sure you want to delete this Promotion?"); 
 if(x)
   deletePromotions(id);

   else
      return;
}


const deletePromotions = (_id) => {

axios.delete(`http://localhost:8070/promotion/delete/${_id}`).then ((res) => {
                alert("Promotion Deleted")
                setPromotions(
            promotions.filter((val) => {
            return val._id != _id;
            })
        )
    }).catch((err) =>{
        alert(err.message);
        })
    }
           
return(

    <div className="container">
      <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black",width:"650px"}}>Update Promotions</h1>  
  
         <div>
            
   
         <div className="container">
         <div style ={{padding:"5px 0px 5px 0px" }}>
                  <table class="table table-striped table-dark"  border = "black solid 2px"  style={{textAlign: "left",margin: "0px", color: "white", background:"black", width:"80%"}}  >
                      
                  
                        
                    

           <div class="listdata">  
        {promotions.filter((val) => {

if (searchTerm == ""){
    return val
} else if (val.P_description.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.P_name.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.P_duration.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.P_status.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} 
       
        }).map((val, key) => {
           return(
                <div className = "displayproContainer" style={{width: "100%"}} key = {key}>
                    <div className = "prorow" style={{width: "100%"}}>
                        {""}

                        <thead>
                        <tr className = "prorow" style={{width: "100%"}}>
                            <th scope="col">PID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Status</th>
                           
                            <th scope="col">UPDATE</th>
                            <th scope="col">DELETE</th>
                           
                        </tr>
                    </thead>

                   <tr  class="bg-primary">  
                     <td  class="bg-primary">    {val.PID}          </td>     
                     <td  class="bg-primary">    {val.P_description}      </td> 
                     <td  class="bg-primary">    {val.P_name}          </td> 
                     <td  class="bg-primary">    {val.P_duration}   </td> 
                     <td  class="bg-primary">    {val.P_status}        </td> 
                     
               
                   
         <td>    <button onClick = {() =>{
                updatePromotion(val._id)
                }}> Update</button>    </td>


         <td>    <button onClick  = {() =>{
                ConfirmDelete(val._id)
                 }}> Delete</button>    </td>

                    </tr>
              
                </div>
                   
                </div>
                   )
             })}
          </div>
          </table>
           
          </div>
          </div>
      </div>
    
    </div>

   );

 }  


