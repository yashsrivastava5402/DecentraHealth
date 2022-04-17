import axios from 'axios';
import React,{useState} from 'react'
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
  return new Promise( (resolve, reject) => {

      const{ newDoctorId, newPassword }=generate(values);
      values.doctorId = newDoctorId;
      values.password = newPassword;
    //   setValues({
    //     ...values,
    //     doctorId: newDoctorId,
    //     password:newPassword
    // });
    resolve(values);
  });
    
}

function Admin() {
  const {state}=useLocation();
  const [values, setValues] = useState({
    Name:"",
    UPRN:"",
    doctorId:"",
    hospitalRegnumber: state.values.regNo,
    hospitalName: state.values.hospitalName,
    password:""
  });
  const [doctors, setdoctors] = useState([]);
  const[submitted,setsubmitted]=useState(false);
  const { hospitalRegnumber } = useParams();
  
  console.log(state);
  console.log(doctors);
  setdoctors(state.values.doctors);
  
//   axios.post('http://localhost:8000/getDoctors',
//   hospitalRegnumber
// )
//   .then(function (response) {
//     console.log(response);
//     if (response.status === 200) {
     
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
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
};
  return (
    <div>Admin{hospitalRegnumber}
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
    <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={()=>{
          addDoctor(values).then (function (received){
            setValues(received);
            doctors.push(received);
            console.log(received);
            setdoctors(doctors);
            axios.post('http://localhost:8000/addDoctor',
              received
            )
              .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                  console.log("Doctor succesfully added.")
                }
                else if (response.status == 203) {
                  alert("Doctor already present");
                }
                else
                  alert("Something went wrong");
              })
              .catch(function (error) {
                console.log(error);
          
              });
          });
      }}>Add Doctor</Button>
    { doctors.map((doctor)=>{
       <DoctorCard id={doctor.doctorId} name={doctor.Name}/>
     })}
    </div>
   


  )
}

export default Admin