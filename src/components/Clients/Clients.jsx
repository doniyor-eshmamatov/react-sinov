import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container/Container';
import { MainButton } from '../MainButton/MainButton';
import { Card } from './Card/Card';

export const Clients = () => {

    const clientsData = [
        {
            name: 'David lee',
            nickname: 'davidlee@',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.'
        },
        {
            name: 'Ravi shankor',
            nickname: 'ravishankor@',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.'
        },
        {
            name: 'Thomas lew',
            nickname: 'thomaslew@',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.'
        }
    ]

    return (
        <Section>
            <Container>
                <Inner>
                    <Header>
                        <H2>What our client say</H2>
                        <MainButton>View All</MainButton>
                    </Header>
                    <Ul>
                        {
                            clientsData.map((el, index) => <Card key={index} name={el.name} text={el.text} nickname={el.nickname}/>)
                        }
                    </Ul>
                </Inner>
            </Container>
        </Section>
    )
}


const Section = styled.section`
    padding: 0 0 140px;
`;

const Inner = styled.div``;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 60px;
`;



const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    list-style-type: none;
`;

const H2 = styled.h2``



