import Home from "./components/Home";
import DoctorLogin from "./components/DoctorLogin";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/DoctorLogin" element={<DoctorLogin />} /> 
      <Route path="/" element={<Navigate replace to="/home" />} />    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
