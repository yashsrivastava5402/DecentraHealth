import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import HospitalCard from './HospitalCard';
import FileDownload from './FileDownload';
import Button from "@mui/material/Button";

function PaitentPage(){
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    //const { aadhar } = useParams();
    const {state} = useLocation();
    const [files, setFiles] = useState([]);
    //console.log(state);
    function showDocs(e){
        e.preventDefault();
        setSubmitted(true);
        axios.post('https://decentrahealth-server.herokuapp.com/viewFiles', {aadhar: state.values.Aadhar}).then((response) => {
            console.log(response.data);
      
                setFiles((prevState) => {
                    return [...prevState,...response.data];
                })
       
        })
    }

    return (
        <div>
            <div>
                { state.values.hospitals.map((hospital)=>{
                    console.log(hospital);
                    return <HospitalCard id={hospital.regNo} name={hospital.Name} state={state}/> 
                })}
            </div>
            <div>
                <Button onClick={showDocs}>View Reports</Button>
              {submitted?<FileDownload aadhar={state.values.Aadhar} files={files}/>:null} 
            </div>
        </div>
    )
}

export default PaitentPage