import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className="bg-black min-h-screen w-screen">
      <div className="container mx-auto p-6">
        <Header />
        <TaskListNumber />
        <Tasklist />
      </div>
    </div>
  )
}

export default EmployeeDashboard
