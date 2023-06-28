import React, {useState , useEffect} from "react";
import axios from "axios";
import '../CSS/AddBungalow.css';
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import './Background.css';
import {Button} from "reactstrap";


function AllBungalow() {

	const [bungalows, setBungalows] = useState([]);

//delete member by ID
const deletebungalow = id => {
	axios.delete(`http://localhost:8092/Bungalow/delete/${id}`)
	.then(res => alert(res.data))
	setBungalows(bungalows.filter(elem => elem._id !== id))
}


useEffect(()=>{
        function getBungalows() {
            axios.get("http://localhost:8092/Bungalow/").then((res)=> {
            console.log(res)     
            setBungalows(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }
        getBungalows();
    }, [setBungalows])

  console.log("check",setBungalows);


  
  


    return(
		<div className="backgroundImage">
		<><><>
			<Heading />
		</>
		</>
		
		<div>
			<div className="container">
				<table className="table">
						<thead>
							<tr>
								<th scope="col">Booking ID</th>
								<th scope="col">Bungalow ID</th>
								<th scope="col">Visitor ID</th>
								<th scope="col">Visitor Name</th>
								<th scope="col">Visitor Contact</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
								{bungalows.map(bungalows => <tr>
								<td>{bungalows.Booking_ID}</td>
								<td>{bungalows.Bungalow_ID}</td>
								<td>{bungalows.VID}</td>
								<td>{bungalows.V_name}</td>
								<td>{bungalows.V_contact}</td>
								<td>
								
										<Link color="warning" className="btn btn-warning mr-1" to={`update/${bungalows._id}`}> <i className="fas fa-edit"></i>&nbsp;Update</Link>&nbsp;&nbsp;
										<Button onClick ={() => deletebungalow(bungalows._id)} color="danger"> <i className="fas fa-trash-alt"></i>&nbsp;Delete</Button>&nbsp;&nbsp;
										
									
								</td>		
							</tr>
							)}
						</tbody>
					</table>
			</div>
 
	</div>
				
				</>
</div>        

		
		)
	}
export default AllBungalow;