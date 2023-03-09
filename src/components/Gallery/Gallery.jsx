import React from 'react'
import styled from 'styled-components'


import img1 from '../../assets/Images/gallery-1.png'
import img2 from '../../assets/Images/gallery-2.png'
import img3 from '../../assets/Images/gallery-3.png'
import img4 from '../../assets/Images/gallery-4.png'
import img5 from '../../assets/Images/gallery-5.png'
import { Container } from '../Container/Container'
import { GalleryCard } from './GalleryCard/GalleryCard'

export const Gallery = () => {

    const GalleryContent = [
        {
            name: 'Lux: Room',
            price: 60,
            bg: img1,
        },
        {
            name: 'Mini Room',
            price: 70,
            bg: img2,
        },
        {
            name: 'Stande Room',
            price: 65,
            bg: img3,
        },
        {
            name: 'Single Room',
            price: 55,
            bg: img4,
        },
        {
            name: 'Elite  Room',
            price: 65,
            bg: img5,
        }
    ]

    return (
        <Section>
            <Container>
                <Inner>
                    <Content>
                        <H2>
                            About hotel gallery
                        </H2>
                        <P>
                            While some of these examples are real – actually offering guests a stay in the locations advertised – it’s mainly just a way.
                        </P>
                        <GalleryBtn>
                            View more
                        </GalleryBtn>
                    </Content>
                    {
                        GalleryContent.map((el, index) => <GalleryCard key={index} name={el.name} price={'$' + el.price + ' night'} />)
                    }
                </Inner>
            </Container>
        </Section>
    )
}


const Section = styled.section`
    padding-bottom: 140px;
`;

const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`

const Content = styled.div`
    padding: 40px 0;
`

const H2 = styled.h2`
    margin: 0 0 25px;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #081F32;
`
const P = styled.p`
margin: 0 0 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;
color: #081F32;
opacity: 0.6;
`


const GalleryBtn = styled.button`
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
    outline: none;

    &:hover {
        color: #1B75BB;
        background: #FFFFFF;
    }
`