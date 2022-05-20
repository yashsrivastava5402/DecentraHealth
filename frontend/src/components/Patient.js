import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PatientCard from './PatientCard';
import Button from "@mui/material/Button";

function Patient() {
  const params = useParams();
  console.log(params);
  const [values, setValues] = useState({
    Name:"",
    Aadhar:"",
    Age:"",
    Gender: "",
    Phone: params.phone,
    patients: []
  });
  const[submitted,setSubmitted]=useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
};
  return (
    <div>Patient{values.Phone}
    <form class="register-form" >
      <input
            onChange={handleChange}
            value={values.Name}
            id="Name"
            class="form-field"
            type="text"
            placeholder="Name"
            name="Name"
        />
        {submitted && !values.Name ? <span id="Name-error">Please enter hospital registration number</span> : null}
   
        <input
            onChange={handleChange}
            value={values.Aadhar}
            id="Aadhar"
            class="form-field"
            type="text"
            placeholder="Aadhar Number"
            name="Aadhar"
        />
        {submitted && !values.Aadhar ? <span id="Aadhar-error">Please enter Aadhar number</span> : null}

        <input
            onChange={handleChange}
            value={values.Age}
            id="Age"
            class="form-field"
            type="number"
            placeholder="Ager"
            name="Age"
        />
        {submitted && !values.Age ? <span id="Age-error">Please enter Age</span> : null}

        <input
            onChange={handleChange}
            value={values.Gender}
            id="Gender"
            class="form-field"
            type="text"
            placeholder="Gender"
            name="Gender"
        />
        {submitted && !values.Gender ? <span id="Gender-error">Please enter Gender</span> : null}

        <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={(e)=>{
          e.preventDefault();
          setSubmitted(true);
            axios.post('http://localhost:8000/addPatients',
            values
            )
              .then(function (response) {
                console.log(response);
                values.patients = response.data.patients;
                // setValues(values);
                setValues((prevState) => {
                  return [...prevState, values.patients];
                });
                console.log(values);
              });
      }}>Add Patient</Button>
            </form>
     { values.patients.map((patient)=>{
        console.log(patient);
         return <PatientCard aadhar={patient.Aadhar} name={patient.Name} age={patient.Age} gender={patient.Gender}/> 
     })}
    </div>
   


  )
}

export default Patient