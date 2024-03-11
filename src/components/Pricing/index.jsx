"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import ParticlesM from "./particles1"
import ParticlesN from "./particles2"
import "src/components/Pricing/parallax.scss"
import Lottie from 'react-lottie';
import animationData from './newtreeanimation.json'; // Path to your Lottie animation file

const Pricing = ({ type }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // Choose the planets image based on the theme
  const planetsImage = theme === 'dark' ? '/images/parallax/planets-dark.png' : '/images/parallax/sun1.png';
  const particletheme = theme === 'dark' ? (<ParticlesN/>) : (<ParticlesM/>);
  const starsImage = theme === 'dark' ? '/images/parallax/stars.png' :"/images/parallax/stars.png";

  const Mountain =  '/images/parallax/mountains.png'; 

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yplanets = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const ystars = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  if (!isClient) {
    return null;
  }

  return (       
    <>
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
          type==="services" 
          ? 
          color: theme === 'light' ? '#ffeaba' :"linear-gradient(180deg, #111132, #0c0c1d)" ,        
      }}>
         

        {particletheme}
        <motion.h1 style={{ y: ytext }} className='maintitle'>NOOBIKIDS <span className='maintitle2'>DIGITAL</span></motion.h1>
        <motion.div
        style={{
          backgroundImage: `url(${Mountain})`,
        }} 
        className="mountains">            
        <div className='LottieAnimation1'>
        <Lottie 
          options={defaultOptions}
          height={700}px
          width={600}
        />
      </div>

        </motion.div>

        

        <motion.div
  style={{
    y:yplanets,
    backgroundImage: `url(${planetsImage})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'bottom',
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    // zIndex: 2,
    // overflow: 'hidden',
  }}
  className="planets"
></motion.div>
<motion.div 
style={{ 
  x: ystars,
  backgroundImage: `url(${starsImage})`,

}} className="stars">
</motion.div>
      </div>
    </>
  );
};

export default Pricing;
