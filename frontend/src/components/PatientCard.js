import React, { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCard({ aadhar, name, age, gender }) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) => {
        e.preventDefault();
        setSubmitted(true);
        axios.get('http://localhost:8000/getHospitals')
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    navigate(`/PatientPage/:${aadhar}`, { state: { values: { hospitals: response.data, Name: name, Aadhar: aadhar, Age: age, Gender: gender } } });
                }
            });
    }

    const myStyle = {
        width: '60rem',
        backgroundColor: 'white'
    }

    return (
        <>
            <td>{aadhar}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>Book Appointment</button>
            <button className="btn btn-primary" style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 20px" }}>Remove</button>
        </>)
}

export default PatientCard;