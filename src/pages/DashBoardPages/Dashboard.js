import React from 'react'
import DashCardGraph from '../../components/DashCardGraph'
import UpperDash from '../../components/UpperDash';
import LowerDash from '../../components/LowerDash';

const Dashboard = () => {
  return (
    <div className='rightContent'>
      <UpperDash />
      <DashCardGraph />
      <LowerDash />
    </div>
  );
}

export default Dashboard