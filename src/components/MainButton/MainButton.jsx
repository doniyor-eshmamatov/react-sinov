

import React from 'react'
import styled from 'styled-components'

export const MainButton = ({children}) => {
    return (
        <HeaderButton>
            {children}
        </HeaderButton>
    )
}

const HeaderButton = styled.button`
    font-family: 'Roboto';
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
        background: transparent;
    }
`