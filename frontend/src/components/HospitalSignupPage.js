import React from 'react';
import {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios'
function HospitalSignupPage() {
  
    const navigate = useNavigate();
    const [values, setValues] = useState({
        hospitalName: "",
        hospitalRegnumber: "",
        type:"0",
        password:"",
        cpassword:""
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (values.hospitalName.trim() !== "" && values.hospitalRegnumber.trim() !== ""  && values.password.trim() !== "" && values.cpassword.trim() !== "" )
        {
            
            // const res = await axios.post('https://decentrahealth-server.herokuapp.com/getPatientsHospital',{HospitalID: hospitalRegnumber} );

            axios.post('https://decentrahealth-server.herokuapp.com/HospitalSignup', {
                values
              })
              .then(function (response) {
                console.log(response);
                    if(response.status===200)
                    {
                        navigate(`/Admin/:${values.hospitalRegnumber}`, {state:{values:{doctors: response.data.doctors, hospitalName: response.data.Name, hospitalRegnumber: response.data.regNo, patients: response.data.patients}}}, { replace: true });
                    }
                    else if(response.status==204)
                    {
                        alert("Hospital already registered");
                    }
                    else
                    alert("Something went wrong");
              })
              .catch(function (error) {
                console.log(error);

              });
        }
        else
        {
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
    {/* <div className="form-container">
    <form className="register-form" >
   
        <input
            onChange={handleChange}
            value={values.hospitalName}
            id="hospitalName"
            className="form-field"
            type="text"
            placeholder="hospitalName"
            name="hospitalName"
        />
        {submitted && !values.hospitalName ? <span id="first-name-error">Please enter a first name</span> : null}

        <input
            onChange={handleChange}
            value={values.hospitalRegnumber}
            id="hospitalRegnumber"
            className="form-field"
            type="text"
            placeholder="hospitalRegnumber"
            name="hospitalRegnumber"
        />
        {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter a last name</span> : null}
   
        <p>Type of Hospital</p>
          <input onChange={handleChange} type="radio" id="gov" name="type" value="gov"/>
          <label for="gov">Government</label>
          <input onChange={handleChange} type="radio" id="private" name="type" value="private"/>
          <label for="private">Private</label>
        
        <input
            onChange={handleChange}
            value={values.password}
            id="password"
            className="form-field"
            type="text"
            placeholder="password"
            name="password"
        />
        {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
        <input
            onChange={handleChange}
            value={values.cpassword}
            id="cpassword"
            className="form-field"
            type="text"
            placeholder="Confirm password"
            name="cpassword"
        />
        {values.cpassword!==values.password ? <span id="password-error">Passwords do not match</span> : null}
        {submitted && !values.cpassword ? <span id="password-error">Please Confirm Password</span> : null}
        
        <button className="form-field" type="button" onClick={handlesubmit}>
            Submit
        </button>
    </form>
</div> */}

<div className='container'>
<section className="vh-90" style={{backgroundColor: "#eee"}}>
  <div className="container h-90">
    <div className="row d-flex justify-content-center align-items-center h-90">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius:"25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" for="form3Example1c">First Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" for="form3Example3c">Last Number</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" for="form3Example3c">Last Number</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:"white", color:"blue"}}>Register</button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href='/HospitalLogin' class="fw-bold text-body"><u>Login here</u></a></p>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</>
)}

export default HospitalSignupPage;

