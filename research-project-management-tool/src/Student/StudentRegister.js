import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterStudent} from '../services/Auth';
import Swal from "sweetalert2";


const StudentRegister = () => {

  const navigate = useNavigate();

  const [fullname, setfullname] = useState('');
  const [Studentemail, setStudentemail] = useState('');
  const [password, setPassword] = useState('');
 
 

  const handleNamefull = (e) => {
    setfullname(e.target.value);
  };
 

  const handleEmail = (e) => {
    setStudentemail(e.target.value);
  };
 


  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullname === '' || Studentemail === '' || password === '') {

      {   Swal.fire('error' , 'Fill The All student details' , 'error')
      navigate("/register");
        }
    } else {
        let newdata = {

            fullname:fullname,
            Studentemail:Studentemail,
            password:password,
        }
        let student =  await RegisterStudent(newdata);
        console.log("return data",student);
        localStorage.setItem("token",student.data.token);
        localStorage.setItem("Role",student.data.Role);

        {   Swal.fire('Congrats' , 'Successfully create Your Student Account ' , 'success')
        navigate("/HomeStudent");
          }
    }
  };
 


  return ( 
    <div className="container"  style={{ marginLeft:"px" , marginTop:"100px"}}>
           

           <Typography variant="body2" color="textSecondary" gutterBottom>
               <br></br><br></br>
        <h2>Student Register</h2>
      </Typography >
      <form >
        <Grid container spacing={2} >
          <Grid item xs={6}>
            <TextField
               variant="standard"
               required
              fullWidth={true}
               id="name"
               label="Student Name"
               name="fullname"
               type="text"
              value={fullname}
              InputLabelProps={{
                shrink: fullname ? true : false,
              }}
              onChange={handleNamefull}
            />
          </Grid>
        
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth={true}
              id="email"
              label="Student Email"
              name="Studentemail"
              type="email"
              value={Studentemail}
              InputLabelProps={{ shrink: Studentemail ? true : false }}
              onChange={handleEmail}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              type="password"
              fullWidth={true}
              value={password}
              InputLabelProps={{ shrink: password ? true : false }}
              id="password"
              label="password"
              name="password"
              onChange={handlePassword}
            />
          </Grid>

       
          <Grid item xs={12}>
            <Button variant="contained" type="submit" onClick={handleSubmit} color="primary" >
              Register As a Student 
            </Button>
          </Grid>
        </Grid>
      </form>



          </div>
  )
};

export default StudentRegister;