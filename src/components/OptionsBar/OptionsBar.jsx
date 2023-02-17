import React from 'react'
import { OptionsContainer, OptionsStyle } from './OptionsBarStyled'

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