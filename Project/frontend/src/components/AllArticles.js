import React, { useState, useEffect } from "react";
import axios from "axios";
//import tiger from '/components/images/tiger.jpg';
import './All.css'





//import UpdateArticles from './components/UpdateArticles';
export default function AllArticles(){

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [stars,setstars] = useState("");

    useEffect(()=>{
     function getArticles() {
     axios.get("http://localhost:8070/article/").then((res)=>{
         console.log(res.data);
        setArticles(res.data);
     }).catch((err)=>{
         console.log(err.message);
         alert(err.message);
     })
    }
    getArticles();
    },[])

    const updateArticle = (_id) => {
    

      axios.put(`http://localhost:8070/article/update/${_id}`,
      {
          stars:stars,       
           _id : _id
    
        })  .then(()=> {
            alert("submited")
            setArticles(articles.map((val) => {
                return val._id ==_id ?
                {
                    _id : _id,
                  stars:stars,
                  
    
                }: val; 
    
            })) 
        })



    };









 return(

 
 <div className="container">
   <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black"}}>Articles</h1>  

   <div style ={{padding:"5px 0px 5px 0px" }}>
     
                <table class ="noticetable" style={{width: "50%"}}  border ="5px solid" >



                
                    {articles.map((article) => (

                     <div>
                        <thead>
                     <tr >
                          <th><h2><b>{article.name}</b></h2></th>  <br></br>

                     </tr>
                        </thead>

                <tr class="content">
                     <td>
                      
                       <h4>{article.category}</h4>  <br></br> 
                          
                       <h4>{article.description}</h4>  <br></br>  
                       <h6>AID:{article.AID} </h6>

                      
                      
                      <h6>Rate : </h6>

                      
                       <div class="con">
                
                <link rel="stylesheet" href="style.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            
    
                  <div class="post">  
                  </div>
                  
                  <div class="star-widget" id="status"
             onChange={event=>{
                 setstars(event.target.value);}}>
                    <input type="radio" name="rate" id="rate-1" value ="5 of 5"/>
                    <label for="rate-1" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2" value= "4 of 5"/>
                    <label for="rate-2" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-3" value= "3 of 5"/>
                    <label for="rate-3" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-4" value= "2 of 5"/>
                    <label for="rate-4" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-5" value= "1 of 5"/>
                    <label for="rate-5" class="fas fa-star"></label>

    

             
       {articles.filter((val) => {

if (searchTerm == ""){
    return val
} 
 else if (val.stars.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
}  
       
        }).map((val, key) => {
           return(
               
                  

                     

                   
        <div class= "form" action="#">
        <header></header>
       
       <div class="bton">
       
          <button  onClick = {() =>{
    updateArticle(val._id)
    }}> POST</button>    

          </div>
        </div>

                                  
             
                   )
             })}
      





             
                  </div>
                </div>
                           
                                         
                       <h1 class = "blank">...</h1>
                            
                     </td>

                     
                  </tr>
                        </div>
                    )
                    
                    )}

                                
                </table>
                <br></br>
                </div>

            </div>
          

)

}