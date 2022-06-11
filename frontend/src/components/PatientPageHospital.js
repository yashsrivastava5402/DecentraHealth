import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import HospitalCard from './HospitalCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import Hospital from '../../../backend/models/hospital';
import DoctorCard from './DoctorCard';


function PaitentPageHospital(){
    const { aadhar } = useParams();
    const{state}=useLocation();

    const doctors=state.values;
    // console.log(state.values)
    // const handleup=(arr)=>{
    //     setdoctors((prev)=>([...prev,...arr]
        
    //     ));
    // }
    // console.log(doctors)
   
    return (
        <div>
            { doctors.map((doctor)=>{
                return <DoctorCard id={doctor.doctorId} name={doctor.Name} aadhar = {aadhar}  patientName = {state.name} age = {state.age} gender = {state.gender}/>
            })}
        </div>
    )
}

export default PaitentPageHospital;