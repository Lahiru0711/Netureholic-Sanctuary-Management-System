import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from './Header';


export default function AddSales(){

    const Navigate=useNavigate()

    const [name, setName] = useState("");
    const [contactNo1, setContactNo1] = useState("");
    const [contactNo2, setContactNo2] = useState("");
    const [adultsCount, setAdultsCount] = useState("");
    const [childrenCount, setChildrenCount] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newSale = {
            name,
            contactNo1,
            contactNo2,
            adultsCount,
            childrenCount,
            email,
            date

        }

        axios.post("http://localhost:8070/sale/add",newSale).then(()=>{
            alert("Sale Added")
            Navigate('/sale')

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
        
        <div className="container">
        <div>
            <Header/>
            </div>
        <div className="container"><h2>Pre Book Your Tickets!</h2>
            <form onSubmit={sendData}>
                <div className="row mb-3">
                    <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" placeholder="Enter your name" onChange={(e)=>{
                            setName(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputContactNo1" className="col-sm-2 col-form-label">Contact Number 01</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="inputContactNo1" placeholder="Enter your contact number" onChange={(e)=>{
                            setContactNo1(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputContactNo2" className="col-sm-2 col-form-label">Contact Number 02</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="inputContactNo2" placeholder="Enter another contact number" onChange={(e)=>{
                            setContactNo2(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputAdultsCount" className="col-sm-2 col-form-label">Adults Count</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputAdultsCount" placeholder="Enter the number of adults" onChange={(e)=>{
                            setAdultsCount(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputChildrenCount" className="col-sm-2 col-form-label">Children Count</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputChildrenCount" placeholder="Enter the number of children" onChange={(e)=>{
                            setChildrenCount(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter your email address" onChange={(e)=>{
                            setEmail(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="example" className="col-sm-2 col-form-label">Booking Date</label>
                    <div className="col-sm-10">
                        <input type="date" id="example" className="form-control" onChange={(e)=>{
                            setDate(e.target.value);
                        }} />
                    </div>
                </div>

            <button type="submit" className="btn btn-primary">Proceed</button>
            </form>
        </div>
        </div>
    )
}