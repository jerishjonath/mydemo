"use client"
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './underconstruction.json'; // Path to your Lottie animation file
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "src/components/commingsoon/commingsoon.scss"
import "./commingsoon1"



const Commingsoon = () => {

  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Lottie 
                options={defaultOptions}
                // height={400}
                // width={400}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  We are almost there
                </h3>
                <p className=" text-3xl font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Stay tuned for something amazing..
                </p>
              </div>
              <FlipClockCountdown to={new Date().getTime() + 6 * 24 * 3600 * 1000 + 5000} className='flip-clock'/>
    <div id="cover">
      <div id="ntf-area">
        <div id="ntf-btn">Notify me</div>
        <div id="ntf-form-cover">
          <form method="post" className="tb" autoComplete="off">
            <div className="td" id="td-inp">
              <input type="email" name="email" id="email-inp" placeholder="Your email address" spellCheck="false" required />
            </div>
            <div className="td" id="td-pre"><button type="submit" id="submit-btn" disabled>Send</button></div>
          </form>
        </div>
        <div id="f-msg">Thank you!</div>
      </div>
    </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commingsoon;
