// import axios from 'axios';
// import React,{useState,useEffect} from 'react'
// import { useLocation, useParams } from 'react-router-dom'
// import PatientCard from './PatientCard';
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Dialog } from '@material-ui/core'
// import FormDialog from './FormDialog';


// function Patient() {
   

    
//   return (
    
//     <FormDialog/>
    
   
  
  
    
        
           
           
    
//     // </Grid>
//     //  </Dialog>
   


//   )
// }

// export default Patient
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PatientCard from './PatientCard';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Dialog } from '@material-ui/core'
import FormDialog from './FormDialog';


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
  // const handleNull = () => {
  //   setValues({
  //     ...values,
  //     Name: "",
  //     Aadhar: "",
  //     Age: "",
  //     Gender: "",
  //     Phone: params.phone,
  //     patients: values.patients
  // });
  // }
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
};
useEffect(() => {


  axios.post('http://localhost:8000/getPatients',
  {Phone:values.Phone}
  )
    .then(function (response) {
      console.log(response);
      setValues(prevState => ({
        ...prevState, 
        patients: response.data
     }));
    });
}, []);
  const handlenew=(newpatient)=>{
    // newpatient.preventDefault();
    console.log(newpatient)
    // setValues({
    //     ...values,
    //     Name: newpatient.Name,
    //     Aadhar: newpatient.Aadhar,
    //     Age: newpatient.Age,
    //     Gender: newpatient.Gender,
    //     Phone: newpatient.Phone
    // });
    setValues(prevState => ({
      ...prevState, 
      patients: newpatient
   }));
   console.log(values);
//    useEffect(() => {


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
  } 
    
  return (
    <>
       <FormDialog phone={values.Phone} handlenew={handlenew} setSubmitted={setSubmitted} handleChange={handleChange}  submitted={submitted} values={values}/>
    { values.patients.map((patient)=>{
      console.log(patient);
    return <PatientCard aadhar={patient.Aadhar} name={patient.Name} age={patient.Age} gender={patient.Gender}/> 
})}
   
    </>
 
  
  
    
        
           
           
    
    // </Grid>
    //  </Dialog>
   


  )
}

export default Patient