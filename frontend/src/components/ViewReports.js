import axios from 'axios';
import React,{useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import FileDownload from './FileDownload';
import { useEffect } from 'react';


export default function ViewReports() {
    const {state} = useLocation();

    console.log(state);
    const [files, setFiles] = useState([]);
    useEffect(() => {
        axios.post('https://decentrahealth-server.herokuapp.com/viewFiles', {aadhar: state}).then((response) => {
            console.log(response.data);
                setFiles((prevState) => {
                    return [...prevState,...response.data];
                })
        })
    }, [])  

    const myStyle = {
    width: '67rem',
    backgroundColor: 'white'
  }

    

  return (
    <>
    <div>
            <div className="container my-5">
            <div className="card text-left border-dark text-black" style={myStyle}>
              <div className="card-header  border-dark">
                <h1>Previous Records of Aadhar : {state}</h1>
              </div>
              <div className="card-body">
                <table class="table table-hover border-success">
                  <thead>
                    <tr>
                      <th scope="col">File Name</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                  <FileDownload aadhar={state} files={files}/>
                  </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>

    </>
)}