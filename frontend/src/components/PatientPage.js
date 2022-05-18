import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

function PaitentPage(){
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const params = useParams();
    const {state} = useLocation();
    return (
        <div>
            {state.hospitals[0].Name}
        </div>
    )
}

export default PaitentPage