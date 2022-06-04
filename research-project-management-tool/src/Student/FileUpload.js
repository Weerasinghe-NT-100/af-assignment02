  

 import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Link , useNavigate } from "react-router-dom";


const FileUpload = () => {
 
  const navigate = useNavigate();

  const [Assigmentname, setName] = useState("");
  const [file, setFile] = useState([]);
  const [pdf, setPdf] = useState([]);




  const uploadfiles = async (e) => {
    try {
      e.preventDefault();
     

      const data = new FormData();

      data.append("Assigmentname", Assigmentname);
      for (var x = 0; x < file.length; x++) {
        data.append("uploaded_Image", file[x]);
      }
   
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }

     


      const res = await fetch(`http://localhost:8080/upload/upload/`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {

        {   Swal.fire('Congrats' , 'Successfully Uploaded' , 'success')
        navigate("/HomeStudent");
        setName("");
        setFile(null);
        setPdf(null);
       
          }
     
 
      }
    } catch (error) {
      {   Swal.fire('error' , 'Error ' , 'error')
      navigate("/HomeStudent");
      console.log(error);
        }
    
    }
  };

  return (
   
    <div className="">
    <div >
 <div >
 
 </div>
 <br />


            <br />
          
         
            <br />
            <br />
<br />
<div className="container">
    <div className="container mt-5">
                  <div className="card card0 border-0">
                      <div className="row d-flex">
                          <div >
                          <h2> Upload Your Assignments</h2>
                  
                              
                            
                              </div>
                          </div>
                          <div className="">
                            
                          <form className="form" onSubmit={uploadfiles} encType="multipart/form-data" >
                                
                                  <div className="card2 card border-0 px-4 py-1">
                              
                                  <br></br>
                                      <div class="form-floating mb-3">
                                          <input class="form-control"  name="text" value={Assigmentname} required onChange={e=>{setName(e.target.value)}}  placeholder="Enter The Assignments id " />
                                          <label for="floatingInput"> Assignments ID </label>
                                      </div>
    
                                      <div class="form-floating mb-3">
                                          <input class="form-control" type="file" multiple required filename="uploaded_Image" onChange={e => {setFile(e.target.files)}}  />
                                          <label for="floatingPassword">Upload Images</label>
                                      </div>
    
                                      <div class="form-floating mb-3">
                                          <input class="form-control"  type="file" multiple required filename="uploaded_Image"className="form-control-file" onChange={e => {setPdf(e.target.files)}}  />
                                          <label for="floatingPassword">Upload Pdf </label>
                                      </div>
    
    
                                      <div className="row mb-3 px-3">
                                          <button type="submit" 
      variant="primary"
       size="lg" className="btn btn-blue text-center">Upload</button>
                                      </div>
                                      <div>
                                    
                           
                                    
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

export default FileUpload;
