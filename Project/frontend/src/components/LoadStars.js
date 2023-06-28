/*
import React, {useState, useEffect} from "react";
import axios from "axios";
//import './Background.css';
//import { Link } from "react-router-dom";
//import Article from "../../../BACKEND/models/Article";

export default function LoadStars(){

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [AID, setAID] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [status, setstatus] = useState('');
    const [EID, setEID] = useState('');
    const [stars,setstars] = useState('');
   
 

    useEffect(() => {
        function getArticles() {
            axios.get("http://localhost:8070/article/").then((res)=>{
        setArticles(res.data);
    }).catch((err) =>{
        alert(err.message);
    })
}

getArticles();
}, [])
           
           const updateArticle = (_id) => {


const stars = 
        <div class="con">
            <form onSubmit={sendData}>
  

              <div>  
            <link rel="stylesheet" href="style.css"/>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        

              <div class="post">
               
              </div>
              <div class="star-widget">
              <select class="form-control" id="stars" onChange={e=>{setstars(e.target.value);}}>

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

                </select>

                <form action="#">
                  <div class="bton">
                    <button type="submit">Post</button>
                  </div>
                </form>

              </div>
              </div>
              </form>
            </div>


if(category === null){
    return;
}


        
/*
               const category = prompt("Enter new category: ")
               if(category === null){
                   return;
               }

               const name = prompt("Enter new name: ")
               if(name === null){
                   return;
               }
               
               const description = prompt("Enter new description: ")
               if(description === null){
                   return;
               }
    
               const status = prompt("Enter new status: ")
               if(status === null){
                   return;
               }               
 
               const EID = prompt("Enter new EID: ")
               if(EID === null){
                   return;
               }


*/
/*
  axios.put(`http://localhost:8070/article/update/${_id}`,
  {
       category : category,
       name : name,
       description: description,
       status : status,
       EID : EID, 
       stars:stars,      
       _id : _id

    })  .then(()=> {
        alert("Article updated")
        setArticles(articles.map((val) => {
            return val._id ==_id ?
            {
                _id : _id,
                AID : AID,
                category : category,
                name : name,
                description: description, 
                status : status,
                EID : EID,
                stars:stars,
              

            }: val; 

        })) 
    })
    
};


function ConfirmDelete(id)
{
 var x = window.confirm("Are you sure you want to delete this Article?"); 
 if(x)
   deleteArticles(id);

   else
      return;
}


const deleteArticles = (_id) => {

axios.delete(`http://localhost:8070/article/delete/${_id}`).then ((res) => {
                alert("Article Deleted")
                setArticles(
            articles.filter((val) => {
            return val._id != _id;
            })
        )
    }).catch((err) =>{
        alert(err.message);
        })
    }
    */   
   
  /*  
return(
    <div className="container">
      <h1 style={{textAlign: "center",margin: "20px"}}>Update Articles</h1>  
  
         <div>
             <label for="aid">Article ID</label>
             <input type="text" className="form-control" id="aid" placeholder="Enter Article ID" style={{width: "21%"}}
              onChange = {event =>{
                setAID(event.target.value);
              }}/>
   

   
             <label for="category">Article Category</label>
             <select class="form-control" id="category" style={{width: "21%"}}
              onChange={event=>{
                  setcategory(event.target.value);}}  >
                   <option value="" disabled selected hidden> Select Category </option>
                   <option value="Rules"> Rules to get aware about </option>
                   <option value="Sanctuary"> About Sanctuary </option>
                   <option value="Animals"> About Animals </option>
               </select>
   
         

             <label for="name">Article Name</label>
             <input type="text" className="form-control" id="name" placeholder="Enter Article Name" style={{width: "21%"}}
                onChange={event=>{
                 setname(event.target.value);
               }}/>
        
   
             <label for="description">Article Description</label>
             <input type="text" className="form-control" id="description" placeholder="Enter Article Description" style={{width: "21%"}}
                onChange={event=>{
                 setdescription(event.target.value);
               }}/>
   
        
   
             <label for="status">Article Status</label>
             <select class="form-control" id="status" style={{width: "21%"}}
             onChange={event=>{
                 setstatus(event.target.value);}} >
                   <option value="" disabled selected hidden> Select Status </option>
                   <option value="Active"> Active </option>
                   <option value="Expired"> Expired </option>
                  
               </select>
           
   
         
              
             <label for="eid">Employee ID</label>
             <input type="text" className="form-control" id="eid" placeholder="Enter Employee ID" style={{width: "21%"}}
                onChange={event=>{
                 setEID(event.target.value);
               }}/>
   
        
         <hr></hr>
         <div className="container">
         <div style ={{padding:"5px 0px 5px 0px" }}>
                  <table class="table table-striped table-dark"  border = "black solid 2px" style={{width: "80%"}}  >
                      
                  
                        
                    

           <div class="listdata">  
        {articles.filter((val) => {

if (searchTerm == ""){
    return val
} else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.status.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} else if (val.EID.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
} 
       
        }).map((val, key) => {
           return(
                <div className = "displayartContainer" style={{width: "100%"}} key = {key}>
                    <div className = "artrow" style={{width: "100%"}}>
                        {""}

                        <thead>
                        <tr className = "artrow" style={{width: "100%"}}>
                            <th scope="col1">AID</th>
                            <th scope="col2">Category</th>
                            <th scope="col3">Name</th>
                            <th scope="col4">Description</th>
                            <th scope="col5">Status</th>
                            <th scope="col6">EID</th>
                            <th scope="col7">UPDATE</th>
                            <th scope="col8">DELETE</th>
                           
                        </tr>
                    </thead>

                   <tr  class="bg-primary">  
                     <td  class="bg-primary">    {val.AID}          </td>     
                     <td  class="bg-primary">    {val.category}      </td> 
                     <td  class="bg-primary">    {val.name}          </td> 
                     <td  class="bg-primary">    {val.description}   </td> 
                     <td  class="bg-primary">    {val.status}        </td> 
                     <td  class="bg-primary">    {val.EID}          </td> 
               
                   
         <td>    <button onClick = {() =>{
                updateArticle(val._id)
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
*/
/*
    <div class="con">
            <form onSubmit={sendData}>
  

              <div>  
            <link rel="stylesheet" href="style.css"/>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        

              <div class="post">
               
              </div>
              <div class="star-widget">
              <select class="form-control" id="stars" onChange={(e)=>{setstars(e.target.value);}}>

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

                </select>

                <form action="#">
                  <div class="bton">
                    
                  <button onClick = {() =>{
                updateArticle(val._id)
                }}> POST</button>
                    
                  </div>
                </form>

              </div>
              </div>
              </form>
            </div>

   );

 }  

*/
