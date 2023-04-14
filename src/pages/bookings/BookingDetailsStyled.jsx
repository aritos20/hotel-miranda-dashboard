import styled from "styled-components";


const BookingDetailsContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    gap: 24px;
`

const InfoContainer = styled.div`
    display: inline-block;
    margin-left: 2%;
    width: 50%;
`


const BookingInfo = styled.div`
    padding-top: 40px;
    display: flex;
    gap: 40px;
    margin-bottom: 20px;

    img {
        border-radius: 12px;
        object-fit: cover;
    }
    
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li:nth-child(1) {
            font-family: var(--font-poppins);
            font-size: 30px;
            font-weight: 600;
            color: #212121;
        }

        li:nth-child(2) {
            font-family: var(--font-poppins);
            font-size: 14px;
            color: #799283;
        }

        li:nth-child(3) {
            display: flex;
            align-items: center;
        }

        .phone {
            width: 20px;
            height: 20px;
            color: #135846;
            margin-right: 24px;
        }

        button {
            padding: 12px;
            border-radius: 12px;
            border: none;
            background-color: #135846;
            font-family: var(--font-poppins);
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            cursor: pointer;
            display: flex;
            align-items: center;
            
            svg {
                width: 23px;
                height: 23px;
                margin-right: 10px;
                color: #ffffff;
            }
        }
    }
`;

const CheckInOut = styled.div`
    display: flex;
    gap: 60px;
    padding-bottom: 20px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px;

    ul {
        list-style: none;

        li:nth-child(1) {
            font-family: var(--font-poppins);
            font-size: 14px;
            color: #6E6E6E;
        }
        
        li:nth-child(2) {
            font-family: var(--font-poppins);
            font-size: 16px;
            font-weight: 500;
            color: #212121;
        }
    }
`

const RoomInfo = styled.div`
    display: flex;
    gap: 80px;
    margin-bottom: 20px;
    
    ul {
        list-style: none;

        li:nth-child(1) {
            font-family: var(--font-poppins);
            font-size: 14px;
            color: #6e6e6e;
        }

        li:nth-child(2) {
            font-family: var(--font-poppins);
            font-weight: 500;
            font-size: 24px;
            color: #212121;

            span {
                font-family: var(--font-poppins);
                font-size: 14px;
                color: #6e6e6e;
            }
        }
    }
`

const RoomDescription = styled.p`
    font-family: var(--font-poppins);
    font-size: 14px;
    color: #363636;
    margin-bottom: 20px;
`

const Facilities = styled.div`
    padding-bottom: 40px;

    p {
        font-family: var(--font-poppins);
        font-size: 14px;
        color: #6e6e6e;
    }

    div {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;

        button {
            padding: 12px 16px;
            background-color: #EEF9F2;
            border: none;
            border-radius: 8px;
        }
    }
`

const ImgContainer = styled.div`
    width: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export {
    BookingDetailsContainer,
    InfoContainer,
    BookingInfo,
    CheckInOut,
    RoomInfo,
    RoomDescription,
    Facilities,
    ImgContainer
}