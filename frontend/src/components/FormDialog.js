// import * as React from 'react';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import axios from 'axios';
// import {useState,useEffect} from 'react'
// import { useLocation, useParams } from 'react-router-dom'
// import PatientCard from './PatientCard';
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Dialog } from '@material-ui/core'



// export default function FormDialog() {
//     const params = useParams();
//   console.log(params);
//   const [values, setValues] = useState({
//     Name:"",
//     Aadhar:"",
//     Age:"",
//     Gender: "",
//     Phone: params.phone,
//     patients: []
//   });
//   const[submitted,setSubmitted]=useState(false);
//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setValues({
//         ...values,
//         [name]: value,
//     });
// };
// useEffect(() => {


//     axios.post('http://localhost:8000/getPatients',
//     {Phone:values.Phone}
//     )
//       .then(function (response) {
//         console.log(response);
//         setValues(prevState => ({
//           ...prevState, 
//           patients: response.data
//        }));
//       });
// }, []);
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button size="large" type='submit'  variant="contained" 
//         fullWidth style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",
//         backgroundColor: "#013220",
//         color:"white",
//         justifyContent:"center", float:"right"}} onClick={handleClickOpen}>
//         Add Members
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Fill the details </DialogTitle>
//         <DialogContent>
//           <DialogContentText>

//           </DialogContentText>
//            <TextField
//             onChange={handleChange}
//             value={values.Name}
//             id="Name"
//             class="form-field"
//             type="text"
//             placeholder="Name"
//             name="Name"
//             fullWidth
//         />

//         {submitted && !values.Name ? <span id="Name-error">Please enter hospital 
//          number</span> : null}
//          <br/>

//         <TextField
//             onChange={handleChange}
//             value={values.Aadhar}
//             id="Aadhar"
//             class="form-field"
//             type="text"
//             placeholder="Aadhar Number"
//             name="Aadhar"
//             fullWidth
//         />
//         {submitted && !values.Aadhar ? <span id="Aadhar-error">Please enter Aadhar number</span> : null}
//         <br/>

//         <TextField
//             onChange={handleChange}
//             value={values.Age}
//             id="Age"
//             class="form-field"
//             type="number"
//             placeholder="Age"
//             name="Age"
//             fullWidth
//         />
//         {submitted && !values.Age ? <span id="Age-error">Please enter Age</span> : null}
// <br/>
//         <TextField
//             onChange={handleChange}
//             value={values.Gender}
//             id="Gender"
//             class="form-field"
//             type="text"
//             placeholder="Gender"
//             name="Gender"
//             fullWidth
//         />
//         {submitted && !values.Gender ? <span id="Gender-error">Please enter Gender</span> : null}
//         <Button size="large" type='submit'  variant="contained" 
//         fullWidth style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",
//         backgroundColor: "#013220",
//         color:"white",
//         justifyContent:"center"}} onClick={(e)=>{
//           e.preventDefault();
//           setSubmitted(true);
//             axios.post('http://localhost:8000/addPatients',
//             values
//             )
//               .then(function (response) {
//                 console.log(response);

//                 // setValues(values);
//                 setValues(prevState => ({
//                   ...prevState, 
//                   patients: response.data.patients
//                }));
//                 console.log(values);
//               });
//       }}>Add Patient</Button>
// <br/>
//         </DialogContent>

//           { values.patients.map((patient)=>{
//            console.log(patient);
//          return <PatientCard aadhar={patient.Aadhar} name={patient.Name} age={patient.Age} gender={patient.Gender}/> 
//      })}
//         <DialogActions>

//        </DialogActions>







//       </Dialog>
//     </div>
//   );
// }

import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PatientCard from './PatientCard';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Dialog } from '@material-ui/core'



export default function FormDialog({ phone, handlenew, setSubmitted, handleChange, handleNull, submitted, values }) {
  // const [values, setValues] = useState({
  //   Name:"",
  //   Aadhar:"",
  //   Age:"",
  //   Gender: "",
  //   Phone: phone
  // });
  // const[submitted,setSubmitted]=useState(false);
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setValues({
  //       ...values,
  //       [name]: value,
  //   });
  //};

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => { 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="large" type='submit'  variant="contained" fullWidth style={{height:"60px",width:"150px",alignItems:"center", backgroundColor: "#af9c4d", color:"white", justifyContent:"center",  position: 'absolute',  top:"0px", left:"780px"}} onClick={handleClickOpen}> Add Members </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill the details </DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            onChange={handleChange}
            value={values.Name}
            id="Name"
            class="form-field"
            type="text"
            placeholder="Name"
            name="Name"
            fullWidth
          />
          {submitted && !values.Name ? <span id="Name-error">Please enter hospital
            number</span> : null}
          <br />

          <TextField
            onChange={handleChange}
            value={values.Aadhar}
            id="Aadhar"
            class="form-field"
            type="text"
            placeholder="Aadhar Number"
            name="Aadhar"
            fullWidth
          />
          {submitted && !values.Aadhar ? <span id="Aadhar-error">Please enter Aadhar number</span> : null}
          <br />

          <TextField
            onChange={handleChange}
            value={values.Age}
            id="Age"
            class="form-field"
            type="number"
            placeholder="Age"
            name="Age"
            fullWidth
          />
          {submitted && !values.Age ? <span id="Age-error">Please enter Age</span> : null}
          <br />
          <TextField
            onChange={handleChange}
            value={values.Gender}
            id="Gender"
            class="form-field"
            type="text"
            placeholder="Gender"
            name="Gender"
            fullWidth
          />
          {submitted && !values.Gender ? <span id="Gender-error">Please enter Gender</span> : null}
          <Button size="large" type='submit' variant="contained"
            fullWidth style={{
              height: "60px", width: "150px", margin: "70px", alignItems: "center",
              backgroundColor: "#013220",
              color: "white",
              justifyContent: "center"
            }} onClick={(e) => {
              e.preventDefault();
              setSubmitted(true);
              handleClose();
              axios.post('http://localhost:8000/addPatients',
                values
              )
                .then(function (response) {
                  console.log(response);
                  handlenew(response.data.patients);
                  // setValues(values);
                  //   setValues(prevState => ({
                  //     ...prevState, 
                  //     patients: response.data.patients
                  //  }));
                  console.log(values);
                });
              // handleNull();
            }}>Add Patient</Button>
          <br />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}