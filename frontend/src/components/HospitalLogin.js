import { useState } from 'react'
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import { Grid, Paper, Avatar, Button, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Dialog from '@material-ui/core/Dialog';

function HospitalLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        hospitalRegnumber: "",
        password: "",
        patients: [] });
    const paperStyle = { padding: 20, height: '73vh', width: 348, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (values.hospitalRegnumber.trim() !== "" && values.password.trim() !== "") {
            // const res = await axios.post('https://decentrahealth-server.herokuapp.com/getPatientsHospital',{HospitalID: hospitalRegnumber} );
            axios.post('https://decentrahealth-server.herokuapp.com/hospitalLogin',
                values
            )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                        navigate(`/Admin/:${values.hospitalRegnumber}`, { state: { values: { doctors: response.data.doctors, hospitalName: response.data.Name, hospitalRegnumber: response.data.regNo, patients: response.data.patients } } });
                    }
                    else if (response.status == 203) {
                        alert("Wrong Password,Try again");
                    }
                    else if (response.status == 204) {
                        alert("Hospital not found!");
                    }
                    else
                        alert("Something went wrong");
                })
                .catch(function (error) {
                    console.log(error);

                });
        }
        else {
            alert("Please Fill every field");
        }

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
    {/* <Dialog open maxWidth='sm'>
    <Paper style={paperStyle}>
    <Grid align='center'>
    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>

        <br />
        <br />
        <div class="form-container">
            <form class="register-form" >
            <TextField onChange={handleChange} value={values.hospitalRegnumber} id="hospitalRegnumber" class="form-field" type="text" placeholder="Hospital Reg Number" name="hospitalRegnumber" margin="normal" fullWidth />        
            {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter hospital registration number</span> : null}
            <br />
            <br />
            <TextField onChange={handleChange} value={values.password} id="password" class="form-field" type="text" placeholder="Password" name="password" margin="normal" fullWidth/>
            {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
            <br />
            <br />
            <Button type="submit" variant="contained" color="success" style={{color: "white",backgroundColor: "#013220",}} fullWidth onClick={handlesubmit}> Submit </Button>
            </form>
        </div>
    </Grid>
    </Paper>
    </Dialog> */}
    <div className="card-body text-black" >
        <div className="row justify-content-center my-5">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">Login</p>
            <form className="mx-1 mx-md-5">

              <div className="d-flex flex-row align-items-center mb-2 mt-6 mx-5">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Hospital Reg Number</label>
                  <input onChange={handleChange} value={values.hospitalRegnumber} id="hospitalRegnumber" class="form-control" type="text" name="hospitalRegnumber"/>
                  {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter hospital registration number</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mt-5 mx-5">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Password</label>
                  <input  onChange={handleChange} value={values.password} id="password" class="form-control" type="password" name="password" />
                  {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} onClick={handlesubmit}>Login</button>
              </div>
              <p class="text-center text-muted mt-5 mb-0">Don't Have an Account? <a href='/HospitalSignupPage' class="fw-bold text-body"><u>Sign Up</u></a></p>
            </form>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="/hospitallogin.png"
              className=' mx-56 my-10' alt="Sample image" />
          </div>
        </div>
      </div>
    </>
    )
}

export default HospitalLogin;