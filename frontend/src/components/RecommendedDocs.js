import * as React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import DoctorcardRecomm from './DoctorcardRecomm';
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
  console.log(state);
  const [row,setrow]=useState([]);
 useEffect(async () => {
    console.log(state.disease);
    const response=await axios.post('https://decentrahealth-backend.onrender.com/getDoctorsRecommend', {disease: state.disease});
    console.log(response.data);

  setrow([...row,...response.data])
  console.log(row);
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
                return <tr><DoctorcardRecomm Dname={doctor.Name} speciality={doctor.speciality} id={doctor.doctorId} name={doctor.Name} aadhar={state.Aadhar} patientName={state.Name} age={state.Age} gender={state.Gender} /></tr>
            })}
        </tbody>
    </table>
    </div>
    
  );
}