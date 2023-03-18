import React, { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

//MUI
import { Box, Button, Typography, styled, TableContainer, TableCell, TableRow, TableHead, Table, TableBody, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function PatientCardDoctor({ aadhar, name }) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) => {
        e.preventDefault();
        setSubmitted(true);
        axios.post('http://localhost:8000/viewFiles', { aadhar: aadhar }).then((response) => {
            console.log(response.data);
            if (response.status === 200)
                navigate(`/PatientPageDoctor/${aadhar}`, { state: { values: response.data } });
        })
    }

    return (
        <>
            <TableRow>
                <TableCell component='th' scope='row'></TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16, fontWeight: 600 }}>{name}</TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16 }}>{aadhar}</TableCell>
                <TableCell component='th' scope='row'><Button style={{height: '40px',width:'100px',backgroundColor: '#6558F5',color: '#fff',fontWeight :'600',fontSize: '16px'}} onClick={goToPatient}>Request</Button></TableCell>
            </TableRow>

        </>)

}

export default PatientCardDoctor;

{/* <td>{aadhar}</td>
            <td>{name}</td>
            <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>View Reports</button>
            <button className="btn btn-primary" style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 20px" }}>Remove</button> */}