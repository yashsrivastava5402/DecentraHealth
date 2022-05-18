import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCard({id,name}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        axios.get('http://localhost:8000/getHospitals')
        .then(function (response){
            console.log(response);
            if(response.status === 200){
                navigate(`/PatientPage/:${id}`, {state: {hospitals: response.data}});
            }
        });
    }
  return (
    <div>
        <div>
           {id}
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

export default PatientCard;