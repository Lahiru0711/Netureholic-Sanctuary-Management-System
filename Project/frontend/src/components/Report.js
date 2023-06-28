import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Report(){


    const [articles, setArticles] = useState([]);

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

 return(
 <div className="container">
   <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black" ,width:"650px"}}>Report</h1>  

   <div style ={{padding:"5px 0px 5px 0px" }}>
     
                <table class="table table-striped table-dark" style={{textAlign: "left",margin: "20px", color: "white", background:"black", width:"650px"}}>
                    <thead>
                        <tr >
                            <th scope="col">AID</th>
                          
                            <th scope="col">name</th>
                         
                            <th scope="col">status</th>
                            <th scope="col">Ratings</th>

                        </tr>
                    </thead>
                    {articles.map((article) => (
                        <tr class="bg-primary">
                            <td class="bg-primary">{article.AID}</td>
                           
                            <td class="bg-primary">{article.name}</td>
                       
                            <td class="bg-primary">{article.status}</td>
                            <td class="bg-primary">{article.stars}</td>
                 
                        </tr>
                    )
                    
                    )}

                    <tbody>

                    </tbody>

                </table>
                </div>

            </div>

)

}

