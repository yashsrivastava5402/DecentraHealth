import React from 'react'
import { useNavigate } from "react-router";
import { Container, ThemeProvider } from '@material-ui/core';
import theme from '../styles/theme';
import Appbar from './appbar';
import Banner from './Banner';
import CardMake from './CardMake';


// import Navbar from '/Navbar';


function Home() {
    const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
    <div
    maxWidth="xl"
    sx={{
backgroundColor:"#fff"
    }}>
      <Appbar/>
      
<Banner/>
<CardMake style={{backgroundColor:"#fff"}}/>
<CardMake />

    



  

     
      
           
           {/* <Button size ="large" variant="contained" 
           type='submit' 
      //           style={{
      //   color:"white",
      //   backgroundColor: "#013220",
      //   margin:"auto",
      //   right:"10",
      //  }}
           style={{height:"60px",width:"150px",margin:"40px 100px 40px 400px",textAlign:"center" ,alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white",}} 
          onClick={()=>{
          navigate("/DoctorLogin");
      }}>Doctor</Button>
      <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"40px 100px 40px 250px",alignItems:"center",justifyContent:"center",backgroundColor: "#013220"}} onClick={()=>{
          navigate("/PatientLogin");}}>Patient</Button>
           <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"40px 100px 40px 250px",alignItems:"center",justifyContent:"center",backgroundColor: "#013220"}} onClick={()=>{
          navigate("/HospitalLogin");}}>Hospital</Button> */}
         {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
    
           </div>

      
      </ThemeProvider>
 
    
  )
}

export default Home