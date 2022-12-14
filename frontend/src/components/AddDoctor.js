import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Dialog } from '@material-ui/core'

export default function AddDoctor({handleChange,values,onClick,submitted}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>
    <Button size="large" type='submit' variant="contained" fullWidth style={{ height: "60px", width: "150px", alignItems: "center", backgroundColor: "#af9c4d", color: "white", justifyContent: "center", position: 'absolute', top: "0px", right: "-170px" }} onClick={handleClickOpen}> Add Doctor </Button>
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration Form</DialogTitle>
    <DialogContent>
    <DialogContentText>

    </DialogContentText>

    <TextField onChange={handleChange} value={values.Name} id="Name" class="form-field" type="text" placeholder="Doctor Name" name="Name" fullWidth /> {submitted && !values.Name ? <span id="Name-error">Please enter Doctor Name</span> : null}
    <br />

    <TextField onChange={handleChange} value={values.UPRN} id="URPN" class="form-field" type="text" placeholder="UPRN Number" name="UPRN" fullWidth /> {submitted && !values.Name ? <span id="Name-error">Please enter UPRN Number</span> : null}
    <br />
    <TextField onChange={handleChange} value={values.speciality} id="speciality" class="form-field" type="text" placeholder="speciality" name="speciality" fullWidth /> {submitted && !values.Name ? <span id="Name-error">Please enter speciality</span> : null}
    <br />
    <Button size="large" type='submit' variant="contained"
            fullWidth style={{
              height: "60px", width: "150px", margin: "70px", alignItems: "center",
              backgroundColor: "#013220",
              color: "white",
              justifyContent: "center"
            }} onClick={onClick}>Add Doctor</Button>
    <br />

    </DialogContent>
    <DialogActions>
    </DialogActions>
    </Dialog>
    </div>
    );
}
