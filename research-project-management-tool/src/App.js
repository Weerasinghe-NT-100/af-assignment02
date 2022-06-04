import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginRegister,Header,HLogin,AllRegister,ViewStaff,EditStaff,ViewTopics,MarkingScheme,SupOperations,MarkingSchemfiles,ResearchFaculty,SupChatHandle,SupHChat,LiveChats,ResearchFooter} from "./ResearchProjectManagement";

//sathmini

import StudentsLogin from './Student/StudentsLogin';
import StudentRegister from './Student/StudentRegister';
import RegisterStudentGroups from './Student/GroupRegister';
import TopicRegister from '../Student/TopicRegister';
import Profile from './Student/Profile';
import HomeStudent from './Student/HomeStudent';
import FileUpload from './Student/FileUpload';
import ViewAllUploadPdf from './Student/ViewAllUploadPdf';
import ChatWithGroup from './Student/ChatGroup/ChatWithGroup';
import RequestSupervisor from './Student/RequestSupervisor';
function App() {

  const [staffLogin,setLoginStaff] = useState({});

  return (
    <div className="App">
      <Router> 
        <Header/>
        <Switch>
          <Route path="/" exact component={() => <LoginRegister />} />
          <Route path="/HLogin"><HLogin setLoginStaff={setLoginStaff}/></Route>
          <Route path="/ViewStaff/:id" exact component={() => <ViewStaff />} />
          <Route path="/EditStaff/:id" exact component={() => <EditStaff />} />
          <Route path="/AllRegister" exact component={() => <AllRegister />} />
          <Route path="/ViewTopics" exact component={() => <ViewTopics />} />
          <Route path="/MarkingScheme" exact component={() => <MarkingScheme />} />
          <Route path="/SupOperations/:staffPosition/:name" exact component={() => <SupOperations />} />
          <Route path="/MarkingSchemfiles/:id" exact component={() => <MarkingSchemfiles />} />
          <Route path="/SupChatHandle" exact component={() => <SupChatHandle />} />
          <Route path="/SupHChat" exact component={() => <SupHChat/>} />
          <Route path="/LiveChats" exact component={() => <LiveChats/>} />
          <Route path="/ResearchFaculty/:staffPosition" exact component={() => <ResearchFaculty />} />
      
      
           <Route  path="/studentlogin" exact component={() => <StudentsLogin/>} />
            <Route  path="/register" elementexact component={() =><StudentRegister/>} />
            <Route  path="/GroupRegister" elementexact component={() =><RegisterStudentGroups/>} />
            <Route  path="/TopicRegister" elementexact component={() =><TopicRegister/>} />
            <Route  path="/Profile" elementexact component={() =><Profile/>} />
            <Route  path="/HomeStudent" elementexact component={() =><HomeStudent/>} />
            <Route  path="/FileUpload" elementexact component={() =><FileUpload/>} />
            <Route  path="/ViewAllUploadPdf" elementexact component={() =><ViewAllUploadPdf/>} />
            
            <Route  path="/ChatWithGroup"elementexact component={() =><ChatWithGroup/>} />

            <Route  path="/RequestSupervisor" elementexact component={() =><RequestSupervisor/>} />

         
          </Switch>
          <ResearchFooter/>
          </Router> 
    </div>
  );
}

export default App;
