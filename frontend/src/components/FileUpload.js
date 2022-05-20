import React from 'react'
import axios from 'axios';
import {useState} from 'react'
function FileUpload() {

    const formData = new FormData();
    const saveFile = (e) => {
        console.log(e.target.files[0])
    formData.append("file", e.target.files[0]);
    formData.append("fileName",e.target.files[0].name);
        console.log(formData)
    };

    const uploadFile = async (e) => {
      
      
        var options = { content: formData };
      console.log(formData);
      try {
        const res = await axios.post(
          "http://localhost:8000/fileUpload",
          formData
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    };

    return (
        <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
      )
}

export default FileUpload