// HamburgerButton.js
import React from 'react';
import styled from 'styled-components';

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
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 6px 10px;
  margin-top:5px;
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