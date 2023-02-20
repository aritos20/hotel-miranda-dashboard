import React from 'react';
import { Container, NewButton, Select } from './NewAndSelectStyled';


const NewAndSelect = ({textButton, show}) => {
  return (
    <Container>
      {show && <NewButton>+ {textButton}</NewButton>}
      <Select>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
      </Select>
    </Container>
  )
}

export default NewAndSelect;