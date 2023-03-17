import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

function PatientIntroPage() {

    const { state } = useLocation();
    return (
      <>
        <Box style={{marginTop: 80}}>
          {state.Name}
        </Box>
    </>
  )
}

export default PatientIntroPage;
