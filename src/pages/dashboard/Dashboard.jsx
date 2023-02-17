import React from 'react';
import { FaBed, FaRegCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { TopContainer, Stats, Icon, StatsText } from './DashboardStyled';



const Dashboard = () => {

  return (
    <>

      <TopContainer>
		<Stats>
			<Icon>
				<FaBed />
			</Icon>
			<StatsText>
				<li className='number'>8,461</li>
				<li className='info-text'>New Booking</li>
			</StatsText>
		</Stats>
		<Stats>
			<Icon>
				<FaRegCalendarAlt />
			</Icon>
			<StatsText>
				<li className='number'>963</li>
				<li className='info-text'>Scheduled Room</li>
			</StatsText>
		</Stats>
		<Stats>
			<Icon>
				<FaSignInAlt />
			</Icon>
			<StatsText>
				<li className='number'>753</li>
				<li className='info-text'>Check In</li>
			</StatsText>
		</Stats>
		<Stats>
			<Icon>
				<FaSignOutAlt />
			</Icon>
			<StatsText>
				<li className='number'>516</li>
				<li className='info-text'>Check Out</li>
			</StatsText>
		</Stats>
      </TopContainer>

    </>
  )
}

export default Dashboard