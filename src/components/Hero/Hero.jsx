import React from 'react';
import styled from 'styled-components'
import { Container } from '../Container/Container';
import { MainButton } from '../MainButton/MainButton';
import herobg from '../../assets/Images/hero-bgi.png';

export const Hero = () => {
    return (
        <Section>
            <Container>
                <HeroContent>
                    <H1>
                        Stay with us feel like {<H1Span>home</H1Span>}.
                    </H1>
                    <HeroText>
                        Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.
                    </HeroText>
                    <MainButton>
                        Read more
                    </MainButton>
                    <Status>
                        <StatusItem>
                            Cheek in
                            {<StatusSpan>10 Feb 2021</StatusSpan>}
                        </StatusItem>
                        <StatusItem>
                            Cheek out
                            {<StatusSpan>13 Feb 2021</StatusSpan>}
                        </StatusItem>
                        <StatusItem>
                            Person
                            {<StatusSpan>2 Adults 1 kid</StatusSpan>}
                        </StatusItem>
                        <StatusItem>
                            <MainButton>
                                Find room
                            </MainButton>
                        </StatusItem>
                    </Status>
                </HeroContent>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding: 136px 0 97px;
    background-image: url(${herobg});
    background-position: center top;
    background-repeat: no-repeat;
    `
const HeroContent = styled.div`
    position: relative;
    max-width: 456px;
    padding-top: 123px;
`

const H1 = styled.h1`
position: relative;
margin-bottom: 25px;
font-weight: 600;
font-size: 57px;
line-height: 120%;
color: #081F32;

&::before {
    font-family: 'Roboto';
    position: absolute;
    top: -35px;
    content: 'Serenity';
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1B75BB;
    opacity: 0.8;
}
`

const H1Span = styled.span`
    color: #1B75BB;
`

const HeroText = styled.p`
    max-width: 347px;
    margin-bottom: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #081F32;
    opacity: 0.6;
`


const Status = styled.ul`
    min-width: 680px;
    position: absolute;
    bottom: -150px;
    left: -100px;
    display: flex;
    align-items: center;
    list-style-type: none;
    background: rgba(255, 255, 255, 0.21);
    backdrop-filter: blur(35px);
    padding: 27px 50px;
    border-radius: 10px;
`

const StatusItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #081F32;
    border-right: 2px solid #9DACB8;
`

const StatusSpan = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #081F32;
`