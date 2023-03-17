import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router";
import { Form } from 'react-bootstrap';

//MUI
import { Box, Button, Typography, styled, TextField } from "@mui/material";

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
    margin: 50px auto 0 auto;
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

const LowerComponent = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 20px auto 0px auto;
    width:20%;
    &>button{
      width: 200px;
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

const DoctorLogin = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    doctorId: "",
    doctorPass: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    axios.post("https://decentrahealth-backend.onrender.com/findDoctor", { email: values.doctorId, password: values.doctorPass })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/Doctor`, { state: { patients: response.data.patients } });
        }
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <ParentComponent>
        <Component>
          {/* <Title> DecentraHealth </Title> */}
          <img src="/doctorlogin.jpg" alt="patient_login_intro" style={{ width: 550, height: 350 }} />
          <Typography style={{ color: '#1AAE9F', fontSize: 28, fontWeight: 600, marginTop: 20 }}>Doctor Login</Typography>
          <LowerComponent>
            <TextField variant='outlined' placeholder='Doctor Id' onChange={handleChange} value={values.doctorId} id="doctorId" name="doctorId" ></TextField>
            {submitted && !values.doctorId ? <span id="first-name-error">Please enter correct Id</span> : null}
            <TextField variant='outlined' placeholder='Password' onChange={handleChange} value={values.doctorPass} id="doctorPass" name="doctorPass" type="password" style={{ marginTop: 20 }}></TextField>
            {submitted && !values.doctorPass ? <span id="doctorPass-error">Please enter correct password</span> : null}
            <Button type='submit' onClick={handlesubmit}>Login</Button>
          </LowerComponent>
        </Component>
      </ParentComponent>
    </>
  )
}

export default DoctorLogin;


{/* <div className="card-body text-black">
        <div className="row justify-content-center my-5">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">Doctor Login</p>
            <form className="mx-1 mx-md-5">

              <div className="d-flex flex-row align-items-center mb-2 mt-6 mx-5">
                
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Doctor Id</label>
                  <input onChange={handleChange} value={values.doctorId} id="doctorId" class="form-control" type="text" name="doctorId" />
                  {submitted && !values.doctorId ? <span id="first-name-error">Please enter correct Id</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mt-5 mx-5">
                
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Password</label>
                  <input onChange={handleChange} value={values.doctorPass} id="doctorPass" class="form-control" type="text" name="doctorPass" />
                  {submitted && !values.doctorPass ? <span id="doctorPass-error">Please enter correct password</span> : null}
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} onClick={handlesubmit}>Login</button>
              </div>
            </form>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="/doctorlogin.png"
              className=' mx-56 my-10' alt="Sample image" />
          </div>
        </div>
      </div> */}