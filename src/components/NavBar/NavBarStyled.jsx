import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 3px 10px #00000005;
`;

const Title = styled.p`
    font-size: 28px;
    font-family: var(--font-poppins);
    color: var(--color-title);
    font-weight: 600;
    flex: 1;
`;

const NavContent = styled.nav`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

const ChangeUserButton = styled.button`
    padding: 8px;
    border: none;
    outline: none;
    font-family: var(--font-poppins);
    border-radius: 8px;
    background-color: #F0F0F0;
    cursor: pointer;

    &:hover {
        background-color: ${props => {
            return props.backgColor || '#135846';
        }};
        color: ${props => {
             return props.textColor || '#FFFFFF';
        }};
        transition: 0.3s;
    }
`

export {
    Header,
    Title,
    NavContent,
    ChangeUserButton
};