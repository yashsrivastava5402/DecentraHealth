import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import HospitalCard from './HospitalCard';

function PaitentPage(){
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const params = useParams();
    const {state} = useLocation();
    //console.log(state);
    return (
        <div>
            { state.values.hospitals.map((hospital)=>{
                console.log(hospital);
                return <HospitalCard id={hospital.regNo} name={hospital.Name} state={state}/> 
            })}
        </div>
    )
}

export default PaitentPage