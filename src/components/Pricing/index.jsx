"use client"

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import 'src/styles/index.scss';
import ParticlesM from "./particles1"
import ParticlesN from "./particles2"
import LottieAnimation1 from '../lotties/lottieanimation1'
import "src/components/Pricing/parallax.scss"




const Pricing = ({ type }) => {

  
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // Choose the planets image based on the theme
  const planetsImage = theme === 'dark' ? '/images/parallax/planets-dark.png' : '/images/parallax/sun.png';
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


  
  return (       
    <>
   
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
          type==="services" 
          ? 
          color: theme === 'light' ? '#87CEEB' :"linear-gradient(180deg, #111132, #0c0c1d)" ,        
      }}>
         


        {particletheme}
        <motion.h1 style={{ y: ytext }} className='maintitle'>NOOBIKIDS|DIGITAL</motion.h1>
        <motion.div
        style={{
          backgroundImage: `url(${Mountain})`,
        }} 
        className="mountains">
          <LottieAnimation1/>
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








