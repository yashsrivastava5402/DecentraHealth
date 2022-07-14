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
        axios.post('http://decentrahealth-server.herokuapp.com/viewFiles', {aadhar: state}).then((response) => {
            console.log(response.data);
                setFiles((prevState) => {
                    return [...prevState,...response.data];
                })
        })
    }, [])
    

  return (
    <>
    <FileDownload aadhar={state} files={files} />
    </>
)}

