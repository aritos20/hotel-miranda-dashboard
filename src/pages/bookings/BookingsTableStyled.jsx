import styled from 'styled-components';

const TableContainer = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    border-collapse: collapse;
    border-radius: 20px;
`;

const HeaderRow = styled.tr`
`

const DataRow = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001A;
  }
`

const HeaderData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #cccccc;
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 16px;
  color: #393939;
`

const BodyData = styled.td`
  padding: 12px;
  img {
    max-width: 45px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const ButtonTable = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-poppins);
  font-weight: 500;
  font-size: 16px;
  color: #212121;
`

const GuestText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    font-family: var(--font-poppins);
    font-weight: 500;
    font-size: 16px;
    color: #393939;
  }

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 14px;
    color: var(--color-sidebar);
  }
`;

const CheckText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    color: #393939;
  }

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 400;
    color: #393939;
  }
`;


export {
    TableContainer,
    HeaderRow,
    HeaderData,
    DataRow,
    BodyData,
    GuestText,
    CheckText,
    ButtonTable
}