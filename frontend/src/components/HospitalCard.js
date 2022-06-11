import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function HospitalCard({id,name,state}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        console.log("state", state);
        const values ={
            Name: state.values.Name,
            Aadhar: state.values.Aadhar,
            Age: state.values.Age,
            Gender: state.values.Gender,
            HospitalID: id
        }
        axios.post('https://decentrahealth-server.herokuapp.com/addPatientHospital', values)
        .then(function (response){
            console.log(response);
            if(response.status === 200){
                alert("Applied succesfully!!");
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
            Apply
        </button>
        </div>
        <div>
            remove button
        </div>
    </div>
  )
}

export default HospitalCard;