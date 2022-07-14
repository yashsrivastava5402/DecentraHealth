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
    <div class="form-container">
    <form class="register-form" >
   
        <input
            onChange={handleChange}
            value={values.hospitalName}
            id="hospitalName"
            class="form-field"
            type="text"
            placeholder="hospitalName"
            name="hospitalName"
        />
        {submitted && !values.hospitalName ? <span id="first-name-error">Please enter a first name</span> : null}

        <input
            onChange={handleChange}
            value={values.hospitalRegnumber}
            id="hospitalRegnumber"
            class="form-field"
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
            class="form-field"
            type="text"
            placeholder="password"
            name="password"
        />
        {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
        <input
            onChange={handleChange}
            value={values.cpassword}
            id="cpassword"
            class="form-field"
            type="text"
            placeholder="Confirm password"
            name="cpassword"
        />
        {values.cpassword!==values.password ? <span id="password-error">Passwords do not match</span> : null}
        {submitted && !values.cpassword ? <span id="password-error">Please Confirm Password</span> : null}
        
        <button class="form-field" type="button" onClick={handlesubmit}>
            Submit
        </button>
    </form>
</div>)
}

export default HospitalSignupPage