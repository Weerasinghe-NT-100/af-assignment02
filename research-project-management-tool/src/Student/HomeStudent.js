import React from 'react'
import { Link } from "react-router-dom";
 const HomeStudent = () => {

  const navigate = useNavigate();
    const handleSubmit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/");
    }
  return (



    <div className="">
<br></br>



<div class="card text-center">
  <div class="card-header">
  <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
                    Logout
                </button>
   <h1>Student home page </h1> 
  </div>
 
  <div class="card-body">
    <h5 class="card-title">Register your group</h5>
 
    <Link to ="/GroupRegister">
     <button  type="button"  className="btn btn-danger"  >Register group </button>
                                    </Link>
  </div>
  <div class="card-footer text-muted">

  </div>
</div>


<br></br><br>
</br>
<div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Register your group</h5>
 
    <Link to ="/TopicRegister">
     <button  type="button"  className="btn btn-danger"  >Topic group </button>
                                    </Link>
  </div>
  <div class="card-footer text-muted">

  </div>
</div>

<br></br><br>
</br>
<div class="card text-center">

  <div class="card-body">
    <h5 class="card-title">View Your profile</h5>
 
    <Link to ="/Profile">
     <button  type="button"  className="btn btn-danger"  > Profile </button>
                                    </Link>
  </div>
  <div class="card-footer text-muted">

  </div>
</div>

<br></br><br>
</br>
<div class="card text-center">

  <div class="card-body">
    <h5 class="card-title">chat with your group  </h5>
 
    <Link to ="/ChatWithGroup">
     <button  type="button"  className="btn btn-danger"  > chat </button>
                                    </Link>
  </div>
  <div class="card-footer text-muted">

  </div>
</div>

<br></br><br>
</br>
<div class="card text-center">

  <div class="card-body">
    <h5 class="card-title">upload your assigment </h5>
 
    <Link to ="/FileUpload">
     <button  type="button"  className="btn btn-danger"  > FileUpload </button>
                                    </Link>
                                  
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <Link to ="/ViewAllUploadPdf">
     <button  type="button"  className="btn btn-danger"  > download file  </button>
                                    </Link>

  </div>
  <div class="card-footer text-muted">

  </div>
</div>




    </div>
  )
}

export default HomeStudent;
