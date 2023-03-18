import React from 'react'
import { useLocation } from 'react-router-dom';

//MUI
import { Box, styled, Typography } from '@mui/material';

const Component = styled(Box)(({ theme }) => ({
  margin: '80px auto 0 auto',
  width: '90%',
  '&>h4':{
    marginTop: '20px'
  },
  [theme.breakpoints.down('md')]: {
    margin: '60px auto 0 auto',
  }
}))

const LowerComponent = styled(Box)(({ theme }) => ({
  margin: '30px  0',
  [theme.breakpoints.down('md')]: {
    
  }
}))

const Statistics = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    
  }
}))

const Analysis = styled(Box)(({ theme }) => ({
  '&>h6,&>h5':{
    marginTop: '30px'
  },
  [theme.breakpoints.down('md')]: {
    
  }
}))

export default function PatientInsight() {
  const { state } = useLocation();
  return (
    <Component>
      <Typography variant='h3' textAlign={'center'}>Patient Insight</Typography>
      <Typography variant='h4'>Hello, {state.Name}</Typography>
      <LowerComponent>
        <Statistics>
          <Typography variant='h5' fontWeight={600}>Statistics</Typography>
        </Statistics>
        <Analysis>
          <Typography variant='h5' fontWeight={600}>Analysis</Typography>
          <Typography variant='h6'>Your Levels in Sugar, Blood Pressure and low level in : Creatinine indicates a 17% chance of having a diabetes in future. </Typography>
        </Analysis>
      </LowerComponent>
    </Component>
  )
}
