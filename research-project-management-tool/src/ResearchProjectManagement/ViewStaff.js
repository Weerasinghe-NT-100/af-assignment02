import React,{useState,useEffect} from 'react';
import './AllRegister.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import {useHistory} from "react-router";
import { useParams } from 'react-router-dom';

function ViewStaff({setSendEmail}) {

    const {email}=useParams();
    console.log({email});
    const [StaffList,setStafflist]=useState([]);

    var array;
    var res;
    var res1;
    
    const histoy=useHistory();

    useEffect(()=>{

      function getStaff(){
        axios.get(`http://localhost:8071/staffRegister/get/${email}`).then((res)=>{
          setStafflist(res.data);
        }).catch((err)=>{
          alert(err.message);
        })
      }
      getStaff();

       },[]);


       var viewItems_HTMLTABLE="";

       if (!Array.isArray(StaffList)) {

      array=Object.entries(StaffList);
      res=Object.values(array);
      res1=Object.values(res[1]);
      console.log(res1[1]);

      viewItems_HTMLTABLE=
        res1.map((data)=>{

          if (typeof(data.imageFiles) !== 'undefined') {
          

        return(
          
          <div key={data._id} className="card4 m-2" >

         <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">{data.staffFirstName}&emsp;{data.staffLastName}</p>
         <center><p className="text-center h12 fw-bold mb-1 mx-1 mx-md-2 mt-2">{data.staffPosition}</p></center>
          <br/>

        <div className="col-md-8">
      <Row>
        <Col><img className="rounded-circle" width="200" height="200" src={require(`../Photos/${data.imageFiles}`)} /></Col>
      <Col>
      <Row>
      <div className="card-body">
        <div className="col-md-8">
        
        <Row>
        <Col ><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-6">Staff Id:</p></Col> 
        <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-6">{data.staffId}</p></Col>
        </Row>
       <Row className="row-md-8">
         <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Email:</p></Col>
         <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.staffEmail}</p></Col>
         </Row>
        <Row className="row-md-8">
          <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">User Name:</p></Col>
          <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.staffEmail}</p></Col>
          </Row>  
       </div>   
    </div>
       </Row>   
      </Col> 
      </Row> 
      
      </div>
    <div className="light">
    <a href={`/UpdateProductionTeam/${data.email}`}><button className="btn btn-dark btn-lg btn-block">Update Details</button></a>
    <button className="btn btn-dark btn-lg btn-block" onClick={()=>deleteMovie(data._id)}>Delete Account</button>
    </div>
  </div>

        );
          }
      });

    }

    else
    viewItems_HTMLTABLE="loading"

    
    
return (
 <>

<div className="addl2">


{viewItems_HTMLTABLE}

</div>


 </>
 );
    
}

export default ViewStaff;