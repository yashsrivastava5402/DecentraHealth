import React from 'react'
import { useLocation } from 'react-router-dom'
import PatientCardDoctor from './AccessModes/PatientCardDoctor';
import { useParams } from 'react-router-dom';
import FullAccess from './AccessModes/FullAccess';
import Insights from './AccessModes/Insights';
import Requested from './AccessModes/Requested';

//MUI
import { Box, Typography, styled, TableContainer, TableCell, TableRow, TableHead, Table,TableBody } from "@mui/material";

//CSS
const ParentComponent = styled(Box)`
    margin-top : 80px;
`
const Title = styled(Typography)`
    font-size: 40px;
    color: #207868;
    text-align: center;   
`
const LowerComponent = styled(Box)`
    margin: 30px auto 0 auto;
    width:90%;
`
const Tablecontainer = styled(TableContainer)`
    margin-top: 40px;
`
const Tablerow = styled(TableRow)`
    &>th{
     font-size: 16px;
     font-weight: 600;
    }
`
function Doctor() {
    // const { aadhar } = useParams();
    const { state } = useLocation();
    console.log(state);
    //console.log(state);

    return (
        <>
            <ParentComponent>
                <Title>
                    Doctor Dashboard
                </Title>
                <LowerComponent>
                    <Typography variant='h4'>Hello, Dr. Aakash</Typography>
                    <Tablecontainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <Tablerow>
                                    <TableCell>Patient's Name</TableCell>
                                    <TableCell>Aadhar</TableCell>
                                    <TableCell>Request Access Level</TableCell>
                                    <TableCell>View Reports</TableCell>
                                </Tablerow>
                            </TableHead>
                            <TableBody>
                                {state.patients.map((patient) => (
                                    <PatientCardDoctor aadhar={patient.Aadhar} name={patient.Name}  doctorId={state.doctorId} />
                                ))}
                                {state.reqPatients.map((patient) => (
                                    <Requested aadhar={patient.Aadhar} name={patient.Name}   />
                                ))}
                                {state.insPatients.map((patient) => (
                                    <Insights aadhar={patient.Aadhar} name={patient.Name}  />
                                ))}
                                {state.fullPatients.map((patient) => (
                                    <FullAccess aadhar={patient.Aadhar} name={patient.Name}  />
                                ))}
                            </TableBody>
                        </Table>
                    </Tablecontainer>
                </LowerComponent>
            </ParentComponent>
        </>
    )
}

export default Doctor;
