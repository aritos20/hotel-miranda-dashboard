import React from 'react'
import styled from 'styled-components';

const OptionsContainer = styled.div`
    width: 42%;
    margin-bottom: 35px;
    margin-left: 7%;
    display: flex;
    justify-content: space-between;
    gap: 70px;
    padding-left: 24px;
    padding-right: 24px;
    border-bottom: 2px solid #cccccc;
`

const OptionsStyle = styled.p`
    padding-bottom: 10px;
`

const OptionsBar = ({options}) => {
  return (
    <OptionsContainer>
        {options.map((option, index) => (
            <OptionsStyle key={index}>
                {option}
            </OptionsStyle>
        ))}
    </OptionsContainer>
  )
}

export default OptionsBar;