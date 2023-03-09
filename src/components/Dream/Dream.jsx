import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import { MainButton } from '../MainButton/MainButton';
import bg from '../../assets/Images/dream-bg.png';

export const Dream = () => {
    return (
        <Section>
            <Container>
                <DreamInner>
                    <Img src={bg} />
                    <Div>
                        <H2>
                            Enjoy unforgettable experiences in dream hotels.
                        </H2>
                        <MainButton>
                            View more
                        </MainButton>
                    </Div>
                </DreamInner>
            </Container>
        </Section>
    )
}


const Section = styled.section`
    padding: 200px 0 140px;
`;

const Img = styled.img`
    max-width: 600px;
    margin-right: 90px;
`

const DreamInner = styled.div`
    display: flex;
    align-items: center;
`;

const Div = styled.div`
    /* max-width: 430px;
    width: 100%; */
`;

const H2 = styled.h2`
    position: relative;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #081F32;

    &::before {
        position: absolute;
        top: -30px;
        content: 'dream holidays';
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #1B75BB;
        opacity: 0.8;
    }
`

