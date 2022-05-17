//import auth from '../firebase';
import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router";
import { initializeApp } from 'firebase/app';
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
    const [values, setValues] = useState({
        phone: "",
        OTP: "",
    });
    const [submitted, setSubmitted] = useState(false);
    // const handlesubmitPhone = (e) => {
    //     e.preventDefault();
    //     setSubmitted(true);
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const configureCaptcha = () =>{
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
    const onSignInSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        configureCaptcha();
        const phoneNumber = "+" + values.phone;
        console.log(phoneNumber);
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
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error);
            console.log("SMS not sent.");
            });
    }

    const onOTPSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        const code = values.OTP;
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          alert("User is verified");
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.error("OTP Submission error!");
        });
    }


  return (
      <div>
<div class="form-container">
    <form class="register-form" >
   
        <input
            onChange={handleChange}
            value={values.phone}
            id="phone"
            class="form-field"
            type="text"
            placeholder="PhoneNumber"
            name="phone"
        />
        {/* {submitted && !values.phone ? <span id="phone-error">Please enter the phone number</span> : null} */}
        <button class="form-field" type="button" onClick={onSignInSubmit}>
            Submit
        </button>
    </form>
    <form class="otp" >
        <input
            onChange={handleChange}
            value={values.OTP}
            id="otp"
            class="form-field"
            type="text"
            placeholder="OTP"
            name="OTP"
        />
        {/* {submitted && !values.OTP ? <span id="otp-error">Please enter the otp</span> : null} */}


        <button class="form-field" type="button" onClick={onOTPSubmit}>
            Submit
        </button>
    </form>
</div>
<div id = "sign-in-button"></div>
</div>
  )
}

export default PatientLogin;


// configureCaptcha = () =>{
//     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           onSignInSubmit();
//         }
//       }, auth);
// }