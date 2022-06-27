import axios from 'axios';
import React,{useState} from 'react'
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


function Doctor(){
    //const { aadhar } = useParams();
    const {state} = useLocation();
    console.log(state);
    //console.log(state);
    return (
        <div>
            Doctor Page.
            <div>
                { state.patients.map((patient)=>{
                    console.log(patient);
                    return <PatientCardDoctor aadhar={patient.Aadhar} name={patient.Name} /> 
                })}
            </div>
        </div>
    )
}

export default Doctor