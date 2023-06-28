import React, {useState} from "react";
import axios from "axios";
import '../CSS/AddSafari.css';
import './Background.css';
import { Link } from "react-router-dom";

function AddSafari() {

    const [Booking_ID, setBooking_ID] = useState("");
    const [Vehicle_No, setVehicle_No] = useState("");
    const [Guide_name, setGuide_name] = useState("");
    const [V_NIC, setV_NIC] = useState("");
    const [V_name, setV_name] = useState("");
    const [V_contact, setV_contact] = useState("");
    
    function sendData(e){
        e.preventDefault();
        
        const newSafari = {
            Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact
        }

        axios.post("http://localhost:8092/Safari/add", newSafari)
        .then(()=> {
            alert("Safari Booking added")
        
        }).catch((err)=> {
            alert(err)
        })
    }

    return(
        <div className="backgroundImage">
        <div className = "container">
            <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h1 class="heading-section">Add Safari Booking</h1>
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
                    <label for="Vehicle_No"><b>Vehicle_No</b></label>
                    <input type="text" className="form-control" id="Vehicle_No" placeholder="Enter Vehicle No" 
                    onChange= {(e) =>{
                        setVehicle_No(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="Guide_name"><b>Guide Name</b></label>
                    <input type="text" className="form-control" id="Guide_name" placeholder="Enter Guide Name" pattern="[a-z A-Z.]+" required maxlength="10"
                    onChange= {(e) =>{
                        setGuide_name(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="V_NIC"><b>Visitor NIC</b></label>
                    <input type="text" className="form-control" id="V_NIC" placeholder="Enter Visitor NIC" required maxlength="12"
                    onChange= {(e) =>{
                        setV_NIC(e.target.value);
                    }} />
                </div>  

                <div className="form-group">
                    <label for="V_name"><b>Visitor Name</b></label>
                    <input type="text" className="form-control" id="V_name" placeholder="Enter Visitor Name" pattern="[a-z A-Z.]+" required maxlength="10"
                    onChange= {(e) =>{
                        setV_name(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="V_contact"><b>Visitor Contact</b></label>
                    <input type="text" className="form-control" id="V_contact" placeholder="Enter Visitor Contact" required maxlength="10"
                    onChange= {(e) =>{
                        setV_contact(e.target.value);
                    }} />
                </div>    

                
    
                <div class="form-submit">
                <button type="submit" className="btn btn-primary" >Submit</button>&nbsp;&nbsp;&nbsp;
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/Safari" className="btn btn-success">View Safari Booking</Link>
                </div>

            </form>
        </div>
    </div>
     )
}

export default AddSafari;