import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import SignImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo =styled.img`
    width: 50px;
`;

const LogInBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    margin-top: 3px;
    border:none ;
    background:none ;
    color: #FFFFFF;
`;

const ImgSign = styled.img`
    width: 32px;
    `;

export const NavBar = () => (
    <NavBarStyled>
    <Logo>
        <ImgLogo src={logoImg} alt="logo"/>
        <H1>MRDonald’s</H1>
    </Logo>
    <LogInBtn>    
        <ImgSign src={SignImg} alt="sign"/>
        войти
        </LogInBtn>
    </NavBarStyled>
)