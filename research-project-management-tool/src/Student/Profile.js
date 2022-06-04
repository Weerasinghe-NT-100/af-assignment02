
import logo from "./pic/logo.jpg"
 import React from "react";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../services/Auth";

const  Profile  = () => {
    const navigate = useNavigate();

  

    const [fullname, setUserName] = useState("");
    const [Studentemail, setUserEmail] = useState("");
    const [currentUserID, setcurrentUserID] = useState("");


    const handleUserName = (e) => {
        setUserName(e.target.value);
    };


    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

  

    const StudentDetails = async () => {
        let token = localStorage.getItem('token');
        let data = await AuthUser(token);
        console.log(" User", data?.data);
        setcurrentUserID(data?.data?._id);
        setUserName(data?.data?.fullname);
        setUserEmail(data?.data?.Studentemail);
       
    }


    useEffect(() => {
        StudentDetails();
    }, [])

    

    return (
        <div>
           
    
       
            <br/>
          
         
            <br/>
            <br/>

            <div>
            <div class="card" style={{ width:"1000px" , marginLeft:"400px"}}>
  <div class="card-body">
    <h2 class="card-title"style={{ color:"green" ,marginLeft:"350px"}} >My Profile</h2>
    <img src={logo} alt="" width={"30%"} height={"30%"} style={{ marginLeft:"300px"}}  />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{ marginLeft:"50px" , color:"green" }} > Name  <input onChange={handleUserName}       class="form-control" 
        value={fullname} type="text"  readOnly={true} /></li>
    <li class="list-group-item" style={{ marginLeft:"50px" , color:"green" }}   > Email <input onChange={handleUserEmail}      class="form-control" 
        value={Studentemail} type="email" readOnly  /></li>
 
  </ul>

</div>
                <br />
                <br />
                <div  >
             
             
                 
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};


export default  Profile ;