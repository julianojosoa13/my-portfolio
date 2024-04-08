import React from 'react';
import styled from 'styled-components';

const DockWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  padding: 20px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-around;
  width: 280px;
  z-index: 20;
`;

const Icon = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
`;

const Dock = () => {
  return (
    <DockWrapper>
      <Icon href="https://www.facebook.com/josoajuliano" target='_blank'><i className="fab fa-facebook"></i></Icon>
      <Icon href="https://twitter.com/JulianoJosoa" target='_blank'><i className="fab fa-twitter"></i></Icon>
      <Icon href="https://www.instagram.com/josoajuliano/" target='_blank'><i className="fab fa-instagram"></i></Icon>
      <Icon href="https://www.github.com/julianojosoa13" target='_blank'><i className="fab fa-github"></i></Icon>
    </DockWrapper>
  );
};

export default Dock;
