import React from 'react'
import { Container } from '../Container/Container';
import Logo from '../../assets/Images/logo.svg';
import styled from 'styled-components';
import { MainButton } from '../MainButton/MainButton';

import SocialIcon1 from '../../assets/Images/fb-icon.svg';
import SocialIcon2 from '../../assets/Images/insta-icon.svg';
import SocialIcon3 from '../../assets/Images/twitter-icon.svg';
import SocialIcon4 from '../../assets/Images/google-icon.svg';

export const Footer = () => {
    return (
        <Section>
            <Container>
                <Inner>
                    <FooterCol>
                        <LogoImg src={Logo} alt='Logo' />
                        <P>
                            Travel deals on hotels, flights, vacation packages.
                        </P>
                        <Span>
                            @shovasatkhira88.com
                        </Span>
                        <SocialUl>
                            <SocialItem>
                                <SocialImg src={SocialIcon1}/>
                            </SocialItem>
                            <SocialItem>
                                <SocialImg src={SocialIcon2}/>
                            </SocialItem>
                            <SocialItem>
                                <SocialImg src={SocialIcon3}/>
                            </SocialItem>
                            <SocialItem>
                                <SocialImg src={SocialIcon4}/>
                            </SocialItem>
                        </SocialUl>
                    </FooterCol>
                    <FooterCol>
                        <Strong>Home</Strong>
                        <Ul>
                            <Li>Accessibility</Li>
                            <Li>Lertifiotion</Li>
                            <Li>Knowledge</Li>
                        </Ul>
                    </FooterCol>
                    <FooterCol>
                        <Strong>Pages</Strong>
                        <Ul>
                            <Li>Blogs</Li>
                            <Li>Careers</Li>
                            <Li>Communing</Li>
                        </Ul>
                    </FooterCol>
                    <FooterCol>
                        <Strong>SUBSCRIBE</Strong>
                        <Form>
                            <Input placeholder="Enter your email address" />
                            <MainButton>Subscribe</MainButton>
                        </Form>
                    </FooterCol>
                </Inner>
            </Container>
        </Section>
    )
}


const Section = styled.footer`
    padding: 70px 0 150px;
    background-color: #FCFCFD;
`;

const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 50px;
`;

const FooterCol = styled.div`
    &:nth-child(1) {
        grid-column: 1 / 3;
    }
    &:nth-child(4) {
        grid-column: 5 / 8;
    }
`;

const LogoImg = styled.img`
    cursor: pointer;
    height: 70px;
    object-fit: cover;
    width: 186px;
`;

const SocialImg = styled.img``;

const SocialUl = styled.ul`
    display: flex;
    list-style-type: none;
`;

const SocialItem = styled.li`
    margin-right: 24px;
`;

const P = styled.p`
margin: 0 0 30px;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #081F32;
opacity: 0.7;
`;

const Span = styled.span`
margin: 0 0 15px;
display: block;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
letter-spacing: 0.06em;
color: #081F32;
opacity: 0.7;
`;

const Strong = styled.strong`
padding-top: 20px;
display: block;
margin: 0 0 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 150%;
color: #081F32;
`;

const Ul = styled.ul`
    list-style-type: none;
`;

const Li = styled.li`
margin: 0 0 20px;
cursor: pointer;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #081F32;
opacity: 0.7;
`;

const Form = styled.form``;


const Input = styled.input`
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 5px;
width: 300px;
padding: 13px 40px;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #081F32;
opacity: 0.5;
outline: 1px solid rgba(0, 0, 0, 0.1);
text-align: start;

&::placeholder {
    font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #081F32;
opacity: 0.5;
}
`;