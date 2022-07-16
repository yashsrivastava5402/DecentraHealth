import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCardHospital({aadhar,name, regNo, age, gender}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        console.log(regNo);
        axios.post('https://decentrahealth-server.herokuapp.com/getDoctors', {hospitalRegnumber: regNo}).then((response) => {
            console.log(response.data);
            if(response.status===200)
                navigate(`/PatientPageHospital/${aadhar}`, {state: {values: response.data, name: name, age: age, gender: gender}});
        })
    }
  return (
    <>
    <td>{aadhar}</td>
    <td>{name}</td>
    <td>{regNo}</td>
    <td>{age}</td>
    <td>{gender}</td>
    <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>Assign Doctor</button>
    <button className="btn btn-primary" style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 20px" }}>Remove</button>
    </>
  )
}

export default PatientCardHospital;