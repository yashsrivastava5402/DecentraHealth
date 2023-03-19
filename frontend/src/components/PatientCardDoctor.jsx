import React, { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

//MUI
import {Button,TableCell, TableRow} from "@mui/material";

function PatientCardDoctor({ aadhar, name ,doctorId}) {

    const navigate = useNavigate();
    const [request,setrequest]=useState("Request");
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) => {
        e.preventDefault();
        setSubmitted(true);
        axios.post('http://localhost:8000/requestPatient', { Aadhar: aadhar,doctorId:doctorId }).then((response) => {
            console.log(response.data);
            if (response.status === 200)
                // navigate(`/PatientPageDoctor/${aadhar}`, { state: { values: response.data } });
                setrequest("Requested");
                
        })
    }

    return (
        <>
            <TableRow>
                <TableCell component='th' scope='row'></TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16, fontWeight: 600 }}>{name}</TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16 }}>{aadhar}</TableCell>
                <TableCell component='th' scope='row'><Button style={{height: '40px',width:'100px',backgroundColor: '#6558F5',color: '#fff',fontWeight :'600',fontSize: '16px'}} onClick={goToPatient}>{request}</Button></TableCell>
            </TableRow>

        </>)

}

export default PatientCardDoctor;
