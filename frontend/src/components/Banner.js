import React from "react"
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styles/banner";


export default function Banner(){
// const theme=useTheme();
//   const matches=useMediaQuery(theme.breakpoints.down('md'))
  return (
    // <BannerContainer>
    // <BannerImage src="image.jpg"/>
    //   <BannerContent>
    //     <BannerTitle variant="h8">
    //      Got Files?
    //     </BannerTitle>
    //     <BannerDescription variant="subtitle">
    //      Got you!
    //      Here to help you to maintain unending records of Medical Care
    //      <br/>
    //      <h4>If you are a Doctor go to left</h4>
    //      <h4>If you are a Patient go to right</h4>
    //     </BannerDescription>
    //   </BannerContent>
    // </BannerContainer>
    <>
    <main class="bg-fuchsia-200 flex h-screen">
      <div class="main py-36 pl-20">
        <div class="text-8xl">Best Health Care!!</div>
        <p class="py-3 w-1/3 text-xl text-[#af9c4d]">
          All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
          The Best thing about this, Its Free!!!
          Bringing Innovations In Health And Learning To The Global Community!
          </p>
        <div class="my-10 text-3xl">
          <button class="bg-purple-800 px-10 py-4 rounded-3xl text-white hover:text-slate-900 hover:bg-[#93bc9c]">Patient</button>
          <button class="bg-purple-800 px-10 py-4 rounded-3xl text-white hover:text-slate-900 hover:bg-[#93bc9c] mx-3">Doctor</button>
        </div>
        <img class="w-2/5 absolute left-[900px] top-32" src="/image-from-rawpixel-id-2285047-original.png" alt="" />
        </div>
    </main>
    <footer>
    </footer>
    </>
    
  );
}