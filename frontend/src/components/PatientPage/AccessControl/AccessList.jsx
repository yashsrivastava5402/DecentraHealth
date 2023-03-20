import { FormControl, InputLabel, MenuItem, Select, TableCell, TableRow, styled, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material'
const Tablerow = styled(TableRow)`
    &>th{
     font-size: 16px;
     font-weight: 600;
    }
`
function AccessList({ Name, SNo }) {
    const [datas, setDatas] = useState('true');
    return (
        <>
        {
            datas === 'true' ?
            <Tablerow>
            < TableCell > { SNo }</TableCell >
            <TableCell>{Name}</TableCell>
            <TableCell><FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="level"
                >
                    <MenuItem value={0}>Level 0</MenuItem>
                    <MenuItem value={1}>Level 1</MenuItem>
                </Select>
            </FormControl></TableCell>
            <TableCell><Button  onClick={()=>{
                    setDatas(false);
            }} style={{ background: '#207868', color: '#fff',height: '40px',width:'140px',fontWeight :'600',fontSize: '16px'}}>Approve</Button>
            <Button style={{ background: '#D3455B', color: '#fff', marginLeft: '30px',height: '40px',width:'140px',fontWeight :'600',fontSize: '16px' }}>Revoke</Button></TableCell>
        </Tablerow> : <TableRow ><Typography variant='h4' style={{margin: '20px 0px 0px 20px ',}}>No Incoming Request!!!</Typography></TableRow>
        }
        </>
    )
}

export default AccessList