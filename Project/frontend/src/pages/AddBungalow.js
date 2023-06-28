import React, {useState} from "react";
import axios from "axios";
import '../CSS/AddBungalow.css';
import './Background.css';
import { Link } from "react-router-dom";

function AddBungalow() {

    const [Booking_ID, setBooking_ID] = useState("");
    const [Bungalow_ID, setBungalow_ID] = useState("");
    const [VID, setVID] = useState("");
    const [V_name, setV_name] = useState("");
    const [V_contact, setV_contact] = useState("");
    
    function sendData(e){
        e.preventDefault();
        
        const newBungalow = {
            Booking_ID, Bungalow_ID, VID, V_name, V_contact
        }

        axios.post("http://localhost:8092/Bungalow/add", newBungalow)
        .then(()=> {
            alert("Bungalow Booking added")
        
        }).catch((err)=> {
            alert(err)
        })
    }

    return(
        <div className="backgroundImage">
        <div className = "container">
            <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Add Bungalow Booking</h2>
				</div>
			</div>
            <form onSubmit = {sendData}>
                <div className="form-group">
                    <label for="Booking_ID"><b>Booking ID</b></label>
                    <input type="text" className="form-control" id="Booking_ID" placeholder="Enter Booking ID" 
                    onChange= {(e) =>{
                        setBooking_ID(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="Bungalow_ID"><b>Bungalow ID</b></label>
                    <input type="text" className="form-control" id="Bungalow_ID" placeholder="Enter Bungalow ID"
                    onChange= {(e) =>{
                        setBungalow_ID(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="VID"><b>VID</b></label>
                    <input type="VID" className="form-control" id="VID" placeholder="Enter Visitor ID"
                    onChange= {(e) =>{
                        setVID(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="V_name"><b>Visitor Name</b></label>
                    <input type="text" className="form-control" id="V_name" placeholder="Enter V_name" pattern="[a-z A-Z.]+" required maxlength="10"
                    onChange= {(e) =>{
                        setV_name(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="V_contact"><b>Visitor Contact</b></label>
                    <input type="text" className="form-control" id="V_contact" placeholder="Enter Visitor Contact" 
                    onChange= {(e) =>{
                        setV_contact(e.target.value);
                    }} />
                </div>    

                
    
                <div class="form-submit">
                <button type="submit" className="btn btn-primary" >Submit</button>&nbsp;&nbsp;&nbsp;
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/bun" className="btn btn-success">View Bungalow Booking</Link>
                </div>

            </form>
        </div>
    </div>
     )
}

export default AddBungalow;