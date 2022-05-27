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
            for(var i = 0; i < response.data.length; i++){
                var binary = response.data[i].content.data;
                var blob = new Blob([binary], {type: "pdf"});
                var blobUrl = URL.createObjectURL(blob);
                blobUrl = blobUrl.replace("blob:", "");
                var link = `http://localhost:8000/fileDownload/${state.values.Aadhar}/${response.data[i].fileName}`;
                var newObj = {
                    name: response.data[i].name,
                    file: link,
                    filename: response.data[i].fileName
                }
                setFiles((prevState) => {
                    return [...prevState, newObj];
                })
                console.log("blobUrl", blobUrl);
            }
        })
    }

    return (
        <div>
            <div>
                { state.values.hospitals.map((hospital)=>{
                    console.log(hospital);
                    return <HospitalCard id={hospital.regNo} name={hospital.Name} state={state}/> 
                })}
            </div>
            <div>
                <Button onClick={showDocs}>View Reports</Button>
               <FileDownload aadhar={state.values.Aadhar} files={files}/>
            </div>
        </div>
    )
}

export default PaitentPage