import React from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router";
function FileUpload({aadhar,handleupl}) {

  // const { aadhar } = useParams();
  console.log(aadhar);

  const formData = new FormData();

    const saveFile = (e) => {
        console.log(e.target.files[0])
        for(var i=0;i<e.target.files.length;i++){
          formData.append('file', e.target.files[i]);
          formData.append("fileName",e.target.files[i].name);
          formData.append("Aadhar", aadhar);
          // for stateupdate
        }

        //console.log(formData)
        
    };

    const uploadFile = async (e) => {
      
        console.log(e);
        // var options = { content: formData };
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      try {
        const res = await axios.post(
          "http://decentrahealth-server.herokuapp.com /fileUpload",
          // options,
          formData
        );
        console.log(res);
        handleupl(res.data);
      } catch (ex) {
        console.log(ex);
      }
    };

    return (
        <>
        <div className="border-dark" style={{border:"2px solid",position:"absolute", left:"73rem", width:"320px"}}>
          <input type="file" multiple onChange={saveFile} style={{margin:"20px 0px 0px 60px"}}/>
          <button className='btn btn-primary' style={{margin:"20px 0px 20px 120px", backgroundColor:"#8d5ba7"}} onClick={uploadFile}>Upload</button>
          </div>
        </>
      )
}

export default FileUpload;