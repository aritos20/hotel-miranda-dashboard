import styled from 'styled-components';

const MainContainer = styled.div`
    padding-top: 32px;
    background-color: #ffffff;
    box-shadow: 13px 3px 40px #00000005;
    height: 100vh;

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 22px;
        margin-bottom: 82px;
    }
    
`

const Hlogo = styled.p`
    display: inline-block;
    padding: 16px 19px;
    font-family: var(--font-archivo);
    font-weight: 700;
    font-size: 22px;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
`

const HotelMiranda = styled.ul`
    list-style: none;

    .hotel {
        font-family: var(--font-archivo);
        font-weight: 700;
        font-size: 18px;
    }

    .miranda {
        font-family: var(--font-archivo);
        font-weight: 400;
        font-size: 18px;
    }
`

const DashboardOptions = styled.ul`
    list-style: none;
`;

const NavOptions = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 36px;

    a {
        text-decoration: none;
    }
    
    div {
        display: inline-block;
        margin-right: 22%;
        border: ${props => {
            if (props.route === props.current) {
                return "5px solid #E23428";
            } else {
                return "5px solid #FFFFFF";
            }
        }};;
        border-radius: 0 8px 8px 0;
        height: 70px;
    }

    svg {
        width: 24px;
        height: 27px;
        margin-right: 30px;
        color: ${props => {
            if (props.route === props.current) {
                return "#E23428";
            }
        }};;
    }

    span {
        font-family: var(--font-poppins);
        font-size: 18px;
        font-weight: 400;
        color: ${props => {
            if (props.route === props.current) {
                return "#E23428";
            } else {
                return "var(--color-sidebar)";
            }
        }};;
    }
`;

const UserAccount = styled.div`
    width: 67.5%;
    margin: 0 auto;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    padding-bottom: 24px;
    margin-bottom: 62px;

    div {
        display: block;
        width: 70px;
        height: 70px;
        background-color: #C5C5C5;
        border-radius: 8px;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    h6 {
        text-align: center;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: #393939;
        margin-bottom: 9px;
    }

    p {
        text-align: center;
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 300;
        color: #B2B2B2;
        margin-bottom: 16px; 
    }

    button {
        display: block;
        width: 158px;
        height: 47px;
        margin: 0 auto;
        background-color: #EBF1EF;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-family: var(--font-poppins);
        font-size: 14px;
        font-weight: 600;
        color: 135846;
    }
`;

const SideBarFinalName = styled.p`    
    text-align: center;
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 600;
    color: #212121;
`

const SideBarCopyright = styled.p`
    text-align: center;
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 300;
    color: #799283;
`

export {
    MainContainer,
    Hlogo,
    HotelMiranda,
    DashboardOptions,
    NavOptions,
    UserAccount,
    SideBarFinalName,
    SideBarCopyright
}