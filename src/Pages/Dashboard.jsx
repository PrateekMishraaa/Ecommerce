import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import MilkCategory from './Category/MilkCategory'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='flex '> {/* Add flex to layout */}
        <Sidebar />
        <div className='flex-1 ml-20 px-8 py-4'> {/* ml-20 to offset sidebar width (w-20 = 5rem), adjust as needed */}
          <h2 className='text-xs cursor-pointer font-bold mb-4'>Daily Breakfast</h2>
          <MilkCategory />
        </div>
      </div>
    </>
  )
}

export default Dashboard