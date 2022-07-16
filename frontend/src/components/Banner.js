import React from "react"
import { useNavigate } from "react-router";

export default function Banner(){
const navigate = useNavigate();
  {document.body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/black-thread-light.png')";}
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

    <main className="flex h-[491px]">
      <div className="py-20 pl-20 xl:w-1/2 md:w-1/3 sm:w-full">
      <div>
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
        <div>
        <img className="w-1/3 absolute left-[950px] top-44 img fluid" src="/home.png" alt="" />
        </div>
        </div>
    </main>
    <footer className="text-center text-white">
      <div className="center mb-9 my-24">
      <p className="text-center my-6">
        © 2022 Copyright
      </p>
      </div>
     
    </footer>
    </>  
  );
}