  

 
 import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewAllUploadPdf = () => {


  const [files, setUsers] = useState();


  


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8080/upload/download/`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="">
    <div >
 <div >


 </div>
 <br />


   

 <br />
 <div className="container">
     <div className="">
                   <div className="">
                 
                           <div className="">
                             
                           <div className="row">
       <br></br><br></br>
       {files?.map((files) => (
         <div className="col-md-3 card me-5 mt-2 p-1 mb-2  d-flex" key={files._id}><br></br>
           <img src={files.avatar} alt="" width={"50%"} height={"50%"} />
        
 
           <a href={files.pdf} download>Click to download  </a>
           <div className="p-2">
             <h3> Assignment Type :{files.name}</h3>
           </div>
         </div>
       ))}
     </div>
                           </div>
                       </div>
                   </div>
          
     </div>
 
 </div>
          
     </div>
  )
};

export default ViewAllUploadPdf;
