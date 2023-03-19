import { FormControl, InputLabel, MenuItem, Select, TableCell, TableRow ,styled} from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
const Tablerow = styled(TableRow)`
    &>th{
     font-size: 16px;
     font-weight: 600;
    }
`
function AccessList() {
    return (
        <Tablerow>
            <TableCell>1</TableCell>
            <TableCell>Dr. Aditya</TableCell>
            <TableCell><FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="level"
                >
                    <MenuItem value={0}>Level 0</MenuItem>
                    <MenuItem value={1}>Level 1</MenuItem>
                </Select>
            </FormControl></TableCell>
            <TableCell><Button style={{ background: '#207868', color: '#fff',height: '40px',width:'140px',fontWeight :'600',fontSize: '16px'}}>Approve</Button><Button style={{ background: '#D3455B', color: '#fff', marginLeft: '30px',height: '40px',width:'140px',fontWeight :'600',fontSize: '16px' }}>Revoke</Button></TableCell>
        </Tablerow>

    )
}

export default AccessList