 
import axios from "axios";
  

import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GroupRegister = () => {

    const navigate = useNavigate();
  const [LeaderItnumber, setLeaderItnumber] = useState("");
  const [Leaderemail, setLeaderemail] = useState();
  const [GroupMemberITnumbers, setGroupMemberITnumbers] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
 

  const changeOnClick = (f) => {
    

    const CREATEgroup = {

        LeaderItnumber,
        Leaderemail,
        GroupMemberITnumbers,
        phoneNumber,
     
    };

    axios.post("http://localhost:8080/groups/createStudentGroup/", CREATEgroup);

    Swal.fire("Congrats", "Group Register  success", "success")

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
                          
                                   <div className=""> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                       
                               <div className="card2 card border-0 px-4 py-5">
                               <form onSubmit={changeOnClick} encType="" >
    <h1>Register Your  Group</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>

    <input type="text" class="form-control"  onChange={(f) => setLeaderItnumber(f.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter it number"/>
    <small id="" class="form-text text-muted">type your leader it number</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">group leader email</label>
    <input type="email"   onChange={(f) => setLeaderemail(f.target.value)} class="form-control" id="exampleInputPassword1" placeholder="email" aria-describedby="emailHelp"/>
  </div>
  

  <div class="form-group">
    <label for="exampleInputPassword1">GroupMember IT numbers</label>
    <textarea type="textarea"   onChange={(f) => setGroupMemberITnumbers(f.target.value)} class="form-control" id="" placeholder="Group Member ITnumbers" aria-describedby="" />
  </div>
  


  <div class="form-group">
    <label for="exampleInputPassword1">phone Number</label>
    <input type="textarea"   onChange={(f) => setphoneNumber(f.target.value)} class="form-control" id="" placeholder="phone Number" aria-describedby="" />
  </div>
  


  <button type="submit" class="btn btn-primary">Submit</button>
 
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

export default GroupRegister;