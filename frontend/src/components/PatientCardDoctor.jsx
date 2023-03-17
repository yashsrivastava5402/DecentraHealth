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
        axios.post('https://decentrahealth-backend.onrender.com/viewFiles', { aadhar: aadhar }).then((response) => {
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
                <TableCell component='th' scope='row'>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <InputLabel id="demo-simple-select-filled-label">TimeAccess</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </TableCell>
            </TableRow>

        </>)

}

export default PatientCardDoctor;

{/* <td>{aadhar}</td>
            <td>{name}</td>
            <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>View Reports</button>
            <button className="btn btn-primary" style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 20px" }}>Remove</button> */}