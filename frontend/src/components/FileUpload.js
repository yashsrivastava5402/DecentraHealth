import React from 'react'
import axios from 'axios';
import {useState} from 'react'
function FileUpload() {

  const formData = new FormData();
    const saveFile = (e) => {
      
        console.log(e.target.files[0])
        for(var i=0;i<e.target.files.length;i++){
          formData.append('file', e.target.files[i]);
          formData.append("fileName",e.target.files[i].name);
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
          "http://localhost:8000/fileUpload",
          // options,
          formData
        );
        console.log(res);
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

export default FileUpload