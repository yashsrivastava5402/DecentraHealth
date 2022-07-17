//import auth from '../firebase';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert} from "react-bootstrap";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'


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
    const phoneNumber = '+' +values.phone;
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
      navigate(`/Patient/:+${values.phone}`);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      setError(error.message);
      console.error("OTP Submission error!");
    });
  }


  return (
    <>
      <div className="card-body text-black" >
        <div className="row justify-content-center my-5">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5"> Patient Login</p>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="mx-1 mx-md-5">
              <Form onSubmit={onSignInSubmit} style={{ display: !flag ? "block" : "none" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className="d-flex flex-row align-items-center mb-2 mt-6 mx-5">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label">Mobile No</label>
                      <PhoneInput country={'in'} value={values.phone} style={{width:"500px"}} inputStyle={{width :'446px'}}
                        onChange={(e) => {
                          console.log(e);
                          setValues({
                            ...values,
                            phone: e,
                          });
                        }} /><br />
                      <div id="sign-in-button"></div>
                    </div>
                  </div>

                </Form.Group>
                
                <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                <button type="submit" variant="contained" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} >Send OTP</button>
                </div>

              </Form>

              <Form onSubmit={onOTPSubmit} style={{ display: flag ? "block" : "none" }}>

                <Form.Group controlId="formBasicOtp">
                  <div className="d-flex flex-row align-items-center mb-2 mt-5 mx-5">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label">OTP</label>
                      <input type="otp" value={values.OTP} className='form-control' onChange={(e) => { setValues({ ...values, OTP: e.target.value, }); }} />
                      <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                      </div>
                    </div>
                  </div>
                </Form.Group>
              
                <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                <button type="submit" variant="contained" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} >Login</button>
                </div>
               
              </Form>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="/patientlogin.png"
              className=' mx-56 my-10' alt="Sample image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientLogin;


