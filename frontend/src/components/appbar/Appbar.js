import React from "react";
import { useNavigate } from "react-router";

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg  mt-0 mb-0" style={{ backgroundColor: 'transparent' }} >
        <div className="container-fluid">
          <a className="navbar-brand text-6xl cursor-pointer text-[#1CB7B9] hover:text-[#1CB7B9]" onClick={() => { navigate("/"); }}>DecentraHealth</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div  className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 space-x-16">
              <li className="nav-item">
                <p className=" cursor-pointer text-2xl  hover:text-[#1CB7B9] " onClick={() => { navigate("/"); }}>Home</p>
              </li>
              <li className="nav-item">
                <p className="cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => { navigate("/PatientLogin"); }}>Patient</p>
              </li>
              <li className="nav-item">
                <p className="cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => { navigate("/DoctorLogin"); }}>Doctor</p>
              </li>
              <li className="nav-item">
                <p className="cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => { navigate("/HospitalLogin"); }}>Hospital</p>
              </li>
              <li className="nav-item">
                <p className="cursor-pointer text-2xl  hover:text-[#1CB7B9]" onClick={() => { navigate("/Creators"); }}>Creators</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}