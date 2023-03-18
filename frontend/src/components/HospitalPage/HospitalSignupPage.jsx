import React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios'

//MUI
import { Box, styled, Typography, Grid,Button, TextField, FormControlLabel } from '@mui/material';

const Component = styled(Box)(({ theme }) => ({
  margin: '60px auto 0 auto',
  width: '90%',
  [theme.breakpoints.down('md')]: {
    margin: '60px auto 0 auto',
  }
}))

const Container = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}))

const Image= styled('img')(({ theme }) => ({
  width:'90%',
  marginTop: '10%',
  [theme.breakpoints.down('md')]: {
    marginTop: 0
  }
}))


const Form = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  margin: '50px auto 0 auto',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    margin: '20px auto 0 auto'
  }
}))


const Input = styled(Box)`
  display:flex;
  flex-direction : column;
  flex:1;
  margin-bottom: 20px;
  &>div , &>button, &>p{
        margin-top: 30px;
    }
`

function HospitalSignupPage() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    hospitalName: "",
    hospitalRegnumber: "",
    type: "0",
    password: "",
    cpassword: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (values.hospitalName.trim() !== "" && values.hospitalRegnumber.trim() !== "" && values.password.trim() !== "" && values.cpassword.trim() !== "") {

      // const res = await axios.post('http://localhost:8000/getPatientsHospital',{HospitalID: hospitalRegnumber} );

      axios.post('http://localhost:8000/HospitalSignup', {
        values
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            navigate(`/Admin/:${values.hospitalRegnumber}`, { state: { values: { doctors: response.data.doctors, hospitalName: response.data.Name, hospitalRegnumber: response.data.regNo, patients: response.data.patients } } }, { replace: true });
          }
          else if (response.status == 204) {
            alert("Hospital already registered");
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
      <Component>
        <Container container>
          <Grid item lg={6} md={4} sm={8} xs={12}>
            <Image src='/hospitalsignup.png' alt="Sample image" />
          </Grid>
          <Grid item lg={6} md={8} sm={8} xs={12}>
            <Form>
              <Typography variant='h4' fontWeight={600}>Sign up</Typography>
              
              <Box style={{marginTop:30}}>
                  <label className="form-label">Type of Hospital :</label>
                  <input className="form-check-input ml-5 " type="radio" name="type" id="gov" onChange={handleChange} value="gov"></input>
                  <label className="ml-2 mr-4" for="gov">Government</label>
                  <input className="form-check-input ml-5" type="radio" name="type" id="private" onChange={handleChange} value="private"></input>
                  <label className="ml-2" for="private">Private</label>
              </Box>

              <Input>
                  <TextField type="text" name="hospitalName" onChange={handleChange} value={values.hospitalName} id="hospitalName" variant='standard' label='Hospital Name'/>
                  {submitted && !values.hospitalName ? <span id="first-name-error">Please enter the hospital name.</span> : null}

              
                  <TextField type="text" name="hospitalRegnumber" id="hospitalRegnumber" label='Hospital Reg Number' onChange={handleChange} value={values.hospitalRegnumber} variant='standard' />
                  {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter the hospital registration number.</span> : null}


                  <TextField type="text" id="password" onChange={handleChange} value={values.password} name="password" label='Password' variant='standard' />
                  {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
  
                  <TextField type="password" id="cpassword" onChange={handleChange} value={values.cpassword} name="cpassword" label='Confirm password' variant='standard' />
                  {values.cpassword !== values.password ? <p id="password-error" style={{ color: 'red' }}>Passwords do not match</p> : null}
                  {submitted && !values.cpassword ? <span id="password-error">Please Confirm Password</span> : null}
  
              
                {/* <FormControlLabel label="I agree all statements in Terms & Conditions " /> */}
                
                <Button type="submit" variant='contained' onClick={handlesubmit} style={{width: 100,height: 40,margin: '40px auto 0 auto'}}>Register</Button>
                </Input>

              <p>Have already an account? <a onClick={() => { navigate("/HospitalLogin"); }}><u style={{cursor:'pointer'}}>Login here</u></a></p>
            </Form>
          </Grid>
        </Container>
      </Component>
    </>
  )
}

export default HospitalSignupPage;

{/* <div className="card-body text-black">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
            <form className="mx-1 mx-md-5">

              <div className="d-flex flex-row align-items-center mb-2">
                
                <div className="form-outline flex-fill mb-0 mx-5">
                  <label className="form-label">Type of Hospital :</label>
                  <input className="form-check-input ml-5 " type="radio" name="type" id="gov" onChange={handleChange} value="gov"></input>
                  <label className="ml-2 mr-4" for="gov">Government</label>
                  <input className="form-check-input ml-5" type="radio" name="type" id="private" onChange={handleChange} value="private"></input>
                  <label className="ml-2" for="private">Private</label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mt-6 mx-5">
               
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Hospital Name</label>
                  <input type="text" name="hospitalName" className="form-control" onChange={handleChange} value={values.hospitalName} id="hospitalName"/>
                  {submitted && !values.hospitalName ? <span id="first-name-error">Please enter the hospital name.</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mx-5">
                
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Hospital Registration Number</label>
                  <input type="text" name="hospitalRegnumber" id="hospitalRegnumber" className="form-control" onChange={handleChange} value={values.hospitalRegnumber}/>
                  {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter the hospital registration number.</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mx-5">
               
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Password</label>
                  <input type="text" id="password" className="form-control" onChange={handleChange} value={values.password} name="password"/>
                  {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mx-5">
                
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Confirm your password</label>
                  <input type="password" id="cpassword" className="form-control" onChange={handleChange} value={values.cpassword} name="cpassword"/>
                  {values.cpassword !== values.password ? <p id="password-error" style={{color:'red'}}>Passwords do not match</p> : null}
                  {submitted && !values.cpassword ? <span id="password-error">Please Confirm Password</span> : null}
                </div>
                
              </div>
              
              <div className="form-check d-flex justify-content-center mt-5">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                <label className="form-check-label" for="form2Example3">
                  I agree all statements in <a href="#!">Terms of service</a>
                </label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-4">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} onClick={handlesubmit}>Register</button>
                
              </div>
              <p class="text-center text-muted mt-5 mb-0">Have already an account? <a onClick={() => {navigate("/HospitalLogin");}} class="fw-bold text-body cursor-pointer"><u>Login here</u></a></p>
            </form>
            
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="/hospitalsignup.png"
              className=' mx-48 my-20 w-2/3' alt="Sample image" style={{}} />
          </div>
        </div>
      </div> */}

