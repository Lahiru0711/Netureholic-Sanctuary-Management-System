/*
import React, {useState, useEffect} from "react";
import axios from "axios";
//import './Background.css';
//import { Link } from "react-router-dom";
//import Article from "../../../BACKEND/models/Article";

export default function DeleteArticle(){

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
   // const [AID, setAID] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [status, setstatus] = useState('');
    const [EID, setEID] = useState('');
    //const params = useParams();
    
   */

    /*

    useEffect(() => {
        function getArticles() {
            axios.get("http://localhost:8070/article/").then((res)=>{
        setArticles(res.data);
    }).catch((err) =>{
        alert(err.message);
    })
}
            }, [])
           
           const updateArticle = async (_id)=>{
            console.warn();
            let result = await axios.get(`http://localhost:8070/article/get/${_id}`);
        
            
            console.log(result.data);
            const{category,name,description,status,EID}= result.data.articles

            setcategory(category);
            setname(name);
            setdescription(description);
            setstatus(status);
            setEID(EID);
        }  


  const sendData = async (_id)=>{
    const response = await axios.put(`http://localhost:8070/article/update/${_id}`,
  {
       category,
       name,
       description,
       status,
       EID})
  }
    return (

    <div className="app" >
       
        <main>
        <div className="container">
        <h4>Edit Article</h4>
        <br></br>
        <form class="row g-2 needs-validation" novalidate onSubmit={sendData}>


        <div class="col-md-6">
        <label for="cat">Category</label>
             <select class="form-control" id="category" value={category} 
             required onChange={(event)=>{
              
                  setcategory(event.target.value);
                  }}  >
                   <option selected>Choose...</option>   
                   <option value="" disabled selected hidden> Select Category </option>
                   <option value="Rules"> Rules to get aware about </option>
                   <option value="Sanctuary"> About Sanctuary </option>
                   <option value="Animals"> About Animals </option>
               </select>
               </div>

        <div class="col-md-6">
          <label for="nam" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" value={name} required placeholder="Name" onChange={(event)=>{
              setname(event.target.value);  
            }}/>
       </div>

       <div class="col-md-6">
          <label for="des" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" value={description} required placeholder="Description" onChange={(event)=>{
              setdescription(event.target.value);  
            }}/>
       </div>


       <div class="col-md-6">
<label for="sta">Status</label>
<select class="form-control" id="status" value={status} 
required onChange={(event)=>{
    setstatus(event.target.value);
    }} >
      <option value="" disabled selected hidden> Select Status </option>
      <option value="Active"> Active </option>
      <option value="Expired"> Expired </option>
     
  </select>
</div>
   


<div class="col-md-6">
          <label for="ei" class="form-label">EID</label>
          <input type="text" class="form-control" id="EID" value={EID} required placeholder="EID" onChange={(event)=>{
              setEID(event.target.value);  
            }}/>
       </div>

       <div class="col-2">
          <button class="btn btn-primary" type="submit">Edit Article</button>
        </div>
      </form></div>
      </main>
        
        </div>
    );
  }
*/



