import { useState } from 'react'
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import { Grid, Paper, Avatar, Button, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Dialog from '@material-ui/core/Dialog';

function HospitalLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        hospitalRegnumber: "",
        password: "",
        patients: [] });
    const paperStyle = { padding: 20, height: '73vh', width: 348, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (values.hospitalRegnumber.trim() !== "" && values.password.trim() !== "") {
            // const res = await axios.post('http://decentrahealth-server.herokuapp.com /getPatientsHospital',{HospitalID: hospitalRegnumber} );
            axios.post('http://decentrahealth-server.herokuapp.com /hospitalLogin',
                values
            )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                        navigate(`/Admin/:${values.hospitalRegnumber}`, { state: { values: { doctors: response.data.doctors, hospitalName: response.data.Name, hospitalRegnumber: response.data.regNo, patients: response.data.patients } } });
                    }
                    else if (response.status == 203) {
                        alert("Wrong Password,Try again");
                    }
                    else if (response.status == 204) {
                        alert("Hospital not found!");
                    }
                    else
                        alert("Something went wrong");
                })
                .catch(function (error) {
                    console.log(error);

                });
        }
        else {
            alert("Please Fill every field");
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

return (
    <Dialog open maxWidth='sm'>
    <Paper style={paperStyle}>
    <Grid align='center'>
    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>

        <br />
        <br />
        <div class="form-container">
            <form class="register-form" >
            <TextField onChange={handleChange} value={values.hospitalRegnumber} id="hospitalRegnumber" class="form-field" type="text" placeholder="Hospital Reg Number" name="hospitalRegnumber" margin="normal" fullWidth />        
            {submitted && !values.hospitalRegnumber ? <span id="hospitalRegnumber-error">Please enter hospital registration number</span> : null}
            <br />
            <br />
            <TextField onChange={handleChange} value={values.password} id="password" class="form-field" type="text" placeholder="Password" name="password" margin="normal" fullWidth/>
            {submitted && !values.password ? <span id="password-error">Please enter password</span> : null}
            <br />
            <br />
            <Button type="submit" variant="contained" color="success" style={{color: "white",backgroundColor: "#013220",}} fullWidth onClick={handlesubmit}> Submit </Button>
            </form>
        </div>
    </Grid>
    </Paper>
    </Dialog>
    )
}

export default HospitalLogin;