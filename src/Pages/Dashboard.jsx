import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import MilkCategory from './Category/MilkCategory';
import BottomDetails from '../Components/BottomDetails';
import Footer from '../Components/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* Main content */}
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4">
        <h2 className="text-xs cursor-pointer font-bold mb-4">Daily Breakfast</h2>
        <MilkCategory />
      </main>
      {/* BottomDetails ek alag section - ab iski apni height/width hai */}
      <div className="ml-0 md:ml-20">
        <BottomDetails />
      <Footer/>
      </div>
    </>
  );
};

export default Dashboard;