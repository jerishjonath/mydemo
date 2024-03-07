"use client"
import React from 'react';

const Image1 = ({ src, alt, ...rest }) => {
  return (
    <img src={"/images/parallax/stars.png"} alt={alt} {...rest} />
  );
};

export default Image1;