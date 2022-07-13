import React from 'react'
import { useNavigate } from "react-router";
import Banner from './Banner';

function Home() {
  const navigate = useNavigate();
  return (
    <>
        <Banner />
    </>
  )
}

export default Home;