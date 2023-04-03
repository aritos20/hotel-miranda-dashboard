import { FaBed, FaRegCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { TopContainer } from './DashboardStyled';
import KPIS from '../../components/KPIS/KPIS';


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

const Dashboard = () => {

  return (
    <>
      <TopContainer>
		{kpisInfo.map((kpi, index) => (
			<KPIS key={index} kpi={kpi}></KPIS>
		))}
      </TopContainer>
    </>
  )
}

export default Dashboard;