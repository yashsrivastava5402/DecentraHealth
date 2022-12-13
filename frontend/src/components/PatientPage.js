import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import HospitalCard from './HospitalCard';
import FileDownload from './FileDownload';
import Button from "@mui/material/Button";

function PaitentPage(){
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    //const { aadhar } = useParams();
    const {state} = useLocation();
    const [files, setFiles] = useState([]);
    //console.log(state);
    function showDocs(e){
        e.preventDefault();
        setSubmitted(true);
        axios.post('http://localhost:8000/viewFiles', {aadhar: state.values.Aadhar}).then((response) => {
            console.log(response.data);
                setFiles((prevState) => {
                    return [prevState,...response.data];
                })
        })
    }

    const myStyle = {
        width: '67rem',
        backgroundColor: 'white'
      }
    
      return (
        <>
          <div className="container my-5">
            <div className="card text-left border-dark text-black" style={myStyle}>
              <div className="card-header  border-dark">
                Available Hospitals
              </div>
              <div className="card-body">
                <table class="table table-hover border-success">
                  <thead>
                    <tr>
                      <th scope="col">Hospital Id</th>
                      <th scope="col">Name</th>
    
                    </tr>
                  </thead>
                  <tbody>
                    {state.values.hospitals.map((hospital) => {
                      console.log(hospital);
                      return <>
                        <tr>
                        <HospitalCard id={hospital.regNo} name={hospital.Name} state={state} />
                        </tr>
                        
                      </>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    }
    
    
export default PaitentPage;