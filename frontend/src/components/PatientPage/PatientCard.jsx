import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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
    const goToRecc = (e) => {
        e.preventDefault();
        setSubmitted(true);
        navigate(`/InputSymptoms`, { state: { Name: name, Aadhar: aadhar, Age: age, Gender: gender } });
    }

    const goToPatientIntroPage = (e)=>{
        e.preventDefault();
        // setSubmitted(true);
        navigate("/PatientIntroPage", { state: { Name: name, Aadhar: aadhar, Age: age, Gender: gender } });
    }

    return (
        <>
            <Card sx={{ display: 'flex', width:'350px'}} onClick={goToPatientIntroPage}>
            <CardMedia component="img" sx={{ width: '23%' }} image="/userprofile.png"/>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {age} {gender}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" >
                            {aadhar}
                        </Typography>
                    </CardContent>
                </Box>
                
            </Card>
        </>)
}

export default PatientCard;

{/* <td>{aadhar}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 30px" }}>Book Appointment</button>
                <button className='btn btn-primary' style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 10px" }} onClick={()=>{ navigate(`/ViewReports`,{state:aadhar})}} >View Reports</button>
                <button className="btn btn-primary" onClick={goToRecc}style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 10px" }}>Get Recommendations</button> */}