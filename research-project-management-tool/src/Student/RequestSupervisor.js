  

 
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const RequestSupervisor = () => {

    const navigate = useNavigate();
  const [Grp_ID, setGrp_ID] = useState("");
  const [Grp_leaderItNUMBER, setGrp_leaderItNUMBER] = useState();
  const [Grp_leaderemail, setGrp_leaderemail] = useState("");
  const [supervisor, setsupervisor] = useState("");
 


  const changeOnClick = (f) => {
    

    const createSupervisorRequest = {

        Grp_ID,
        Grp_leaderItNUMBER,
        Grp_leaderemail,
        supervisor,
    
     
    };





    axios.post("http://localhost:8080/supervisor/createSupervisorRequest/", createSupervisorRequest);

    Swal.fire("Congrats", "Your Group topic has been apply successfully  success", "success")

    navigate("/HomeStudent"); 

  
  };
  return (

    <div>
			  
		<br/>
   
<div className="container">
                   <div className="">
                     <br></br>
               
                       <div className="">
                           <div className="">
                               <div className="">
                          
                           
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                       
                               <div className="card2 card border-0 px-4 py-5">
                               <form onSubmit={changeOnClick} encType="" >
    <h1>Registration Topic</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Grp ID</label>

    <input type="text" class="form-control"  onChange={(f) => setGrp_ID(f.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter group id "/>
    <small id="" class="form-text text-muted">type your group id </small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">group leader itnumber</label>
    <input type="text"   onChange={(f) => setGrp_leaderItNUMBER(f.target.value)} class="form-control" id="exampleInputPassword1" placeholder="itnumber group leader" aria-describedby="emailHelp"/>
  </div>
  

  <div class="form-group">
    <label for="exampleInputPassword1">Group leader email</label>
    <textarea type="email"   onChange={(f) => setGrp_leaderemail(f.target.value)} class="form-control" id="exampleInputPassword1" placeholder="gruop leader  email" aria-describedby="emailHelp"/>
  </div>
  


  <div class="form-group">
    <label for="exampleInputPassword1">supervisor name </label>

    <select
            class="form-control"
            id="floatingInput"
            onChange={(f) => setsupervisor(f.target.value)}
          >
            <option value=""></option>
            <option value="miss rashini">miss rashini </option>
            <option value="miss dilini">miss dilini</option>
            <option value="mr  kaveesha">mr kaveesha</option>
         

          </select>
  </div>
  


  


  <button type="submit" class="btn btn-primary">request</button>
 
</form>
                                   <div>
                                     
                               
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                     
               
                   </div>
               </div>
               


    </div>
  );
};

export default RequestSupervisor;