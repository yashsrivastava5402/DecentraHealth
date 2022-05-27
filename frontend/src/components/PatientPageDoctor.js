import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import HospitalCard from './HospitalCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';

function PaitentPageDoctor(){
    const { aadhar } = useParams();
    const { state } = useLocation();
    
    return (
        <div>
            <div>console.log({aadhar});

                Aadhar is
                 <FileUpload aadhar={aadhar}/> 
            </div>
            <div>
              <FileDownload aadhar={aadhar} files={state.values}/>
            </div>
        </div>
    )
}

export default PaitentPageDoctor