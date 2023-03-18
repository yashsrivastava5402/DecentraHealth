import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import FileUpload from './FileUpload';
import FileDownload from './PatientPage/FileDownload';


 function PaitentPageDoctor(){
    const { aadhar } = useParams();
    const{state}=useLocation();

    const [state2,setstate2]=useState([]);
    console.log(state.values)
    const handleup=(arr)=>{
        setstate2((prev)=>([...prev,...arr]
        
        ));
    }
    console.log(state2)
    useEffect(() => {
    axios.post('http://localhost:8000/viewFiles', {aadhar: aadhar}).then((response) => {
    console.log(response.data);
    if(response.status===200)
     {
        setstate2(prevState => ([
            ...prevState, 
            ...response.data
        ]));
        console.log(state2);
     }
})
   }, [])

   const myStyle = {
    width: '70rem',
    backgroundColor: 'white'
  }

    return (
      <>
        <div>
        <div>
            <FileUpload aadhar={aadhar} handleupl={handleup}/> 
        </div>
        <div className="container my-5">
        <div className="card text-left border-dark text-black" style={myStyle}>
      <div className="card-header  border-dark">
        <h1>Records of {aadhar}</h1>
      </div>
      <div className="card-body">
        <table class="table table-hover border-success">
          <thead>
            <tr>
              <th scope="col">File Name</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
            <tbody>
              <FileDownload aadhar={aadhar} files={state2}/>
            </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default PaitentPageDoctor;