import {React,useState} from 'react'

import { useNavigate } from "react-router";
function HospitalLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        hospitalName: "",
        hospitalRegnumber: "",
        type:"",
        password:""
        

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
            value={values.hospitalRegnumber}
            id="hospitalRegnumber"
            class="form-field"
            type="text"
            placeholder="hospitalRegnumber"
            name="hospitalRegnumber"
        />
        {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter a last name</span> : null}
   
        <input
            onChange={handleChange}
            value={values.password}
            id="password"
            class="form-field"
            type="text"
            placeholder="Confirm password"
            name="password"
        />
        {submitted && !values.password ? <span id="password-error">Please enter a last name</span> : null}
        
        <button class="form-field" type="button" onClick={handlesubmit}>
            Submit
        </button>
    </form>
</div>)
}

export default HospitalLogin