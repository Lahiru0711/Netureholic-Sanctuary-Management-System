/*
import React, {useState, useEffect} from "react";
import axios from "axios";
//import './Background.css';
import { useParams } from "react-router-dom";
import AddArticle from "./AddArticle";
//import Article from "../../../BACKEND/models/Article";

export default function New(){

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [AID, setAID] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [status, setstatus] = useState('');
    const [EID, setEID] = useState('');
    const params = useParams();
 

    useEffect(() => {


getArticles();
}, [])
           
const getArticles = async ()=>{
    console.warn(params);
    let result = await axios.get(`http://localhost:8070/article/get/${params._id}`);

    
    console.log(result.data);
    const{category,name,description,status,EID}= result.data.articles

    setcategory(category);
    setname(name);
    setdescription(description);
    setstatus(status);
    setEID(EID);
               }  

   const sendData = async ()=>{
   const response = await axios.put
    (`http://localhost:8070/article/update/${params._id}`,
  {
       
       category : category,
       name : name,
       description: description,
       status : status,
       EID : EID    })
       
      

    }
    
    /*).then(()=> {
        alert("Article updated")

        setArticles(articles.map((params) => {
            return params._id ==_id ?
            {
                _id : _id,
                AID : AID,
                category : category,
                name : name,
                description: description,
                status : status,
                EID : EID,

            }: params; 

        

        })) 
    })
    
};
*/



/*
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
           
return(

    <div className="container">
      <h1 style={{textAlign: "center",margin: "20px"}}>Update Articles</h1>  
      <form class="row g-2 needs-validation" novalidate onSubmit={sendData}>
    
      <div class="form-group">
          <label for="AID" class="form-label">Article ID</label>
          <input type="text" class="form-control" id="AID" value={AID} required placeholder="AID" onChange={(e)=>{
              setname(e.target.value);  
            }}/>
       </div>
   

   <div class="form-group">
        <label for="category">Category</label>
             <select class="form-control" id="category" value={category} 
             required onChange={(e)=>{
              
                  setcategory(e.target.value);
                  }}  >
                   <option selected>Choose...</option>   
                   <option value="" disabled selected hidden> Select Category </option>
                   <option value="Rules"> Rules to get aware about </option>
                   <option value="Sanctuary"> About Sanctuary </option>
                   <option value="Animals"> About Animals </option>
               </select>
               </div>
         
     <div class="form-group">
          <label for="nam" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" value={name} required placeholder="Name" onChange={(e)=>{
              setname(e.target.value);  
            }}/>
       </div>
   
       <div class="form-group">
          <label for="des" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" value={description} required placeholder="Description" onChange={(e)=>{
              setdescription(e.target.value);  
            }}/>
       </div>

   
        
   
       <div class="form-group">
<label for="sta">Status</label>
<select class="form-control" id="status" value={status} 
required onChange={(e)=>{
    setstatus(e.target.value);
    }} >
      <option value="" disabled selected hidden> Select Status </option>
      <option value="Active"> Active </option>
      <option value="Expired"> Expired </option>
     
  </select>
</div>
           
   
         
              
<div class="form-group">
          <label for="ei" class="form-label">EID</label>
          <input type="text" class="form-control" id="EID" value={EID} required placeholder="EID" onChange={(e)=>{
              setEID(e.target.value);  
            }}/>
       </div>
   
   <div class="col-2">
          <button class="btn btn-primary" type="submit">Edit Article </button>
        </div>
     

        
         <hr></hr>
         <div className="container">
         <div style ={{padding:"5px 0px 5px 0px" }}>
                  <table class="table table-striped table-dark"  border = "black solid 2px" style={{width: "80%"}}  >
                      
                  
                        
                    

           <div class="listdata">  
        {articles.filter((params) => {

if (searchTerm == ""){
    return params
} else if (params.category.toLowerCase().includes(searchTerm.toLowerCase())){
    return params
} else if (params.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return params
} else if (params.description.toLowerCase().includes(searchTerm.toLowerCase())){
    return params
} else if (params.status.toLowerCase().includes(searchTerm.toLowerCase())){
    return params
} else if (params.EID.toLowerCase().includes(searchTerm.toLowerCase())){
    return params
} 
       
        }).map((params, key) => {
           return(
                <div className = "displayartContainer" style={{width: "100%"}} key = {key}>
                    <div className = "artrow" style={{width: "100%"}}>
                        {""}

                        <thead>
                        <tr className = "artrow" style={{width: "100%"}}>
                            <th scope="col">AID</th>
                            <th scope="col">Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">EID</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DELETE</th>
                           
                        </tr>
                    </thead>

                   <tr  class="bg-primary">  
                     <td  class="bg-primary">    {params.AID}          </td>     
                     <td  class="bg-primary">    {params.category}      </td> 
                     <td  class="bg-primary">    {params.name}          </td> 
                     <td  class="bg-primary">    {params.description}   </td> 
                     <td  class="bg-primary">    {params.status}        </td> 
                     <td  class="bg-primary">    {params.EID}          </td> 
               
                   
         <td>    <button onClick = {() =>{
                getArticles(params._id)
                }}> Update</button>    </td>

         <td>    <button onClick  = {() =>{
                ConfirmDelete(params._id)
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
          </form>
      </div>
      
    
    

   );

 } 
 */ 


