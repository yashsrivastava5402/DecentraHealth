import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import HospitalCard from './HospitalCard';
import FileDownload from './FileDownload';
import Button from "@mui/material/Button";
import PatientCardDoctor from './PatientCardDoctor';
import { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';


function Doctor() {
    //const { aadhar } = useParams();
    const { state } = useLocation();
    console.log(state);
    //console.log(state);

    const myStyle = {
        width: '50rem',
        backgroundColor: 'white'
      }
      
    return (
        <>
            {/* <div>
            Doctor Page.
            <div>
                { state.patients.map((patient)=>{
                    console.log(patient);
                    return <PatientCardDoctor aadhar={patient.Aadhar} name={patient.Name} /> 
                })}
            </div>
        </div> */}
            <div className="container my-5">
                <div className="card text-left border-dark text-black" style={myStyle}>
                    <div className="card-header  border-dark">
                        Patient List
                    </div>
                    <div className="card-body">
                        <table class="table table-hover border-success">
                            <thead>
                                <tr>
                                    <th scope="col">Aadhar</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.patients.map((patient) => {
                                    console.log(patient);
                                    return <tr><PatientCardDoctor aadhar={patient.Aadhar} name={patient.Name} /> </tr> 
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctor;