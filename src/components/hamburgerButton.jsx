import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 25px;
  width: 60px;
  height: 60px;
  z-index: 19;
  background: white;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  overflow: hidden;
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 6px 10px;
  margin-top: 5px;
  transition: 0.4s;
`;

const Shockwave = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  animation: ${wave} 0.5s ease-out;
`;

const HamburgerButton = ({ onClick }) => {
  const [showShockwave, setShowShockwave] = useState(false);

  const handleButtonClick = () => {
    onClick();
    setShowShockwave(true);
    setTimeout(() => {
      setShowShockwave(false);
    }, 500);
  };

  return (
    <Button onClick={handleButtonClick}>
      <HamburgerIcon />
      <HamburgerIcon />
      <HamburgerIcon />
      {showShockwave && <Shockwave />}
    </Button>
  );
};

export default HamburgerButton;
