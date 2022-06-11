import {useState} from 'react'
import React from 'react';
import axios from 'axios'

import { useNavigate } from "react-router";
function HospitalLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        hospitalRegnumber: "",
        password:"",
        patients: []
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (values.hospitalRegnumber.trim() !== ""  && values.password.trim() !== "" )
        {
            
            // const res = await axios.post('https://decentrahealth-server.herokuapp.com/getPatientsHospital',{HospitalID: hospitalRegnumber} );

            axios.post('https://decentrahealth-server.herokuapp.com/hospitalLogin', 
                values
              )
              .then(function (response) {
                console.log(response);
                    if(response.status===200)
                    {
                        navigate(`/Admin/:${values.hospitalRegnumber}`, {state:{values:{doctors: response.data.doctors, hospitalName: response.data.Name, hospitalRegnumber: response.data.regNo, patients: response.data.patients}}});
                    }
                    else if(response.status==203)
                    {
                        alert("Wrong Password,Try again");
                    }
                    else if(response.status==204)
                    {
                        alert("Hospital not found!");
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
            value={values.hospitalRegnumber}
            id="hospitalRegnumber"
            class="form-field"
            type="text"
            placeholder="hospitalRegnumber"
            name="hospitalRegnumber"
        />
        {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter hospital registration number</span> : null}
   
        <input
            onChange={handleChange}
            value={values.password}
            id="password"
            class="form-field"
            type="text"
            placeholder="Confirm password"
            name="password"
        />
        {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
        
        <button class="form-field" type="button" onClick={handlesubmit}>
            Submit
        </button>
    </form>
</div>)
}

export default HospitalLogin