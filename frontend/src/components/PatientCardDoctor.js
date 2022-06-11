import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCardDoctor({aadhar,name,age,gender}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        axios.post('https://decentrahealth-server.herokuapp.com/viewFiles', {aadhar: aadhar}).then((response) => {
            console.log(response.data);
            if(response.status===200)
                navigate(`/PatientPageDoctor/${aadhar}`, {state: {values: response.data}});
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

export default PatientCardDoctor;