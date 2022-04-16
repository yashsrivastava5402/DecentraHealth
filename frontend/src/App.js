import Home from "./components/Home";
import DoctorLogin from "./components/DoctorLogin";
import HospitalSignupPage from "./components/HospitalSignupPage";
import HospitalLogin from "./components/HospitalLogin";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/DoctorLogin" element={<DoctorLogin />} /> 
      <Route path="/HospitalSignupPage" element={<HospitalSignupPage />} /> 
      <Route path="/HospitalLogin" element={<HospitalLogin />} /> 
      <Route path="/Admin/:id" element={<Admin />} />
      <Route path="/" element={<Navigate replace to="/home" />} />    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
