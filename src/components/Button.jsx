import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
background-color: orange;
display: inline-block;
color:  white;
outline: none;
border: none;

font-size: 1.1rem;
padding: 0.9rem 2.5rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 3px solid  orange;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`
const ButtonWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkorange;
  }
`;

const ButtonText = styled.span`
  margin-left: 5px;
`;

const Button = ({text, link, icon}) => {
  return (
    <Btn>   
        <ButtonWrapper href={link} aria-label={text} target='_blank' rel='noreferrer'>
            {icon}
            <ButtonText>{text}</ButtonText>
        </ButtonWrapper>
    </Btn>
  )
}

export default Button