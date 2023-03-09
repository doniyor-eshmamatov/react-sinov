import React from 'react';
import styled from 'styled-components'
import { Container } from '../Container/Container';
import Logo from '../../assets/Images/logo.svg';
import { MainButton } from '../MainButton/MainButton';


export const Header = () => {
    return (
        <SiteHeader>
            <Container>
                <HeaderInner>
                    <LogoImg src={Logo} alt='Logo' />
                    <Nav>
                        <NavItem>Home</NavItem>
                        <NavItem>Features</NavItem>
                        <NavItem>Gallary</NavItem>
                        <NavItem>Testimonials </NavItem>
                    </Nav>
                    <MainButton>
                        Book now
                    </MainButton>
                </HeaderInner>
                {
                    window.addEventListener('scroll', () => {
                        if (window.scrollY > 100) {
                            const header = document.querySelector('header');
                            header.classList.add('header-scroll')
                        }
                        else {
                            const header = document.querySelector('header');
                            header.classList.remove('header-scroll')
                        }
                    })
                }
            </Container>
        </SiteHeader>
    )
}


const SiteHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    transition: all 500ms ease;
`;
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    cursor: pointer;
`;

const Nav = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    margin: 0 0 0 128px;
`;

const NavItem = styled.li`
    margin-right: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #081F32;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #1B75BB;
    }
`

const HeaderButton = styled.button`
    font-family: 'Gelasio';
    padding: 13px 28px;
    margin-left: auto;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
    background: #1B75BB;
    border-radius: 5px;
    border: 0;
    transition: all 300ms ease;
    border: 1px solid #1B75BB;
    cursor: pointer;

    &:hover {
        color: #1B75BB;
        background: #FFFFFF;
    }
`
