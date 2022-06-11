import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCardHospital({aadhar,name, age, gender}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        axios.post('https://decentrahealth-server.herokuapp.com/getDoctors', {hospitalRegnumber: regNo}).then((response) => {
            console.log(response.data);
            if(response.status===200)
                navigate(`/PatientPageHospital/${aadhar}`, {state: {values: response.data, name: name, age: age, gender: gender}});
        })
    }
  return (
    <div>
        <div>
           {aadhar}
        </div>
        <div>
            {name}
        </div>
        <div>
        <button type="button" onClick={goToPatient}>
            Submit
        </button>
        </div>
        <div>
            remove button
        </div>
    </div>
  )
}

export default PatientCardHospital;