import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router";

function DoctorLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        doctorId: "",
        doctorPass: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = () => {

        setSubmitted(true);
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
            value={values.doctorId}
            id="doctorId"
            class="form-field"
            type="text"
            placeholder="doctorId"
            name="doctorId"
        />
        {submitted && !values.doctorId ? <span id="first-name-error">Please enter a first name</span> : null}

        <input
            onChange={handleChange}
            value={values.doctorPass}
            id="doctorPass"
            class="form-field"
            type="text"
            placeholder="doctorPass"
            name="doctorPass"
        />
        {submitted && !values.doctorPass ? <span id="doctorPass-error">Please enter a last name</span> : null}


        <button class="form-field" type="button" onClick={handlesubmit}>
            Submit
        </button>
    </form>
</div>
  )
}

export default DoctorLogin