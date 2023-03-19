import React from 'react';
import { useLocation} from 'react-router-dom';

//MUI
import { Box, Button, Typography, styled, TableContainer, TableCell, TableRow, TableHead, Table,TableBody, TextField } from "@mui/material";

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
    width:85%;
`

const InputSearch = styled(Box)`
    margin-top:20px;
    &>button{
      color:white;
      background-color: #6558F5;
      width:100px;
      height:50px;
      font-size:16px;
    },
    &>div{
      margin:0 30px 0 0;
      width: 40%;
    }
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

export default function AccessRequest() {

  const {state} = useLocation();
  return (
    <ParentComponent>
    <Title>
        Book an Appointment
    </Title>
    <LowerComponent>
        <Typography variant='h4'>Hello, {state.Name}</Typography>
        <Tablecontainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <Tablerow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Doctor Name</TableCell>
                        <TableCell>Access Level</TableCell>
                        <TableCell>Time Duration</TableCell>
                        <TableCell>Grant Access</TableCell>
                    </Tablerow>
                </TableHead>
                <TableBody>
                <Tablerow>
                        <TableCell>1</TableCell>
                        <TableCell>Dr. Aditya</TableCell>
                        <TableCell>Level 1</TableCell>
                        <TableCell>1 hour</TableCell>
                        <TableCell><Button style={{background :'#207868',color:'#fff'}}>Approve</Button><Button style={{background :'#D3455B',color:'#fff'}}>Revoke</Button></TableCell>
                    </Tablerow>
                </TableBody>
            </Table>
        </Tablecontainer>
    </LowerComponent>
</ParentComponent>
  )
}
