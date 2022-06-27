import React from "react"
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styles/banner";


export default function Banner(){
const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <BannerContainer>
    <BannerImage src="image.jpg"/>
      <BannerContent>
        <BannerTitle variant="h8">
         Got Files?
        </BannerTitle>
        <BannerDescription variant="subtitle">
         Got you!
         Here to help you to maintain unending records of Medical Care
         <br/>
         <h4>If you are a Doctor go to left</h4>
         <h4>If you are a Patient go to right</h4>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
    
  );
}