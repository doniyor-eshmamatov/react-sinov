import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import { MainButton } from '../MainButton/MainButton'

export const Contact = () => {
    return (
        <Section>
            <Container>
                <Inner>
                    <P>STAY IN TOUCH</P>
                    <H2>
                        Join our email. First to know about specials,events and more!А
                    </H2>
                    <Form>
                        <Input placeholder="Enter your email address" />
                        <MainButton type="submit">Subscribe</MainButton>
                    </Form>
                </Inner>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding-bottom: 124px;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const P = styled.p`
margin: 0 0 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 150%;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #081F32;
opacity: 0.8;
`;


const H2 = styled.h2`
margin: 0 0 50px;
font-weight: 500;
font-size: 32px;
line-height: 140%;
text-align: center;
color: #081F32;
`;


const Form = styled.form``;


const Input = styled.input`
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 5px;
width: 400px;
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
