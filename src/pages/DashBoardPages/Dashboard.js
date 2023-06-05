import React from 'react'
import DashCardGraph from '../../components/DashCardGraph'

const Dashboard = () => {
  return (
    <div style={{width: "80%", justifySelf: "end"}}>
      <DashCardGraph/>
      <DashCardGraph/>
      <DashCardGraph/>
      <DashCardGraph/>
      <DashCardGraph/>
      <DashCardGraph/>
      <div>Hello!</div>
    </div>
  )
}

export default Dashboard