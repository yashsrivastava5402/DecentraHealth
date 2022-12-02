import axios from 'axios';
import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import { Input } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment } from '@mui/material';
import logo from './logo.png'
function Symptoms() {
//   const { state } = useLocation();
//   console.log(state.inf)
// const influencerId=state.inf._id;
  const [amount, setamount] = useState("");
const handleChange=(e)=>{
    
    setamount(e.target.value)
}
const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
        
    }
    catch(err)
    {
   
      console.log(err);
    }
    
 

}
  return (
   
  <form onSubmit={handleSubmit}>

    <div style={{marginTop:"100px",marginLeft:"40px",marginRight:"40px"}}>
    <img style={{marginLeft:"450px",marginRight:"40px"}}src={logo} alt="Logo" />
    <h1>Tell Your Symptoms</h1>
    {/* <OutlinedInput placeholder="Please enter text" />

    <TextField  placeholder='Symptoms space separated' onChange={handleChange}/> */}
    {/* <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            onChange={handleChange}
            aria-describedby="outlined-weight-helper-text"
          /> */}
    <TextField fullWidth label="Write space separated symptoms"  onChange={handleChange} />
    </div>
  </form>
     
   
  )
}

export default Symptoms