import React from 'react';
import Logo from '../assets/imagens/logo.png';
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 14vh;
  background-color: #000;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #FFD700;
  padding: 10px 20px;
  @media screen and (max-width: 500px){
      display: none;
  }
`;

const Logotipo = styled.div`
  width: 15vw;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoStyled = styled.img`
  width: 3rem;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Logotipo>
        <LogoStyled src={Logo} alt="Logo" />
        <h1>CherryCalc</h1>
      </Logotipo>
    </HeaderStyled>
  )
}