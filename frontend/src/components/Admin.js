import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DoctorCard from './DoctorCard';
import DoctorLogin from './DoctorLogin';
import { generate } from './utils/passgen';
import Button from "@mui/material/Button";

const addDoctor = function(values) {
  // await axios.post('/addDoctor', values)
  // .then ((response) => {
  //     if(response.status===200)
  //     {
          
  //     }
  //     else if(response.status==203)
  //     {
  //         //reject("Wrong Password,Try again");
  //     }
  //     else if(response.status==204)
  //     {
  //         //reject("Hospital not found!");
  //     }
  //     else
  //     //reject("Something went wrong");
  // })
  // .catch(function (error) {
  //   reject(error);

  // });
  // return new Promise( (resolve, reject) => {

  //     const{ newDoctorId, newPassword }=generate(values);
  //   //   setValues({
  //   //     ...values,
  //   //     doctorId: newDoctorId,
  //   //     password:newPassword
  //   // });
  //   resolve({ newDoctorId, newPassword });
  // });
    
}

function Admin() {
  const {state}=useLocation();
  console.log(state);
  const [values, setValues] = useState({
    Name:"",
    UPRN:"",
    doctorId:"",
    hospitalRegnumber: state.values.hospitalRegnumber,
    hospitalName: state.values.hospitalName,
    password:""
  });
  const [doctors, setdoctors] = useState(state.values.doctors);
  // console.log(state.values);
  console.log("outide: ", doctors);
  const[submitted,setSubmitted]=useState(false);
  //const { hospitalRegnumber } = useParams();
  // const {state}=useLocation();
  // setdoctors(state);
  // console.log(state);
  // console.log(doctors);
  // axios.post('http://localhost:8000/getDoctors',
  //   hospitalRegnumber
  // )
  //   .then(function (response) {
  //     console.log(response);
  //     if (response.status === 200) {
  //       navigate(`/Admin/:${values.hospitalRegnumber}`, { replace: true });
  //     }
  //     else if (response.status == 203) {
  //       alert("Wrong Password,Try again");
  //     }
  //     else if (response.status == 204) {
  //       alert("Hospital not found!");
  //     }
  //     else
  //       alert("Something went wrong");
  //   })
  //   .catch(function (error) {
  //     console.log(error);

  //   });
  const handleChange = (e) => {
    e.preventDefault();
    console.log("values");
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
};
useEffect(() => {

  axios.post('http://localhost:8000/getDoctors',
  state.values
  )
    .then(function (response) {
      console.log(response);
      setdoctors(response.data);
    });
}, []);

  return (
    <div>Admin{values.hospitalRegnumber}
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
            value={values.UPRN}
            id="UPRN"
            class="form-field"
            type="text"
            placeholder="UPRN number"
            name="UPRN"
        />
        {submitted && !values.UPRN ? <span id="UPRN-error">Please enter UPRN number</span> : null}
        <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={(e)=>{
          e.preventDefault();
          setSubmitted(true);
          const{ newDoctorId, newPassword }=generate(values);
          // setValues((prevState) => {
          //   return {
          //     ...prevState,
          //       doctorId: newDoctorId,
          //       password: newPassword
          //   }
          // });
          values.doctorId = newDoctorId;
          values.password = newPassword;
          setValues(values);
       
          //addDoctor(values).then (function (received){
            
            axios.post('http://localhost:8000/addDoctors',
            values
            )
              .then(function (response) {
                console.log(response);
              // function Admin() {
                //ßconsole.log(error);
               
                //doctors.push(state.values.doctors);
                // doctors.push(values);
                console.log(values);
                setdoctors((prevState) => {
                  return [...prevState, values];
                });
                console.log(doctors);
          
              });
      }}>Add Doctor</Button>
            </form>
    { doctors.map((doctor)=>{
        return <DoctorCard id={doctor.doctorId} name={doctor.Name}/>
     })}
    </div>
   


  )
}

export default Admin