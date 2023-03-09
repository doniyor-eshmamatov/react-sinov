import React from 'react';
import styled from 'styled-components';

import userImg1 from '../../../assets/Images/client-1.png';
import userImg2 from '../../../assets/Images/client-2.png';
import userImg3 from '../../../assets/Images/client-3.png';

export const Card = ({name, text, nickname}) => {
    return (
        <ClientsCard>
            <Text>{text}</Text>
            <H2>{name}</H2>
            <Nick>{nickname}</Nick>
        </ClientsCard>
    )
}

const ClientsCard = styled.li`
    padding: 153px 20px 28px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    opacity: 0.6;
    text-align: center;
    background-image: url(${userImg1});
    background-repeat: no-repeat;
    background-position: center calc(0% + 28px);

    &:hover {
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 4px 30px rgba(199, 199, 199, 0.25);
        border-radius: 10px;
        opacity: 1;
        transition: all 0.3s ease;
    }

    &:nth-child(2) {
        background-image: url(${userImg2});
    }

    &:nth-child(3) {
        background-image: url(${userImg3});
    }
`


const H2 = styled.h2`
font-weight: 500;
font-size: 32px;
line-height: 140%; 
color: #081F32;
`;

const Text = styled.p`
margin: 0 0 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;
text-align: center;
color: #081F32;
`;

const Nick = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;
text-align: center;
color: #081F32;
`;
