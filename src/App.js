import React from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'react-lottie';

import myPicture from './me.jpg';
import animationData from './code.json'; // Import your Lottie file
import Dock from './components/dock';
import Clouds from './components/clouds';
import { Helmet } from 'react-helmet';

const changeColor = keyframes`
  0% { background-color: #f0f9ff; } /* Lighter blue */
  20% { background-color: #ffe6f2; } /* Pink */
  40% { background-color: #fff9db; } /* Yellow */
  60% { background-color: #ffffff; } /* White */
  80% { background-color: #e4f7e7; } /* Green */
  100% { background-color: #f0f9ff; } /* Lighter blue */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  animation: ${changeColor} 10s infinite alternate;
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
  font-size: 2.5rem;
  margin-bottom: 2rem;
  overflow: hidden;
  border-right: 0.15em solid #333;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 3s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const Picture = styled.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const LottieAnimation = styled.div`
  width: 200px;
  height: 200px;
`;

const App = () => {
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
      <Picture src={myPicture} alt="Juliano Josoa" />
      <Title>Coming Soon!</Title>
      <Subtitle>Stay tuned for exciting updates!</Subtitle>
      <LottieAnimation>
        <Lottie options={defaultOptions} />
      </LottieAnimation>
      <Dock />
    </Wrapper>
  );
};

export default App;
