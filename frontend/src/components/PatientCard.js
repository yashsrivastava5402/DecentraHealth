import React, { useState } from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCard({ aadhar, name, age, gender}) {

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
        const goToRecc = (e) => {
            e.preventDefault();
            setSubmitted(true);
            navigate(`/InputSymptoms`, { state: { Name: name, Aadhar: aadhar, Age: age, Gender: gender} });
            }
        return (
            <>
                <td>{aadhar}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 30px" }}>Book Appointment</button>
                <button className='btn btn-primary' style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 10px" }} onClick={()=>{ navigate(`/ViewReports`,{state:aadhar})}} >View Reports</button>
                <button className="btn btn-primary" onClick={goToRecc}style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 10px" }}>Get Recommendations</button>
            </>)
    }

    export default PatientCard;