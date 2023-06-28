import React, {useState, useEffect} from "react";
import axios from "axios";
import './Background.css';
import { Link } from "react-router-dom";
function UpdateSafari(props) {


    const [Booking_ID, setBooking_ID] = useState("");
    const [Vehicle_No, setVehicle_No] = useState("");
    const [Guide_name, setGuide_name] = useState("");
    const [V_NIC, setV_NIC] = useState("");
    const [V_name, setV_name] = useState("");
    const [V_contact, setV_contact] = useState("");
    
    const UpdateSafari = {
        Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact
    }

    

    useEffect(() => {
        axios.get(`http://localhost:8092/Safari/get/${props.match.params.id}`)
        .then((res)=> {


            console.log(res.data.Safari.Booking_ID)
            setBooking_ID(res.data.Safari.Booking_ID)
            setVehicle_No(res.data.Safari.Vehicle_No)
            setGuide_name(res.data.Safari.Guide_name)
            setV_NIC(res.data.Safari.V_NIC)
            setV_name(res.data.Safari.V_name)
            setV_contact(res.data.Safari.V_contact)
          
        })
        .catch((err)=> {
            alert(err)
        })
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8092/Safari/update/${props.match.params.id}`, UpdateSafari)
        .then(()=> {
            alert("Safari Booking updated")
        
        }).catch((err)=> {
            alert(err)
        })
       
    } 

    return(
        <div className="backgroundImage">
            <div className = "container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Safari Booking Profile</h2>
                </div>
            </div>

           <form onSubmit={updateData}>
                <div className="form-group">
                    <label for="Booking_ID"><b>Booking ID</b></label>
                    <input type="text" className="form-control" id="Booking_ID" 
                    value = {Booking_ID}
                    onChange= {(e) =>{
                        setBooking_ID(e.target.value);
                    }}
                     />
                </div>

                <div className="form-group">
                    <label for="Vehicle_No"><b>Vehicle No</b></label>
                    <input type="text" className="form-control" id="Vehicle_No" 
                    value = {Vehicle_No}
                    onChange= {(e) =>{
                        setVehicle_No(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="Guide_name"><b>Guide Name</b></label>
                    <input type="text" className="form-control" id="Guide_name" 
                    value = {Guide_name}
                    onChange= {(e) =>{
                        setGuide_name(e.target.value);
                    }}
                    />
                </div>


                <div className="form-group">
                    <label for="V_NIC"><b>Visitor NIC</b></label>
                    <input type="text" className="form-control" id="V_NIC" 
                     value = {V_NIC}
                     onChange= {(e) =>{
                        setV_NIC(e.target.value);
                    }}
                    />
                </div>    

                <div className="form-group">
                    <label for="V_name"><b>Visitor Name</b></label>
                    <input type="text" className="form-control" id="V_name" 
                      value = {V_name}
                      onChange= {(e) =>{
                        setV_name(e.target.value);
                    }}
                     />
                </div>    

              

                <div className="form-group">
                    <label for="V_contact"><b>Visitor contact</b></label>
                    <input type="text" className="form-control" id="V_contact" 
                      value = {V_contact}
                      onChange= {(e) =>{
                        setV_contact(e.target.value);
                    }}
                     />
                </div>       



            <div class="form-submit">            
            <button type="submit" className="btn btn-primary">Update Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </div>

         </form>
        </div>
    </div>
     )
}

export default UpdateSafari;