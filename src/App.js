import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'react-lottie';

import myPicture from './me.jpg';
import animationData from './code.json'; // Import your Lottie file
import Dock from './components/dock';
import { FaPlay } from 'react-icons/fa';

import DrawerNavigation from './components/drawerNavigation'; 
import HamburgerButton from './components/hamburgerButton';
import Button from './components/Button';

const changeColor = keyframes`
  0% { background-color: #f0f9ff; } /* Lighter blue */
  20% { background-color: #ffe6f2; } /* Pink */
  40% { background-color: #fff9db; } /* Yellow */
  60% { background-color: #f4d4fe; } /* White */
  80% { background-color: #e4f7e7; } /* Green */
  100% { background-color: #f0f9ff; } /* Lighter blue */
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #3333ff;
  // animation: ${changeColor} 10s infinite alternate;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #333 }
`;

const Title = styled.h1`  
  font-family: "Dancing Script", cursive;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  overflow: hidden;
  border-right: 0.15em solid #333;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 3s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  z-index: 20;
`;

const Subtitle = styled.h2`
  font-family: "M PLUS Code Latin", monospace;
  font-size: 1.8rem;
  text-align: center;
  z-index: 20;
`;

const Picture = styled.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;

  z-index: 20;

  border: 5px solid #3498db; /* Solid blue border */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.2s; /* Smooth transition for hover effect */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const LottieAnimation = styled.div`
  width: 200px;
  height: 200px;
  z-index: 10
`;

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Wrapper>
      <HamburgerButton  onClick={toggleDrawer} />
      <DrawerNavigation show={drawerOpen} setShow={setDrawerOpen} />

      <Picture src={myPicture} alt="Juliano Josoa" />

      <Title>Hi, I am Juliano!</Title>
      <Subtitle>I am super excited to work with you!</Subtitle>

      <Button text="Take a tour" icon={<FaPlay />}/>

      <LottieAnimation>
        <Lottie options={defaultOptions} />
      </LottieAnimation>

      <Dock />
      {/* <Clouds cloudsCount={20}/> */}

    </Wrapper>
  );
};

export default App;
