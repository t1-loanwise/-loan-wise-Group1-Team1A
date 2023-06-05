import React from 'react'
import DashCardGraph from '../../components/DashCardGraph'

const Dashboard = () => {
  return (
    <div
      style={{
        width: "80%",
        justifySelf: "end",
        marginTop: "15vh",
        padding: "3% 3% 0 0",
      }}
    >
      <DashCardGraph />
      <div>Hello!</div>
      <div>Hello!</div>
      <div>Hello!</div>
      <div>Hello!</div>
      <DashCardGraph />
    </div>
  );
}

export default Dashboard