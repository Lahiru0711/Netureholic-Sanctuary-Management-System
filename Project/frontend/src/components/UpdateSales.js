import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link,useLocation } from "react-router-dom";
function UpdateSales(props) {

    const [name, setName] = useState("");
    const [contactNo1, setContactNo1] = useState("");
    const [contactNo2, setContactNo2] = useState("");
    const [adultsCount, setAdultsCount] = useState("");
    const [childrenCount, setChildrenCount] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");


    const location=useLocation();


    const updateSale = {
        name,
        contactNo1,
        contactNo2,
        adultsCount,
        childrenCount,
        email,
        date
    }
    
    

    useEffect(() => {

        console.log(location.state.sid);

        axios.get(`http://localhost:8070/sale/get/${location.state.sid}`)
        .then((res)=> {
            
            console.log(res.data.sale.name)
            setName(res.data.sale.name)
            setContactNo1(res.data.sale.contactNo1)
            setContactNo2(res.data.sale.contactNo2)
            setAdultsCount(res.data.sale.adultsCount)
            setChildrenCount(res.data.sale.childrenCount)
            setEmail(res.data.sale.email)
            setDate(res.data.sale.date)
            
            
        })
        .catch((err)=> {
            alert(err)
        })
        console.log(name)
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8070/sale/UpdateSale/${location.state.sid}`, updateSale)
        .then(()=> {
            alert("Sale Updated")
        
        }).catch((err)=> {
            alert(err)
        })
    } 

    return(
       
        <div className = "container">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
                <h2 class="heading-section">Sale Details</h2>
            </div>
        </div>   
            

                <form onSubmit={updateData}>
                    <div className="form-group">
                        <label for="name"><b>Name</b></label>
                        <input type="text" className="form-control" id="name" 
                        value = {name}
                        onChange= {(e) =>{
                        setName(e.target.value);
                        }}
                        />
                    </div>

                    <div className="form-group">
                        <label for="contactNo1"><b>Contact Number 01</b></label>
                        <input type="tel" className="form-control" id="contactNo1" 
                        value = {contactNo1}
                        onChange= {(e) =>{
                        setContactNo1(e.target.value);
                        }}
                        />
                    </div>

                    <div className="form-group">
                        <label for="contactNo2"><b>Contact Number 02</b></label>
                        <input type="tel" className="form-control" id="contactNo2" 
                        value = {contactNo2}
                        onChange= {(e) =>{
                        setContactNo2(e.target.value);
                        }}
                        />
                    </div>    

                    <div className="form-group">
                        <label for="adultsCount"><b>Adults Count</b></label>
                        <input type="number" className="form-control" id="adultsCount" 
                        value = {adultsCount}
                        onChange= {(e) =>{
                        setAdultsCount(e.target.value);
                        }}
                        />
                    </div>    

                    <div className="form-group">
                        <label for="childrenCount"><b>Children Count</b></label>
                        <input type="number" className="form-control" id="childrenCount" 
                        value = {childrenCount}
                        onChange= {(e) =>{
                        setChildrenCount(e.target.value);
                        }}
                        />
                    </div>    

                    <div className="form-group">
                        <label for="email"><b>Email</b></label>
                        <input type="email" className="form-control" id="email" 
                        value = {email}
                        onChange= {(e) =>{
                        setEmail(e.target.value);
                        }}
                        />
                    </div> 

                    <div className="form-group">
                        <label for="date"><b>Booking Date</b></label>
                        <input type="date" className="form-control" id="date" 
                        value = {date}
                        onChange= {(e) =>{
                        setDate(e.target.value);
                        }}
                        />
                    </div>       

                

                    <div class="form-submit">            
                    <button type="submit" className="btn btn-primary">Update Sale</button>
                    <Link to="/sale" className="btn btn-danger ml-2">Cancel</Link>
                    </div>

                </form>
        
        </div>
            
    )
}

export default UpdateSales;