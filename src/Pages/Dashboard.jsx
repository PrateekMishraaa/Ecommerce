import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import MilkCategory from './Category/MilkCategory';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* Sidebar will be fixed left on desktop, bottom bar on mobile */}
      <Sidebar />
      {/* Main content: no left margin on mobile, md:ml-20 for desktop; add bottom padding for mobile bottom bar */}
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs cursor-pointer font-bold mb-4">Daily Breakfast</h2>
        <MilkCategory />
      </main>
    </>
  );
};

export default Dashboard;