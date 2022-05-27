import React, {useState} from 'react'
import { useNavigate } from "react-router";
import axios from 'axios';

function PatientCardDoctor({aadhar,name,age,gender}) {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        axios.post('http://localhost:8000/viewFiles', {aadhar: aadhar}).then((response) => {
            console.log(response.data);
            const files = [];
            for(var i = 0; i < response.data.length; i++){
                var binary = response.data[i].content.data;
                var blob = new Blob([binary], {type: "pdf"});
                var blobUrl = URL.createObjectURL(blob);
                blobUrl = blobUrl.replace("blob:", "");
                var link = `http://localhost:8000/fileDownload/${aadhar}/${response.data[i].fileName}`;
                var newObj = {
                    name: response.data[i].name,
                    file: link,
                    filename: response.data[i].fileName
                }
                files.push(newObj);
                console.log("blobUrl", blobUrl);
            }
            if(response.status===200)
                navigate(`/PatientPageDoctor/${aadhar}`, {state: {values: files}});
        })
    }
  return (
    <div>
        <div>
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
        </div>
    </div>
  )
}

export default PatientCardDoctor;