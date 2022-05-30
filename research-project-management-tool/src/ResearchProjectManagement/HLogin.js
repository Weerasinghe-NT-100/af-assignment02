import React,{useState} from 'react';
import './HLogin.css';
import axios from 'axios';
import {useHistory,Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import researchTool6 from "../ResearchTools/researchTool6.jpg";

function HLogin({setLoginStaff}) {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();
    
      function login (e) {
  
          e.preventDefault();
          const staffMember={email,password};
          axios.post("http://localhost:8071/staffRegister/login",staffMember).then(res=>{
          alert("Login succes");
          setLoginStaff(res.data.user);

          if(res.status===200){
            history.push(`/ViewStaff/${email}`);
            return <Redirect to={`/ViewStaff/${email}`} /> 
           }

        }).catch((err)=>{
          alert(err.message);
        })
        
  }

return (
 <>
<div className="base-container">
    
    <div className="containerblock4">
    <div className="header">LOGIN</div>    
    <div className="image">
        <img src={researchTool6} />
    </div>    
    <form onSubmit={login}>    
    
    <div className="content">
    
    <div className="form">
        <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="lefcontent">fogotton password?</div>
    </div>
   </div> 
   <div className="footer">
       <button type="submit" className="btnn">
           Login
       </button>
   </div>
   </form>
  </div>

  <div className="lines"></div>

</div>
 </>
    );
  }


export default HLogin;