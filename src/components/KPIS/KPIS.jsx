import React from 'react';
import { Stats, Icon, StatsText } from './KPISStyled';

const KPIS = ({kpi}) => {
  return (
    <Stats>
      <Icon>
        {kpi.icon}
      </Icon>
      <StatsText>
        <li className='number'>{kpi.number}</li>
        <li className='info-text'>{kpi.name}</li>
      </StatsText>
    </Stats>
  )
}

export default KPIS;