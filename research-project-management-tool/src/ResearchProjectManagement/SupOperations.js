import React,{useState,useEffect} from 'react';
import './SupOperations.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Row,Col, Table} from 'react-bootstrap';
import LiveChats from './LiveChats';
import sf from '../Docus/5aed2c41-51a9-40ce-b6aa-c46f7313f9d3-1653835522736.pdf';
import { useParams } from 'react-router-dom';

function SupOperations() {

  const[TopicList,setTopiclist]=useState([]);
  const[EvaluatedList,setEvaluatedlist]=useState([]);

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [newEvaluated,setNewEvaluated]=useState(
    {
     Nevaluate:'',
     Pmark:''
    }
  );

  const sendPMarks=(e)=>{

    e.preventDefault();
    const data =new FormData();
    data.append('Pmark',newEvaluated.Pmark);
    data.append('Nevaluate',newEvaluated.Nevaluate);
    
    axios.post("http://localhost:8071/presentationScheme/add", data).then(()=>{

      alert("Marks of Prsentation Evaluation is added");
      }).catch((err)=>{
        alert(err);
      })
  }

  const handleChange = (e) => {
    setNewEvaluated({...newEvaluated, [e.target.name]: e.target.value});
 }

  const handleFiles = (e) => {
    setNewEvaluated({...newEvaluated, Pmark: e.target.files[0]});
   } 


    useEffect(()=>{

       function getTopics(){
         axios.get("http://localhost:8071/markingScheme").then((res)=>{
           setTopiclist(res.data);
         }).catch((err)=>{
           alert(err.message);
         })
       }

       function getEvaluated(){
        axios.get("http://localhost:8071/presentationScheme").then((res)=>{
          setEvaluatedlist(res.data);
        }).catch((err)=>{
          alert(err.message);
        })
      }

      getTopics();
      getEvaluated();

        },[]);

        var viewItems_HTMLTABLE="";
        var viewEvaluated_HTMLTABLE="";

    if(TopicList){

      viewItems_HTMLTABLE=
        TopicList.map((data)=>{

        return(
         <div key={data._id} className="card1">
         <div className="card-body">
          <Row>
          <Col><h6 className="card-title">{data.EvaluationDocumentName}</h6>
          <a href={require(`../Docus/${data.markingPaper}`).default} target='_blank'><button className="btnn2">Click here to open the markingScheme in a new tab</button></a></Col>
          <Col></Col>
         </Row>
         <div className="line"></div>
        </div>
      </div>
        );
      });
    
    }

    else
    viewItems_HTMLTABLE="loading"

    if(EvaluatedList){

       viewEvaluated_HTMLTABLE=
      EvaluatedList.map((data)=>{

      return(
       <div key={data._id} className="card1">

       <div className="card-body">
        <Row>
        <Col><h6 className="card-title"></h6>
        <a href={require(`../Docus/${data.Pmark}`).default} target='_blank'><button className="btnn1">Click here to open the {data.Nevaluate} marks in a new tab</button></a></Col>
        <Col></Col>
       </Row>
       <div className="line"></div>
      </div>
    </div>
      );
    });
  
  }

  else
  viewEvaluated_HTMLTABLE="loading"


return (
 <> 
<LiveChats/>   
<div className="base-containers">
<div className="images6">

<div className="images3">

 <div className="card1">
   <div className="dates">
     <h1>Research Project Management of {name}</h1>
   </div>

   <div className="lines"></div>  

   <div className="date">
     <h4>May 14-21</h4>
   </div>
         <div className="card-body">
          <Row>
          <Col><h6 className="card-title">Student Research Topics</h6>
          <a href='./ViewTopics' target='_blank'><button className="btnn1">Click here to open the Student Research Topics in a new tab</button></a></Col>
          <Col></Col>
         </Row>
         <div className="line"></div>
        </div>
      </div>

  <div className="date">
     <h4>May 14-21</h4>
   </div>   

  {viewItems_HTMLTABLE}

  <div className="card1">
   <div className="date">
     <h4>May 14-21</h4>
   </div>
  <div className="card-body">
  <div className="containerblock1">
 <form onSubmit={sendPMarks}>
 <p className="text-center h4 fw-bold mb-4 mx-1 mx-md-4 mt-4">Evaluated Presenations Marks upload</p>

 <Row>
  <Col>
 <div className="form-group">
 <label>Name of the Evaluation</label>
 <input type="text" name="Nevaluate" className="form-control" id="Nevaluate" placeholder="Name of the Evaluation" value={newEvaluated.Nevaluate} onChange={handleChange} required/>
 </div>
 </Col>
 <Col>
 <div className="form-group">
 <label>Upload the marks as a pdf</label>
 <input type="file" name="Pmark" className="form-control" id="Pmark" placeholder="Presentation Marks" onChange={handleFiles} required/>
 </div>
 </Col>
 </Row>

<div className="footer">
<button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
    </div>
   </form>
   </div>
   
   <div className="line"></div>

  </div>

 </div>

  <div className="date">
     <h4>May 14-21</h4>
   </div>

 {viewEvaluated_HTMLTABLE}

 </div>
 </div>
 <div className="lines1"></div>
</div>
 </>
    );
  }


export default SupOperations;