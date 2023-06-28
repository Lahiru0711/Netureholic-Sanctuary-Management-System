import React,{useState} from "react"
import axios from "axios";
//import images from '.components/images/tiger.jpg';
export default function AddArticle(){

  const [AID, setAID] = useState("");
  const [category, setcategory] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  const [EID, setEID] = useState("");
  const [stars,setstars] = useState("");

  function sendData(e){
     e.preventDefault();

    const newArticle ={
     AID,
     category,
     name,
     description,
     status,
     EID,
     stars
     
     

    }

axios.post("http://localhost:8070/article/add",newArticle).then(()=>{
    alert("Article Added")

 

    }).catch((err)=>{
      alert(err)
    })

  }

    return(

 <div className="container">

   
   <h1 style={{textAlign: "center",margin: "20px", color: "white", background:"black",width:"650px"}}>Create Articles</h1>  
    <form onSubmit={sendData}>
        <div className="form-group">

          <label for="aid">Article ID</label>
          <input type="text" className="form-control" id="aid" placeholder="Enter Article ID"
           onChange={(e)=>{
             setAID(e.target.value);
           }}required/>

        </div>

        <div className="form-group">

          <label for="category">Article Category</label>
          <select class="form-control" id="category" onChange={(e)=>{setcategory(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Category </option>
                <option value="Rules"> Rules to get aware about </option>
                <option value="Sanctuary"> About Sanctuary </option>
                <option value="Animals"> About Animals </option>
            </select>

        </div>

        <div className="form-group">

          <label for="name">Article Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Article Name"
             onChange={(e)=>{
              setname(e.target.value);
            }}required/>

        </div>

        <div className="form-group">

          <label for="description">Article Description</label>
          <input type="text" className="form-control" id="description" placeholder="Enter Article Description"
             onChange={(e)=>{
              setdescription(e.target.value);
            }}required/>

        </div>

        <div className="form-group">

          <label for="status">Article Status</label>
          <select class="form-control" id="status" onChange={(e)=>{setstatus(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Status </option>
                <option value="Active"> Active </option>
                <option value="Expired"> Expired </option>
               
            </select>
        </div>






        <button type="submit"class = "btn" style={{textAlign: "center",margin: "80px", color: "white", background:"darkorange"}}>Submit</button>
      </form>
   </div>
    )
}