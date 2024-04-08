import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1);
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
  transition: all 0.4s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 200%;
    height: 200%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    z-index: -1;
    animation: ${pulse} 2s infinite;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 6px 10px;
  margin-top: 5px;
  transition: 0.4s;
`;

const HamburgerButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <HamburgerIcon />
    <HamburgerIcon />
    <HamburgerIcon />
  </Button>
);

export default HamburgerButton;
