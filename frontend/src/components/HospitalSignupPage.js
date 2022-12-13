import React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios'
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
      <div className="card-body text-black">
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
      </div>
    </>
  )
}

export default HospitalSignupPage;

