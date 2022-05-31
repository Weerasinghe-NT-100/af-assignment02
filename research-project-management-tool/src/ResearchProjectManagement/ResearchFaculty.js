import React,{useState,useEffect} from 'react';
import './AllRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col, Table} from 'react-bootstrap';
import Su1 from '../ResearchTools/Su1.jpg';

function ResearchFaculty() {

return (
 <> 

<div className="images"><img src={Su1}/>
  </div>

<div className="images8">
<div className="images6">

<a href={`/SupOperations/${'Faculty of Computing'}`}><button className="facbttn">Faculty of Computing</button></a>

<a href={`/SupOperations/${'Faculty of Engineering'}`}><button className="facbttn">Faculty of Engineering</button></a>

 <a href={`/SupOperations/${'Faculty of Business'}`}><button className="facbttn">Faculty of Business</button></a>
 
 <a href={`/SupOperations/${'Faculty of Humanity'}`}><button className="facbttn">Faculty of Humanity</button></a>
  </div>

  </div>
 
 </>
    );
  }


export default ResearchFaculty;