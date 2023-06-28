import React,{useState} from "react"
import axios from "axios";

export default function AddPromotion(){

  const [PID, setPID] = useState("");
  const [P_description, setPdescription] = useState("");
  const [P_name, setPname] = useState("");
  const [P_duration, setPduration] = useState("");
  const [P_status, setPstatus] = useState("");
  

  function sendData(e){
     e.preventDefault();

    const newPromotion ={
        PID,
        P_description,
        P_name,
        P_duration,   
        P_status
     }

axios.post("http://localhost:8070/promotion/add",newPromotion).then(()=>{
    alert("promotion Added")

 

    }).catch((err)=>{
      alert(err)
    })

  }

    return(

 <div className="container">

   
   <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black",width:"650px"}}>Create Promotions</h1>  
    <form onSubmit={sendData}>
        <div className="form-group">

          <label for="pid">Promotion ID</label>
          <input type="text" className="form-control" id="pid" placeholder="Enter Promotion ID"
           onChange={(e)=>{
             setPID(e.target.value);
           }}required/>

        </div>

        
        <div className="form-group">

          <label for="pdescription">Promotion Description</label>
          <input type="text" className="form-control" id="pdescription" placeholder="Enter Promotion Description"
             onChange={(e)=>{
              setPdescription(e.target.value);
            }}required/>

        </div>

        <div className="form-group">

            <label for="pname">Promotion Name</label>
            <input type="text" className="form-control" id="pname" placeholder="Enter Promotion Name"
                 onChange={(e)=>{
                  setPname(e.target.value);
            }}required/>

        </div>


             <div className="form-group">

          <label for="pduration">Promotion Duration</label>
          <input type="text" className="form-control" id="pduration" placeholder="Enter Promotion Duration"
             onChange={(e)=>{
              setPduration(e.target.value);
            }}required/>

        </div>


        <div className="form-group">

          <label for="pstatus">Promotion Status</label>
          <select class="form-control" id="pstatus" onChange={(e)=>{setPstatus(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Status </option>
                <option value="Active"> Active </option>
                <option value="Expired"> Expired </option>
               
            </select>
        </div>



         
        <button type="submit" class = "btn" style={{textAlign: "center",margin: "80px", color: "white", background:"darkorange"}}>Submit</button>
      
      </form>
   </div>
    )
}