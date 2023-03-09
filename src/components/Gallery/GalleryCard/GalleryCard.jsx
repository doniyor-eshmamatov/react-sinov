import React from 'react'
import styled from 'styled-components';

import img1 from '../../../assets/Images/gallery-1.png'
import img2 from '../../../assets/Images/gallery-2.png'
import img3 from '../../../assets/Images/gallery-3.png'
import img4 from '../../../assets/Images/gallery-4.png'
import img5 from '../../../assets/Images/gallery-5.png'

export const GalleryCard = ({ name, price }) => {
    return (
        <Card>
            <CardBlur></CardBlur>
            <CardContent>
                <H4>{name}</H4>
                <Price>{price}</Price>
                <MainButton>
                    Book now
                </MainButton>
            </CardContent>
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    max-width: 555px;
    width: 100%;
    min-height: 337px;
    height: 337px;
    background-image: url(${img1});
    
    &:nth-child(2) {
        background-image: url(${img2});
    }
    &:nth-child(3) {
        background-image: url(${img3});
    }
    &:nth-child(4) {
        background-image: url(${img4});
    }
    &:nth-child(5) {
        background-image: url(${img5});
    }
`;

const CardContent = styled.div`
    position: absolute;
    z-index: 2;
    padding: 23px;
`;

const CardBlur = styled.div`
position: absolute;
left: 0;
bottom: 0;
width: 231px;
height: 126px;
background: rgba(226, 226, 226, 0.4);
backdrop-filter: blur(5px);
border-radius: 10px;
`;

const H4 = styled.h4`
margin-bottom: 10px;
margin-right: 25px;
text-transform: capitalize;
display: inline-block;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: #081F32;`;

const Price = styled.p`
display: inline-block;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 160%;
color: #081F32;
opacity: 0.8;
`

const MainButton = styled.button`
    display: block;
    margin-right: auto;
    font-family: 'Gelasio';
    padding: 8px 18px;
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
        background: transparent;
    }
`