import axios from 'axios';


let Register = "http://localhost:8080/student/signup";
let LoginStudents = "http://localhost:8080/student/signin";
let AuthURL = "http://localhost:8080/student/auth";
let getAllStudents = "http://localhost:8080/student/getAllUsers";
//let getbyid  = "http://localhost:8080/student/getUserById/";

export async function RegisterStudent(data) {
    const alldata = {

      fullname:data.fullname,
      Studentemail:data.Studentemail,
        password:data.password,
        Role:"student"
    };

    return await axios.post(Register,alldata);
}


export async function LoginStudent(data) {
    const alldata = {
      Studentemail:data.Studentemail,
        password:data.password,
    };
  
    return await axios.post(LoginStudents,alldata);
}

export async function AuthUser(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallStudents(){

  return axios.get(getAllStudents);
}



