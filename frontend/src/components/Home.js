import React from 'react'
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
function Home() {
    const navigate = useNavigate();
  return (
      <div className="App" style={{justifyContent:"center"}}>
           <h1>Welcome to DecentraHealth</h1>
           <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={()=>{
          navigate("/DoctorLogin");
      }}>Doctor</Button>
      <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={()=>{
          navigate("/PatientLogin");}}>Patient</Button>
      </div>
   
    
  )
}

export default Home