import React from 'react'

import { useNavigate } from "react-router";

//MUI
import { Box, Button, Typography, styled } from "@mui/material";

//CSS
const ParentComponent = styled(Box)`
    margin-top : 50px;
    .example::-webkit-scrollbar {
  display: none;
}
`
const Title = styled(Typography)`
    font-size: 70px;
    color: #207868;
`
const Component = styled(Box)`
   text-align: center;
    display:flex;
    flex-direction: column;
    &>img{
    margin: 0 auto;
  }
    &>button{
      width: 300px;
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
      background-color: #2C88D9;
      color: #fff;
      font-weight :600;
      height: 50px;
      font-size: 16px;
    }
`

export default function PatientLoginIntro() {
  const navigate = useNavigate();
  return (
    <ParentComponent>
      <Component>
        <Title> DecentraHealth </Title>
        <img src="/patientLoginIntro.jpg" alt="patient_login_intro" style={{width: 430, height: 350}}/>
        <Typography style={{color:'#1AAE9F',fontSize: 28, fontWeight: 600,marginTop: 20}}>Patient Login</Typography>
        <Button variant="contained" onClick={() => { navigate("/PatientLoginOtp"); }}>Login with OTP</Button>
        <Button variant="contained" onClick={() => { navigate("/PatientLoginFingerprint"); }}>Login with Fingerprint</Button>
      </Component>
    </ParentComponent>
  )
}
