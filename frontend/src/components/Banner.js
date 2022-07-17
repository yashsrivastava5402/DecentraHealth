import React from "react"
import { useNavigate } from "react-router";

export default function Banner() {
  const navigate = useNavigate();
  { document.body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/black-thread-light.png')"; }
  return (
    <>
      {/* <div class="flex">
  <div class="sm:w-full md:w-1/2 lg:w-1/3 xl:w-full mb-4" >
        <div className="text-8xl">Best Health Care!!</div>
        <p className="py-3 text-xl text-[#454545]" style={{fontStyle: "italic"}}>
          All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
          The Best thing about this, Its Free!!!
          Bringing Innovations In Health And Learning To The Global Community!
          </p>
        <div className="my-10 text-3xl">
          <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1]" onClick={() => {navigate("/PatientLogin");}}>Patient</button>
          <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1] mx-3" onClick={() => {navigate("/DoctorLogin");}}>Doctor</button>
        </div>

  </div>
  <div className="w-1/3 ">
  <img className="w-1/3 absolute left-[950px] top-44 img fluid" src="/home.png" alt="" />
  <img  src="/home.png"/>
  </div>

</div> */}

      {/*    
    <div className="card-body text-black" >
        <div className="row justify-content-center my-5">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5 px-5">
          <div className="text-8xl">Best Health Care!!</div>
        <p className="py-3  text-xl text-[#454545]" style={{fontStyle: "italic"}}>
          All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
          The Best thing about this, Its Free!!!
          Bringing Innovations In Health And Learning To The Global Community!
          </p>
        <div className="my-10 text-3xl">
          <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1]" onClick={() => {navigate("/PatientLogin");}}>Patient</button>
          <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1] mx-3" onClick={() => {navigate("/DoctorLogin");}}>Doctor</button>
        </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
            <img src="/home.png"
              className='w-3/5' alt="Sample image" />
          </div>
        </div>
      </div>
    <footer className="text-center text-white">
      <div className="center mb-9 my-24">
      <p className="text-center my-6">
        © 2022 Copyright
      </p>
      </div>
     
    </footer> */}

      <div className="card-body text-black" >
        <div className="row justify-content-center my-5 mb-0"  >
          <div className="col-md-10 col-lg-5 col-xl-6 order-2 order-lg-1 mt-32" >
            <div className="text-8xl">Best Health Care!!</div>
            <p className="py-3  text-xl text-[#454545]" style={{ fontStyle: "italic" }}>
              All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
              The Best thing about this, Its Free!!!
              Bringing Innovations In Health And Learning To The Global Community!
            </p>
            <div className="my-10 text-3xl">
              <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1]" onClick={() => { navigate("/PatientLogin"); }}>Patient</button>
              <button className="bg-[#1983A2] px-10 py-4 rounded-2xl text-white hover:text-slate-900 hover:bg-[#86B2C1] mx-3" onClick={() => { navigate("/DoctorLogin"); }}>Doctor</button>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  ">
            <img src="/home.png" className="mx-auto my-0"
              alt="Sample image" width="570"  />

          </div>
        </div>
        <footer className="text-center text-white">
      <div className="center mb-9 ">
      <p className="text-center">
        © 2022 Copyright
      </p>
      </div>
     
    </footer>
      </div>
    </>
  );
}