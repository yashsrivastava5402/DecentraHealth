import * as React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import DoctorCard from './DoctorCard';
function createData(Did,Dname,Dspecialisation,hospital_name) {
  return {Did,Dname,Dspecialisation,hospital_name};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function RecommendedDocs() {
  const { state } = useLocation();
  const [row,setrow]=useState([]);
 useEffect(async () => {
    const response=await axios.post('http://localhost:8000/getDoctorsRecommend', state.disease);

  setrow([...row,response.data])
  
  }, [])
 
  return (
<div className="card-body">
    <table class="table table-hover border-success">
        <thead>
            <tr>
                <th scope="col">Doctor Id</th>
                <th scope="col">Doctor Name</th>
                <th scope="col" style={{color:'red'}}>Speciality</th>
            </tr>
        </thead>
        <tbody>
            {row.map((doctor) => {
                return <tr><DoctorCard Dname={doctor.Name} speciality={doctor.speciality} id={doctor.doctorId} name={doctor.Name} aadhar={state.aadhar} patientName={state.name} age={state.age} gender={state.gender} /></tr>
            })}
        </tbody>
    </table>
    </div>
    
  );
}