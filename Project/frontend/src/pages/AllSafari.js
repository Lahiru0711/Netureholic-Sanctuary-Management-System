import React, {useState , useEffect} from "react";
import axios from "axios";
import '../CSS/AddSafari.css';
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import './Background.css';
import {Button} from "reactstrap";
import { Headingsuf } from "./Headingsuf";
import SearchSafari from "./SearchSafari";


function AllSafari() {

	const [safaris, setSafaris] = useState([]);
	

//delete member by ID
const deletesafari = id => {
	axios.delete(`http://localhost:8092/Safari/delete/${id}`)
	.then(res => alert(res.data))
	setSafaris(safaris.filter(elem => elem._id !== id))
}


useEffect(()=>{
        function getSafaris() {
            axios.get("http://localhost:8092/Safari/").then((res)=> {
            console.log(res)     
            setSafaris(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }
        getSafaris();
    }, [setSafaris])

  console.log("check",setSafaris);



  function updateSearchTerms (newSearchTerm){
	function getSearchedSubjects(){
		axios.get(`http://localhost:8092/Safari/displays/${newSearchTerm}`).then((res)=>{
			setSafaris(res.data);

		}).catch((err)=>{
		   console.log()
		})
	}
	function getSafaris(){
		axios.get("http://localhost:8092/Safari/").then((res)=>{
		   setSafaris(res.data);

		}).catch((err)=>{
			console.log(err.message)
			alert(err.message)
		})
	}

	if (newSearchTerm != ''){
		getSearchedSubjects();
	}
	else{
	   getSafaris();
	}
	
	
}


  


    return(
		<div className="backgroundImage">
		<><><>
			<Headingsuf/>
		</>
		</>
		
		<div>
			<div className="container">
				<SearchSafari refreshFunction={updateSearchTerms}/>
				<table className="table">
						<thead>
							<tr>
								<th scope="col">Booking ID</th>
								<th scope="col">Vehicle No</th>
								<th scope="col">Guide Name</th>
								<th scope="col">Visitor NIC</th>
								<th scope="col">Visitor Name</th>
								<th scope="col">Visitor Contact</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
								{safaris.map(safaris => <tr>
								<td>{safaris.Booking_ID}</td>
								<td>{safaris.Vehicle_No}</td>
								<td>{safaris.Guide_name}</td>
								<td>{safaris.V_NIC}</td>
								<td>{safaris.V_name}</td>
								<td>{safaris.V_contact}</td>
								<td>
								
										<Link color="warning" className="btn btn-warning mr-1" to={`Safari/update/${safaris._id}`}> <i className="fas fa-edit"></i>&nbsp;Update</Link>&nbsp;&nbsp;
										<Button onClick ={() => deletesafari(safaris._id)} color="danger"> <i className="fas fa-trash-alt"></i>&nbsp;Delete</Button>&nbsp;&nbsp;
										<Link color="green" className="btn btn-success" to={`/SafariTotal`}>Genarate Report</Link>
									
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
export default AllSafari;