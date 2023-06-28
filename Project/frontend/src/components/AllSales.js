import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import { Link,useNavigate } from "react-router-dom";
import Header from './Header';
import {Button} from "reactstrap";
import SearchSale from "./SearchSale";


export default function AllSales() {
    const [sales, setSales] = useState([]);
    const Navigate=useNavigate();


    //delete sale by id
    const deletesale = id => {
        axios.delete(`http://localhost:8070/sale/delete/${id}`)
        .then(res => alert("Deleted successfully"))
        setSales(sales.filter(elem => elem._id !== id))
    }

    useEffect(()=> {
        function getSales(){
            axios.get("http://localhost:8070/sale").then((res) => {
                console.log(res);
                setSales(res.data);
            }).catch((err)=> {
                
                alert(err.message);
            })
        }
        getSales();
     }, [setSales])

     const updateSale=(sid)=>{
         Navigate("UpdateSale",{state:{id:sid}})
     }

     console.log("check",setSales);

    useEffect(()=> {
        function getSales(){
            axios.get("http://localhost:8070/sale").then((res) => {
                console.log(res.data);
                setSales(res.data);
            }).catch((err)=> {
                console.log(err.message);
                alert(err.message);
            })
        }
        getSales();
    }, [setSales])






    function updateSearchTerms (newSearchTerm){



        function getSearchedSubjects(){

   

            axios.get(`http://localhost:8070/sale/displays/${newSearchTerm}`).then((res)=>{

   

                setSales(res.data);

   

   

   

            }).catch((err)=>{

   

               console.log()

   

            })

   

        }

   

        function getSales(){

   

            axios.get("http://localhost:8070/sale/").then((res)=>{

   

               setSales(res.data);

   

   

   

            }).catch((err)=>{

   

                console.log(err.message)

   

                alert(err.message)

   

            })

   

        }

   

   

   

        if (newSearchTerm != ''){

   

            getSearchedSubjects();

   

        }

   

        else{

   

           getSales();

   

        }

   

       

   

       

   

    }








    return(
        
        <div className="container">
            <div>
            <Header/>
            </div>
            <h2 style={{textAlign: "center",margin: "20px"}}>Sales Details</h2>
            <SearchSale refreshFunction={updateSearchTerms}/> 
            <div style ={{padding:"5px 0px 5px 0px"}}>
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact Number 1</th>
                            <th scope="col">Contact Number 2</th>
                            <th scope="col">Adults Count</th>
                            <th scope="col">Children Count</th>
                            <th scope="col">Email</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                    {sales.map((sale) => (
                        <tr class="bg-primary">
                            <td class="bg-primary">{sale.name}</td>
                            <td class="bg-primary">{sale.contactNo1}</td>
                            <td class="bg-primary">{sale.contactNo2}</td>
                            <td class="bg-primary">{sale.adultsCount}</td>
                            <td class="bg-primary">{sale.childrenCount}</td>
                            <td class="bg-primary">{sale.email}</td>
                            <td class="bg-primary">{sale.date}</td>
                            <td>
								
								<Link color="warning" className="btn btn-warning mr-1" to={`/update/${sale._id}`}> <i className="fas fa-edit"></i>&nbsp;Update</Link>&nbsp;&nbsp;
                                <Button onClick ={() => deletesale(sale._id)} color="danger"> <i className="fas fa-trash-alt"></i>&nbsp;Delete</Button>&nbsp;&nbsp;
                                	
						    </td>	


                        </tr>
                    )
                    
                    )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}