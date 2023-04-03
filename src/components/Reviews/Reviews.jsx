import React from 'react';
import { Review, ReviewText, ReviewInfo, GuestImg, GuestInfo, GuestContainer, IconContainer } from './ReviewsStyled';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

const Reviews = ({ review }) => {
  return (
    <>
        <Review>
            <ReviewText>{review.text}</ReviewText>
            <ReviewInfo>
                <GuestContainer>
                    <GuestImg src={review.img}></GuestImg>
                    <GuestInfo>
                        <li className='guest-name'>{review.name}</li>
                        <li className='time'>{review.time}</li>
                    </GuestInfo>
                </GuestContainer>
                <IconContainer>
                    <BsCheckCircle style={{marginRight: '8px', color: '#5AD07A', width: '24px', height: '24px'}} />
                    <BsXCircle style={{color: '#E23428', width: '24px', height: '24px'}}/>
                </IconContainer>
            </ReviewInfo>
        </Review>
    </>
  )
}

export default Reviews;