
 
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const  RegisterStudentGroups = () => {

  const navigate = useNavigate();

    const[LeaderItnumber,setLeaderItnumber] = useState("");
    const[Leaderemail,setLeaderemail] = useState("");
    const[GroupMemberITnumbers,setGroupMemberITnumbers] = useState("");
    const[phoneNumber,setphoneNumber] = useState("");

    const changeOnClick = f =>{
      //f.preventDefault();
  
      const adDGroup={

        LeaderItnumber,
        Leaderemail,
        GroupMemberITnumbers,
        phoneNumber,
      };
  axios.post("http://localhost:8080/groups/createStudentGroup",adDGroup)

  {   Swal.fire('Congrats' , 'successfully REGISTER GROUP ' , 'success')

  navigate("/studentmainpage");
}

    
    };
  return (
    <div className="col-lg-6">
    <div className="card2 card border-0 px-4 py-5">
    <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <h1>Create marking scheme</h1>
    <label for="exampleFormControlInput1"> Leader Itnumber</label>
    <input type="text" 
    onChange={f=>setLeaderItnumber(f.target.value)}
    class="form-control"  
    placeholder="Enter Assiginment Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Leader email</label>
    <input type="text" 
    onChange={f=>setLeaderemail(f.target.value)}
    class="form-control"  
    placeholder="Full Marks"/>
  </div>
  
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Group Member ITnumbers</label>
    <textarea class="form-control"  
    onChange={f=>setGroupMemberITnumbers(f.target.value)}
    rows="3">
    </textarea>

  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">phone Number</label>
    <textarea 
    class="form-control"
    onChange={f=>setphoneNumber(f.target.value)}
    id="exampleFormControlTextarea1" rows="3">
    </textarea>




  </div>
  <button type="submit" className="btn btn-primary">Add </button>
</form>
</div>
</div>


  )
}

export default  RegisterStudentGroups ; 


