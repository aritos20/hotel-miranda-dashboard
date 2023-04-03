import { FaBed, FaRegCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { KpiContainer, ReviewsBigContainer, ReviewsContainer, Title } from './DashboardStyled';
import KPIS from '../../components/KPIS/KPIS';
import Reviews from '../../components/Reviews/Reviews';


const kpisInfo = [
	{
		number: '8,461',
		name: 'New Booking',
		icon: <FaBed />
	},
	{
		number: '963',
		name: 'Scheduled Room',
		icon: <FaRegCalendarAlt />
	},
	{
		number: '753',
		name: 'Check In',
		icon: <FaSignInAlt />
	},
	{
		number: '516',
		name: 'Check Out',
		icon: <FaSignOutAlt />
	},
]


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

const Dashboard = () => {

  return (
    <>
      <KpiContainer>
		{kpisInfo.map((kpi, index) => (
			<KPIS key={index} kpi={kpi}></KPIS>
		))}
      </KpiContainer>
	  <ReviewsBigContainer>
	  	<Title>Latest Review by Customers</Title>
		<ReviewsContainer>
			{reviewInfo.map((review, index) => (
				<Reviews key={index} review={review}/>
			))}
		</ReviewsContainer>
	  </ReviewsBigContainer>
    </>
  )
}

export default Dashboard;