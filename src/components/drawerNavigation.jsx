// DrawerNavigation.js
import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  font-size: 2rem;
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: white;
  box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 40;
`;

const DrawerNavigation = ({ show, setShow }) => (
  <Drawer show={show}>
    <CloseButton onClick={() => setShow(false)}>X</CloseButton>
    {/* Navigation Links */}
  </Drawer>
);

export default DrawerNavigation;