import React from 'react';
import './Fingerprint.css';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

//MUI
import { Box, Typography, styled } from "@mui/material";

//CSS
const ParentComponent = styled(Box)`
    margin-top : 120px;
`

const Component = styled(Box)`
   text-align: center;
    display:flex;
    flex-direction: column;
    &>img{
      margin: 50px auto 0px auto;
  }
    &>button{
      width: 200px;
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
      background-color: #2C88D9;
      color: #fff;
      font-weight :600;
      height: 40px;
    }
`
export default function DoctorFingerprint() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user,setUser] = useState([]);

  const getUser = async ()=>{
    console.log(state.doctorId)
    axios.post('http://localhost:8000/level', {doctorId:state.doctorId})
    .then(function (response) {
      if(response.status === 200){
        navigate("/PatientIntroPage", { state: { Name: response.data.name, Aadhar: response.data.aadhar, Age: response.data.age, Gender: response.data.gender } });
      }
    });
    // console.log(data);
    // setUser(data);    
  }

  useEffect(()=>{
      getUser();
  },[]);

  return (
    <>
      <ParentComponent>
        <Component>
          {/* <Title> DecentraHealth </Title> */}
          {/* <img src="/patientLoginIntro.jpg" alt="patient_login_intro" style={{ width: 400, height: 300 }} /> */}
          <Typography style={{ color: '#1AAE9F', fontSize: 28, fontWeight: 600,marginBottom:30 }}>Patient Login</Typography>
          <Typography variant='h6'>Use your Biometrics to verify Identity</Typography>
          {/* <img src="/fingerprint.png" alt="fingerprint" style={{height: 60,width:60,marginTop:10}} /> */}
          <div class="scanner">
            <div class="fingarprint">
            </div>
            <h3>Scanning ....</h3>
          </div>
        </Component>
      </ParentComponent>
    </>
  )
}
