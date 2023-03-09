import styled from 'styled-components';

import React from 'react'

export const Container = ({children}) => {
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    max-width: 1180px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`
