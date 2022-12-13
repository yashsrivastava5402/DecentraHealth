import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCardDoctor({aadhar,name}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        axios.post('http://localhost:8000/viewFiles', {aadhar: aadhar}).then((response) => {
            console.log(response.data);
            if(response.status===200)
                navigate(`/PatientPageDoctor/${aadhar}`, {state: {values: response.data}});
        })
    }

  return (
  <>
     {/* <div>
           {aadhar}
        </div>
        <div>
            {name}
        </div>
        <div>
        <button type="button" onClick={goToPatient}>
            Submit
        </button>
        </div>
        <div> 
            remove button 
         </div> */}
            <td>{aadhar}</td>
            <td>{name}</td>
            <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>View Reports</button>
            <button className="btn btn-primary" style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 20px" }}>Remove</button>
  </>)

}

export default PatientCardDoctor;