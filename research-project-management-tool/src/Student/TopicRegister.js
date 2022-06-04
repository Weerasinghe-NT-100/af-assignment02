
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const TopicRegister = () => {

    const navigate = useNavigate();
  const [LeaderItnumber, setLeaderItnumber] = useState("");
  const [Leaderemail, setLeaderemail] = useState();
  const [GroupMemberITnumbers, setGroupMemberITnumbers] = useState("");
  const [Topic, setTopic] = useState("");
  const [TopicFeild, setTopicFeild] = useState("");


  const changeOnClick = (f) => {
    

    const CREATETopic = {

        LeaderItnumber,
        Leaderemail,
        GroupMemberITnumbers,
        Topic,
        TopicFeild,
     
    };

    axios.post("http://localhost:8080/topic/createTopic/", CREATETopic);

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
    <label for="exampleInputEmail1">it number  </label>

    <input type="text" class="form-control"  onChange={(f) => setLeaderItnumber(f.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter it number"/>
    <small id="" class="form-text text-muted">type your leader it number</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">group leader email</label>
    <input type="text"   onChange={(f) => setLeaderemail(f.target.value)} class="form-control" id="exampleInputPassword1" placeholder="email" aria-describedby="emailHelp"/>
  </div>
  

  <div class="form-group">
    <label for="exampleInputPassword1">Group Member ITnumbers</label>
    <textarea type="textarea"   onChange={(f) => setGroupMemberITnumbers(f.target.value)} class="form-control" id="exampleInputPassword1" placeholder="it numbers groups" aria-describedby="emailHelp"/>
  </div>
  


  <div class="form-group">
    <label for="exampleInputPassword1">Topic</label>
    <input type="text"   onChange={(f) => setTopic(f.target.value)} class="form-control" id="" placeholder="TOpic name" aria-describedby="" />
  </div>
  

  
  <div class="form-group">
    <label for="exampleInputPassword1">Topic Feild</label>
    <input type="textarea"   onChange={(f) => setTopicFeild(f.target.value)} class="form-control" id="" placeholder="Topic Feild" aria-describedby="" />
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

export default TopicRegister;