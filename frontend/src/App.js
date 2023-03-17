import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Components
import Home from "./components/Home/Home";
import DoctorLogin from './components/HealthCareOperator/DoctorLogin';
import HospitalSignupPage from "./components/HospitalSignupPage";
import HospitalLogin from "./components/HospitalLogin";
import Admin from "./components/Admin";
import PatientLoginIntro from "./components/PatientPage/PatientLoginIntro";
import PatientLoginOtp from "./components/PatientPage/PatientLoginOtp";
import PatientLoginFinger from "./components/PatientPage/PatientLoginFinger";
import Patient from "./components/PatientPage/Patient";
import PatientPage from "./components/PatientPage";
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import PatientPageHospital from "./components/PatientPageHospital"
import PatientPageDoctor from "./components/PatientPageDoctor";
import Doctor from "./components/HealthCareOperator/Doctor";
import Appbar from "./components/Navbar/Appbar";
import ViewReports from "./components/ViewReports";
import Creators from "./components/Creators";
import InputSymptoms from "./components/InputSymptoms";
import RecommendedDocs from "./components/RecommendedDocs";

//Material UI
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Box >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/DoctorLogin" element={<DoctorLogin />} />
            <Route path="/HospitalSignupPage" element={<HospitalSignupPage />} />
            <Route path="/HospitalLogin" element={<HospitalLogin />} />
            <Route path="/Admin/:id" element={<Admin />} />
            <Route path="/PatientLogin" element={<PatientLoginIntro />} />
            <Route path="/PatientLoginOtp" element={<PatientLoginOtp />} />
            <Route path="/PatientLoginFingerprint" element={<PatientLoginFinger />} />
            <Route path="/Patient/:phone" element={<Patient />} />
            <Route path="/PatientPage/:id" element={<PatientPage />} />
            <Route path="/fileUpload/:aadhar" element={<FileUpload />} />
            <Route path="/FileDownload" element={<FileDownload />} />
            <Route path="/PatientPageDoctor/:aadhar" element={<PatientPageDoctor />} />
            <Route path="/PatientPageHospital/:aadhar" element={<PatientPageHospital />} />
            <Route path="/Doctor" element={<Doctor />} />
            <Route path="/InputSymptoms" element={<InputSymptoms />} />
            <Route path="/ViewReports" element={<ViewReports />} />
            <Route path="/RecommendedDocs" element={<RecommendedDocs />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/Creators" element={<Creators />} />
          </Routes>
          </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
