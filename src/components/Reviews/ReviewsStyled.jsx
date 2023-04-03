import styled from 'styled-components';

const Review = styled.div`
    width: 33%;
    border-radius: 20px;
    border: 1px solid #EBEBEB;
    padding: 20px;
    margin-bottom: 60px;

    &:hover {
       box-shadow: 0px 16px 30px #00000014;
    }
`
const ReviewText = styled.p`
    font-family: var(--font-poppins);
    font-size: 16px;
    color: #4E4E4E;
    margin-bottom: 42px;
`

const ReviewInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GuestContainer = styled.div`
    display: flex;
    gap: 20px;
`

const GuestImg = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 8px;
    object-fit: cover;
`

const GuestInfo = styled.ul`
    list-style: none;
    
    .guest-name {
        font-family: var(--font-poppins);
        font-weight: 600;
        font-size: 16px;
        color: #262626;
    }

    .time {
        font-family: var(--font-poppins);
        font-size: 14px;
        color: #799283;
    }
`

const IconContainer = styled.div`

`

export {
    Review,
    ReviewText,
    ReviewInfo,
    GuestContainer,
    GuestImg,
    GuestInfo,
    IconContainer
}