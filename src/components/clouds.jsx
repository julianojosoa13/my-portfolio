import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveClouds = keyframes`
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
`;
const Cloud = styled.div`
  position: absolute;
  top: ${() => Math.random() * 80 + 10}%; 
  left: ${() => Math.random() * 100}%; /* Randomize the starting horizontal position */
  width: ${() => Math.random() * 100 + 50}px; 
  height: ${() => Math.random() * 50 + 20}px; 
  background-color: white;
  border-radius: 50%;
  animation: ${moveClouds} ${() => Math.random() * 20 + 10}s linear infinite;
`;

const CloudsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Clouds = ({cloudsCount=15}) => {
  const numClouds = cloudsCount; // Number of clouds
  const clouds = Array.from({ length: numClouds }).map((_, index) => (
    <Cloud key={index} style={{ animationDelay: `${Math.random() * 10}s` }} />
  ));

  return <CloudsContainer>{clouds}</CloudsContainer>;
};

export default Clouds; 

