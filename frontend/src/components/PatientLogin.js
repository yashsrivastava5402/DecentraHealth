//import auth from '../firebase';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Grid, Paper, Avatar, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Dialog from '@material-ui/core/Dialog';
import PhoneInput from "react-phone-number-input";


import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8gABqn8ga_qJtrPN0sZxED-16ErYY_ZQ",
  authDomain: "decentrahealth-6f444.firebaseapp.com",
  projectId: "decentrahealth-6f444",
  storageBucket: "decentrahealth-6f444.appspot.com",
  messagingSenderId: "995410992318",
  appId: "1:995410992318:web:5322a491d0fef76c9f12ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authen = getAuth(app);
authen.languageCode = "en";

function PatientLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    phone: "",
    OTP: "",
  });
  const [flag, setFlag] = useState(false);
  // const handlesubmitPhone = (e) => {
  //     e.preventDefault();
  //     setSubmitted(true);
  // };
  const paperStyle = { padding: 20, height: '65vh', width: 500, margin: "0 auto", border: '2px solid #fff', }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const configureCaptcha = () => {
    //console.log("Recaptcha Verified!")
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //onSignInSubmit();
        console.log("Recaptcha Verified!")
      },
      defaultCountry: "IN"
    }, authen);
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();

    configureCaptcha();
    const phoneNumber = values.phone;
    console.log("phonenu", phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Please enter a valid phone number!");
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    console.log(authen);


    // const auth = getAuth();
    signInWithPhoneNumber(authen, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP sent");
        setFlag(true);
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
        setError(error.message);
        console.log("SMS not sent.");
      });
  }

  const onOTPSubmit = (e) => {
    e.preventDefault();
    setError("");

    const code = values.OTP;
    if (code === "" || code === null) return;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user));
      // alert("User is verified");
      navigate(`/Patient/:${values.phone}`);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      setError(error.message);
      console.error("OTP Submission error!");
    });
  }


  return (
    <Dialog open maxWidth='sm' >
      {/* <Grid style={{backgroundColor:"light green"}}> */}
      <Paper style={paperStyle}>
      <Grid align='center'>
      <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
      <h1 className="mb-3">Patient Login</h1> <br /></Grid> {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={onSignInSubmit} style={{ display: !flag ? "block" : "none" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <PhoneInput style={{ height: "30px", width: "310px"}}
        // onlyCountries={["in"]}
        // // maxWidth='md'
        // // inputStyle='normal'
        // masks={{
        //   in: "..........",
        // }}
        value={values.phone}
        onChange={(e) => {
          console.log(e);
          setValues({
            ...values,
            phone: e,
          });
        }}
        placeholder="Enter Phone Number" /> <br />
        <div id="sign-in-button"></div>
        
        </Form.Group>

        <Button type="submit" variant="contained" style={{color: "white",backgroundColor: "#013220"}} fullWidth href='/'>Cancel</Button> <br /> <br />
        <Button type="submit" variant="contained" color="success" style={{color: "white",backgroundColor: "#013220"}} fullWidth>Send Otp</Button>

      </Form>

      <Form onSubmit={onOTPSubmit} style={{ display: flag ? "block" : "none" }}>

        <Form.Group controlId="formBasicOtp">
        <Form.Control type="otp" value={values.OTP} placeholder="Enter OTP" onChange={(e) => { setValues({ ...values, OTP: e.target.value,});}} style={{height: "30px",width: "340px"}}/><br /><br />
        </Form.Group>

        <Button variant="contained"style={{color: "white",backgroundColor: "#013220"}} fullWidth href='/'>Cancel</Button><br /><br />

        <Button type="submit" variant="contained" style={{ color: "white",backgroundColor: "#013220",}}fullWidth>Verify</Button>
      </Form>
      </Paper>
    </Dialog>
)}

export default PatientLogin;


