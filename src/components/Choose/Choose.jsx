import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container';

import liBgi1 from '../../assets/Images/choose-img-1.svg';
import liBgi2 from '../../assets/Images/choose-img-2.svg';
import liBgi3 from '../../assets/Images/choose-img-3.svg';
import liBgi4 from '../../assets/Images/choose-img-4.svg';

export const Choose = () => {
    return (
        <Section>
            <Container>
                <Inner>
                    <H2>
                        Why you choose us!
                    </H2>
                    <P>
                        Naturally, it’s becoming even more important for hotel and hospitality brands to stand out from the crowd. Content marketing remains a key way for hotels to do this.
                    </P>
                    <Ul>
                        <Li>
                            <H3>
                                Easy booking
                            </H3>
                            <P2>
                                The booking process should include minimal steps.
                            </P2>
                        </Li>
                        <Li>
                            <H3>
                                Friendly interface
                            </H3>
                            <P2>
                                A hotel booking engine with a good user-friendly.
                            </P2>
                        </Li>
                        <Li>
                            <H3>
                                Responsibility
                            </H3>
                            <P2>
                                You should be able to add rooms to your system.
                            </P2>
                        </Li>
                        <Li>
                            <H3>
                                Quick order supply
                            </H3>
                            <P2>
                                The booking process should include minimal steps.
                            </P2>
                        </Li>
                    </Ul>
                </Inner>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding-bottom: 140px;
`;

const Inner = styled.div``;

const H2 = styled.h2`
    max-width: 300px;
    margin: 0 auto 25px;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #081F32;
`;

const P = styled.p`
    max-width: 820px;
    text-align: center;
    margin: 0 auto 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #081F32;
    opacity: 0.6;
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
`;

const Li = styled.li`
padding: 130px 17px 17px;
max-width: 262px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 0px 4px 30px rgba(199, 199, 199, 0.25);
border-radius: 5px;

background-image: url(${liBgi1});
background-repeat: no-repeat;
background-position: center calc(0% + 17px);

&:nth-child(2) {
    background-image: url(${liBgi2});
}

&:nth-child(3) {
    background-image: url(${liBgi3});
}

&:nth-child(4) {
    background-image: url(${liBgi4});
}
`


const H3 = styled.h3`
margin-bottom: 15px;
font-weight: 500;
font-size: 24px;
line-height: 150%;
text-align: center;
color: #081F32;
`;

const P2 = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;
/* or 29px */

text-align: center;

color: #081F32;

opacity: 0.6;
`
