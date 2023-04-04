import React from 'react'
import Reviews from '../../components/Reviews/Reviews';
import { ReviewContainer } from './ContactStyled';
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ContactTable from './ContactTable';

const reviewInfo = [
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
		img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg',
		name: 'Kusnaidi Anderson',
		time: '4m ago'
	},
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
		img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg',
		name: 'Bella Spahira',
		time: '6m ago'
	},
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
		img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg',
		name: 'Thomas Al-Ghazali',
		time: '10m ago'
	}
]

const OptionsContact = ['All Contacts', 'Archived'];

const Contact = () => {
  return (
    <>
      <ReviewContainer>
        {reviewInfo.map((review, index) => (
          <Reviews key={index} review={review}/>
        ))}
      </ReviewContainer>
      <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <OptionsBar options={OptionsContact}/>
        <NewAndSelect textButton="New Room" show={false}/>
      </div>
      <ContactTable />
    </>
  )
}

export default Contact;