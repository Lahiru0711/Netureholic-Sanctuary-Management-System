import React, {useState, useEffect} from "react";
import axios from "axios";
import './Background.css';
import { Link } from "react-router-dom";
function UpdateBungalow(props) {

    const [Booking_ID, setBooking_ID] = useState("");
    const [Bungalow_ID, setBungalow_ID] = useState("");
    const [VID, setVID] = useState("");
    const [V_name, setV_name] = useState("");
    const [V_contact, setV_contact] = useState("");
    
    const updateBungalow = {
        Booking_ID, Bungalow_ID, VID, V_name, V_contact
    }

    

    useEffect(() => {
        axios.get(`http://localhost:8092/Bungalow/get/${props.match.params.id}`)
        .then((res)=> {
            
            
            setBooking_ID(res.data.Bungalow.Booking_ID)
            setBungalow_ID(res.data.Bungalow.Bungalow_ID)
            setVID(res.data.Bungalow.VID)
            setV_name(res.data.Bungalow.V_name)
            setV_contact(res.data.Bungalow.V_contact)
          
        })
        .catch((err)=> {
            alert(err)
        })
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8092/Bungalow/update/${props.match.params.id}`, updateBungalow)
        .then(()=> {
            alert("Bungalow Booking updated")
        
        }).catch((err)=> {
            alert(err)
        })
       
    } 

    return(
        <div className="backgroundImage">
            <div className = "container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Bungalow Profile</h2>
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
                    <label for="Bungalow_ID"><b>Bungalow ID</b></label>
                    <input type="text" className="form-control" id="Bungalow_ID" 
                    value = {Bungalow_ID}
                    onChange= {(e) =>{
                        setBungalow_ID(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="VID"><b>VID</b></label>
                    <input type="text" className="form-control" id="VID" 
                     value = {VID}
                     onChange= {(e) =>{
                        setVID(e.target.value);
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

export default UpdateBungalow;