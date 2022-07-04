import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import HospitalCard from './HospitalCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';


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

    return (
        <div>
            <div>
                Aadhar is {aadhar}
                 <FileUpload aadhar={aadhar} handleupl={handleup}/> 
            </div>
            <div>
              <FileDownload aadhar={aadhar} files={state2}/>
            </div>
        </div>
    )
}

export default PaitentPageDoctor