import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginStudent } from "../services/Auth";
import Swal from "sweetalert2";
const Login = () => {

	const navigate = useNavigate();


   



	const [formData, setFormData] = useState({
		Studentemail: "",
		password: "",
	});

	const { Studentemail, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginStudent(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("Role",data.data.Role);

			{   Swal.fire('Congrats' , 'Successfully login  ' , 'success')
			navigate("/HomeStudent");
			  }

        }
        else
        {
			   Swal.fire('error' , 'error login Your Account ' , 'error')
			
			  
        }
	}; 


	return (
		<div>
	
		<div className="container">
<div className="container mt-5">
              <div className="card card0 border-0">
                  <div className="row d-flex">
                      <div className="col-lg-6">
                          <div className="card1 pb-5">
                     
                              <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                      <form className="form" onSubmit={(e) => onSubmit(e)}>
                              <div className="card2 card border-0 px-4 py-5">
                              <h1> SIGN IN As STUDENT</h1>
                              <br></br>
                              <div class="form-floating mb-3">
                                      <input class="form-control"    fullWidth={true} type="email" placeholder="email " 	name="Studentemail" 	minLength="7" value={Studentemail} onChange={(e) => onChange(e)} required />
                                      <label for="floatingPassword">Password</label>
                                  </div>


                                  <div class="form-floating mb-3">
                                      <input class="form-control"     fullWidth={true} type="password" placeholder="Password" 	name="password" 	minLength="7" value={password} onChange={(e) => onChange(e)} required />
                                      <label for="floatingPassword">Password</label>
                                  </div>

                             
                                  <div className="row mb-3 px-3">
                                      <button type="submit"   fullWidth={true}  className="btn btn-blue text-center">Login As Student</button>
                                  </div>
                                  <div>
                                
                                <b><small>you dont have account? <a href="/register" className="text-danger "><b>Register As Students</b></a></small></b>
                                
                            </div>
                              </div>
                          </form>
                       
                      </div>
                  </div>
              </div>
          </div>
</div>

</div>
	
	);
};

export default Login;