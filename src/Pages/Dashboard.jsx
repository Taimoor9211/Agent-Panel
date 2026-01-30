import React from 'react'
import WelcomeComponent from '../Components/DashboardComponents/WelcomeComponent'
import JobStats from '../Components/DashboardComponents/JobStats'
import JobActivityBoard from '../Components/DashboardComponents/JobActivityBoard'

const Dashboard = () => {
  return (
    <div>
      <WelcomeComponent/>
      <JobStats/>
      <JobActivityBoard/>
    </div>
  )
}

export default Dashboard