import React from "react"
import { useNavigate } from "react-router";

//MUI
import { Box, Button, Typography, styled } from "@mui/material";

//CSS
const ParentComponent = styled(Box)`
    margin-top : 50px;
`
const Title = styled(Typography)`
    font-size: 70px;
    color: #207868;
`
const Component = styled(Box)`
   text-align: center;
    &>img{
    margin: 30px auto 0 auto;
  }
   
`
const ButtonWrapper = styled(Box)`
    display:flex;
    flex-direction: column;
     &>button{
      width: 300px;
      text-align: center;
      margin: 0 auto;
      background-color: #2C88D9;
      color: #fff;
      font-weight :600;
      height: 50px;
      font-size: 16px;
    }
`
function Home() {
  const navigate = useNavigate();
  return (
    <ParentComponent>
      <Component>
        {/* <Title>
          DecentraHealth
        </Title> */}
        <img src="/home.png" alt="homepage_img" style={{width: 600, height: 480,}}/>
        <ButtonWrapper>
        <Button variant="contained" onClick={() => { navigate("/PatientLogin"); }}>Patient</Button>
        <Button variant="contained" onClick={() => { navigate("/DoctorLogin"); }} style={{marginTop:15}}>Healthcare Operator</Button>
        </ButtonWrapper>
      </Component>
    </ParentComponent>
  )
}

export default Home;

{/* <div className="card-body text-black" >
        <div className="row justify-content-center my-5 mb-0"  >
          <div className="col-md-10 col-lg-5 col-xl-6 order-2 order-lg-1 mt-32" >
            <div className="text-8xl">Best Health Care!!</div>
            <p className="py-3  text-xl text-[#454545]" style={{ fontStyle: "italic" }}>
              All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
              The Best thing about this, Its Free!!!
              Bringing Innovations In Health And Learning To The Global Community!
            </p>
            <div className="my-10 text-3xl">
              <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1] active:bg-red-200" onClick={() => { navigate("/PatientLogin"); }}>Patient</button>
              <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1] mx-3 active:bg-red-200" onClick={() => { navigate("/DoctorLogin"); }}>Doctor</button>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  ">
            <img src="/home.png" className="mx-auto my-0"
              alt="Sample image" width="570"  />

          </div>
        </div>
        <footer className="text-center text-white">
      <div className="center mb-9 ">
      <p className="text-center">
        © 2022 Copyright
      </p>
      </div>
     
    </footer>
      </div> */}