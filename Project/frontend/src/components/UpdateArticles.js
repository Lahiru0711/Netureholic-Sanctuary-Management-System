
import React, {useState, useEffect} from "react";
import axios from "axios";
//import './Background.css';
//import { Link } from "react-router-dom";
//import Article from "../../../BACKEND/models/Article";
import SearchArticle from "./SearchArticle";

export default function UpdateArticles(){

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [AID, setAID] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [status, setstatus] = useState('');
    const [EID, setEID] = useState('');
   
 

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


  axios.put(`http://localhost:8070/article/update/${_id}`,
  {
       category : category,
       name : name,
       description: description,
       status : status,
       EID : EID,       
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
     
    



    function updateSearchTerms (newSearchTerm){

        function getSearchedSubjects(){
    
            axios.get(`http://localhost:8070/article/displays/${newSearchTerm}`).then((res)=>{
    
                setArticles(res.data);
    
    
    
            }).catch((err)=>{
    
               console.log()
    
            })
    
        }
    
        function getArticles(){
    
            axios.get("http://localhost:8070/article/").then((res)=>{
    
               setArticles(res.data);
    
    
    
            }).catch((err)=>{
    
                console.log(err.message)
    
                alert(err.message)
    
            })
    
        }
    
    
    
        if (newSearchTerm != ''){
    
            getSearchedSubjects();
    
        }
    
        else{
    
           getArticles();
    
        }
    
       
    
       
    
    }








return(

    <div className="container">
      <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black",width:"650px"}}>Update Articles</h1>  
  
         <div>
          
   
         <div className="container">
         <SearchArticle refreshFunction={updateSearchTerms}/>    
         <div style ={{padding:"5px 0px 5px 0px" }}>
                  <table class="table table-striped table-dark"  border = "black solid 2px" style={{textAlign: "left",margin: "0px", color: "white", background:"black", width:"80%"}}>
                      
                  
                        
                    

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

   );

 }  


