import React,{useState,useEffect} from 'react';
import './AllRegister.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col, Table} from 'react-bootstrap';
import { Tab } from 'bootstrap';

function ViewTopics() {

  const[TpoicsList,setTopicslist]=useState([]);

    useEffect(()=>{

       function getTopics(){
         axios.get("http://localhost:8071/studentTopic").then((res)=>{
           setTopicslist(res.data);
         }).catch((err)=>{
           alert(err.message);
         })
       }
        getTopics();

        },[]);

        const deleteTopic=async(_id)=>{
          const res2=await fetch(`http://localhost:8071/studentTopic/delete/${_id}`,{

          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
          });

          const deleteData=await res2.json();
          console.log(deleteData);

          if(res2.status==200||deleteData){
            alert("Topic deleted");
          }

          else{
            alert("Error");
          }
        }

        const sendEmail=async(email)=>{
          axios.get(`http://localhost:8071/studentTopic/sendemail/${email}`).then((res)=>{
            if(res.status==200){
            alert("Confirmation Email is sent");
            }
          }).catch((err)=>{
            alert(err.message);
          })
        }

        var viewItems_HTMLTABLE="";

    if(TpoicsList){

        viewItems_HTMLTABLE=
        TpoicsList.map((data)=>{
        return(
          <Row key={data._id}>
          <Col className="Tabletd">{data.GroupId}</Col>
          <Col className="Tabletd">{data.GroupDetails}</Col>
          <Col className="Tabletd">{data.LeaderEmail}</Col>
          <Col className="Tabletd">{data.ResearchTopic}</Col>
          <Col><Col><button  onClick={()=>deleteTopic(data._id)} className="btnn1">Rejected</button></Col>
          <Col><button onClick={()=>sendEmail(data.LeaderEmail)} className="btnn2">Accept</button></Col></Col>
          </Row>

        );
      });
    
    }

    else
    viewItems_HTMLTABLE="loading"


return (
 <> 

<div className="base-containers">
<div className="images6">

<div className="card1">

<Table className="images3">

<Row>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Group Id</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Group Details</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Research Topic</h5></Col>
  <Col><Col></Col></Col>
  

</Row>
 {viewItems_HTMLTABLE}

</Table>

  </div>
 
</div>

<div className="lines1"></div>
</div>
 
 </>
    );
  }


export default ViewTopics;