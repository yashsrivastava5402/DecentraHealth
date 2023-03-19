import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

//MUI
import { Box, styled, Typography, Grid, Button } from '@mui/material';

const Component = styled(Box)(({ theme }) => ({
    margin: '80px auto 0 auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: '60px auto 0 auto',
    }
  }))
  
  const Container = styled(Grid)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  }))
  
  const Image= styled('img')(({ theme }) => ({
    width:'70%',
    marginLeft:'60px',
    marginTop: '1%',
    [theme.breakpoints.down('md')]: {
      width : '50%',
      margin: '0px 0 0 25%'
    }
  }))
  
  const LeftComponent = styled(Grid)(({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('lg')]: {
        width : '100%',
        margin: '0'
      }
  }))
  
  const Buttons = styled(Button)(({ theme }) => ({
        width:'45%',
        margin: '60px 0 20px 100px',
        backgroundColor: '#6558F5',
        color: '#fff',
        fontWeight : '500',
        height: '40px',
        fontSize: '16px',
        [theme.breakpoints.down('lg')]: {
          width : '50%',
          margin:'10px auto 10px auto'
        }
    }))

export default function PatientAccessControl() {
    const { state } = useLocation();
    return (
        <Component>
            <Typography variant='h3' textAlign={'center'}>Access Control</Typography>
            <Container container>
                <LeftComponent item lg={6} md={4} sm={12} xs={12}>
                    <Typography variant='h4'  style={{margin:'60px 0px 20px 100px'}}>Hello, {state.Name}</Typography>
                    <Buttons variant='contained'>Access Requests</Buttons>
                    <Buttons variant='contained'>Active granted requests</Buttons>
                    <Buttons variant='contained'>Request History</Buttons>
                </LeftComponent>
                <Grid item lg={6} md={8} sm={12} xs={12} style={{alignItems:'center'}}>
                    <Image src='/accessControl.jpg' alt="Sample image" />
                </Grid>
            </Container>
        </Component>
    )
}
