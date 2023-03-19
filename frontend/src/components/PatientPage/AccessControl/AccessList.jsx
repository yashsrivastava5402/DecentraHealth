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
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl></TableCell>
            <TableCell><Button style={{ background: '#207868', color: '#fff' }}>Approve</Button><Button style={{ background: '#D3455B', color: '#fff', marginLeft: '30px' }}>Revoke</Button></TableCell>
        </Tablerow>

    )
}

export default AccessList