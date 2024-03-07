"use client"
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './bulb.json'; // Path to your Lottie animation file
import "src/components/lotties/lotties.scss"

const LottieAnimation1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    <div className='LottieAnimation1'>
      <Lottie 
        options={defaultOptions}
      />
    </div>
  );
};

export default LottieAnimation1;
