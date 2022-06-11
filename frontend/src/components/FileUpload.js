import React from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router";
function FileUpload({aadhar,handleupl}) {

  // const { aadhar } = useParams();
  console.log(aadhar);

  const formData = new FormData();
  const arr=[];
    const saveFile = (e) => {
   
     
        console.log(e.target.files[0])
        for(var i=0;i<e.target.files.length;i++){
          formData.append('file', e.target.files[i]);
          formData.append("fileName",e.target.files[i].name);
          formData.append("Aadhar", aadhar);
          // for stateupdate
          var link = `https://decentrahealth-server.herokuapp.com/fileDownload/${aadhar}/${e.target.files[i].name}`;

          const output = {
              
             file : link,
             filename: e.target.files[i].name,
              name: e.target.files[i].name,
          }
          arr.push(output);
          
        }
        console.log(arr)
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
          "https://decentrahealth-server.herokuapp.com/fileUpload",
          // options,
          formData
        );
        console.log(res);
        handleupl(arr);
      } catch (ex) {
        console.log(ex);
      }
    };

    return (
        <div className="App">
          <input type="file" multiple onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
      )
}

export default FileUpload;