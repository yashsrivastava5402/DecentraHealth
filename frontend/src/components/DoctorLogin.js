import React from 'react'
import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from "react-router";
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Dialog from '@material-ui/core/Dialog';


const DoctorLogin=()=>{

    const paperStyle={padding :20,height:'73vh',width:348, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();
    const [values, setValues] = useState({
        doctorId: "",
        doctorPass: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        axios.post("http://decentrahealth-server.herokuapp.com/findDoctor", {email: values.doctorId, password: values.doctorPass})
        .then((response) => {
            if(response.status === 200){
                navigate(`/Doctor`, {state: {patients: response.data.patients}});
            }
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

return(
    <Dialog open maxWidth='xs'>
    <Grid>
    <Paper  style={paperStyle}>
    
    <Grid align='center'>
    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
    <h1>Doctor Login</h1>
    </Grid>

    <br/><br/>
    <TextField onChange={handleChange} value={values.doctorId} id="doctorId" class="form-field" type="text" placeholder="Doctor Id" name="doctorId" margin="normal" fullWidth />{submitted && !values.doctorId ? <span id="first-name-error">Please enter correct Id</span> : null} <br/>
        
    <TextField onChange={handleChange} value={values.doctorPass} id="doctorPass" class="form-field"type="text" placeholder="Doctor Password" name="doctorPass" margin="normal" fullWidth/> {submitted && !values.doctorPass ? <span id="doctorPass-error">Please enter correct password</span> : null} <br/><br/><br/>

    <Button type='submit'  variant="contained" style={{ color:"white", backgroundColor: "#013220"}} fullWidth onClick={handlesubmit}>Submit</Button><br/><br/>

    <Button  variant="contained"  style={{color:"white",backgroundColor: "#013220",}}fullWidth href='/'>Cancel</Button>    

    </Paper>
    </Grid>
    </Dialog>
    )
}

export default DoctorLogin;