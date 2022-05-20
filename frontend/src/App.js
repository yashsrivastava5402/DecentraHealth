import Home from "./components/Home";
import DoctorLogin from "./components/DoctorLogin";
import HospitalSignupPage from "./components/HospitalSignupPage";
import HospitalLogin from "./components/HospitalLogin";
import Admin from "./components/Admin";
import PatientLogin from "./components/PatientLogin";
import Patient from "./components/Patient";
import PatientPage from "./components/PatientPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import FileUpload from "./components/FileUpload";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/DoctorLogin" element={<DoctorLogin />} /> 
      <Route path="/HospitalSignupPage" element={<HospitalSignupPage />} /> 
      <Route path="/HospitalLogin" element={<HospitalLogin />} /> 
      <Route path="/Admin/:id" element={<Admin />} />
      <Route path="/PatientLogin" element={<PatientLogin />} />
      <Route path="/Patient/:phone" element={<Patient />} />
      <Route path="/PatientPage/:id" element={<PatientPage />} />
      <Route path="/FileUpload" element={<FileUpload />} />
      <Route path="/" element={<Navigate replace to="/home" />} />    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
