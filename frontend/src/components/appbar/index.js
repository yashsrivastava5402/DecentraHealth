import React from "react";
import { useNavigate } from "react-router";

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <>
         {/* <nav className="text-black flex justify-between">
      <img
        src="https://www.pngmart.com/files/8/Health-PNG-Transparent-Image.png"
        className="h-20 mx-3"
        alt=""
      />
      <span className="font-serif text-5xl pt-2 pr-[400px]  text-white-300">DecentraHealth</span>
      <ul className="mx-14 my-6 flex space-x-11 justify-end text-2xl">
        <li className="cursor-pointer hover:text-[#1CB7B9]" onClick={() => {navigate("/");}}>Home</li>
        <li className="cursor-pointer hover:text-[#1CB7B9]" onClick={() => {navigate("/PatientLogin");}}>Patient</li>
        <li className="cursor-pointer hover:text-[#1CB7B9]" onClick={() => {navigate("/DoctorLogin");}}>Doctors</li>
        <li className="cursor-pointer hover:text-[#1CB7B9]" onClick={() => {navigate("/HospitalLogin");}}>Hospitals</li>
        <li className="cursor-pointer hover:text-[#1CB7B9]" onClick={() => {navigate("/");}}>Contact</li>
      </ul>
    </nav> */}

    <nav className="navbar navbar-expand-lg  mt-0 mb-0" style={{backgroundColor:'transparent'}} >
  <div className="container-fluid">
    <a className="navbar-brand text-6xl cursor-pointer text-[#1CB7B9]" onClick={() => {navigate("/");}}>DecentraHealth</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="mx-4 cursor-pointer text-2xl  hover:text-[#1CB7B9] " onClick={() => {navigate("/");}}>Home</p>
        </li>
        <li className="nav-item">
          <p className="mx-4 cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => {navigate("/PatientLogin");}}>Patient</p>
        </li>
        <li className="nav-item">
          <p className="mx-4 cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => {navigate("/DoctorLogin");}}>Doctor</p>
        </li>
        <li className="nav-item">
          <p className="mx-4 cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => {navigate("/HospitalLogin");}}>Hospital</p>
        </li>
        <li className="nav-item">
          <p className="mx-4 cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => {navigate("/");}}>Contact</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}