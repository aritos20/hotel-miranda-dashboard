import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 20px;
`


const NewButton = styled.button`
    cursor: pointer;
    padding: 8px 54px;
    border: none;
    border-radius: 12px;
    background-color: #135846;
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
`

const Select = styled.select`
    border: 1px solid #135846;
    border-radius: 12px;
    outline: none;
    padding: 8px 20px;
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    color: #135846;
    cursor: pointer;
    background-color: transparent;
`

export {
    Container,
    NewButton,
    Select
}