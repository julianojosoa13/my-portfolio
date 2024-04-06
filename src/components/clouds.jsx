import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveClouds = keyframes`
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-1000);
  }
`;

const Cloud = styled.div`
  position: absolute;
  top: ${() => Math.random() * 80 + 10}%; /* Random vertical position */
  left: 0; /* Start at the left edge of the screen */
  width: ${() => Math.random() * 100 + 50}px; /* Random width */
  height: ${() => Math.random() * 50 + 20}px; /* Random height */
  background-color: white;
  border-radius: 50%;
  animation: ${moveClouds} ${() => Math.random() * 20 + 10}s linear infinite; /* Random speed */
`;

const CloudsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Clouds = () => {
  const numClouds = 5; // Number of clouds
  const clouds = Array.from({ length: numClouds }).map((_, index) => (
    <Cloud key={index} style={{ animationDelay: `${Math.random() * 10}s` }} />
  ));

  return <CloudsContainer>{clouds}</CloudsContainer>;
};

export default Clouds;
