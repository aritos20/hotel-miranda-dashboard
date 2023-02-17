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
    max-width: 88px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const GuestText = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  li:nth-child(3) {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 14px;
    color: #393939;
  }
`;

const CheckText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    margin-bottom: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  li:nth-child(2) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export {
    TableContainer,
    HeaderRow,
    HeaderData,
    DataRow,
    BodyData,
    GuestText,
    CheckText
}