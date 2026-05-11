import React, { useState } from "react";
import { CiShoppingCart, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  const [location, setLocation] = useState("Badarpur meethapur New Delhi  110044");
  const [searchTerm, setSearchTerm] = useState("");


  const handleNavigate=()=>{
    navigate('/login')
  }
  return (
   <>
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
  
        <div className="flex flex-wrap items-center justify-between gap-4">
   
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold uppercase tracking-tight">
              <span className="text-amber-400">s</span>
              <span className="text-amber-400">w</span>
              <span className="text-amber-400">i</span>
              <span className="text-amber-400">f</span>
              <span className="text-amber-400">t</span>
              <span className="text-green-600">cart</span>
              <CiShoppingCart className="inline text-2xl text-blue-800" />
            </p>
          </div>

       
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-sm font-medium">
              <span className="text-green-600">⏱️ Delivery in </span>
              <span className="font-bold">16 minutes</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-lg">
              <CiLocationOn className="text-xl text-green-600" />
              <span className="text-sm font-medium truncate max-w-[180px]">
                {location}
              </span>
              <IoChevronDown className="text-xs text-gray-500" />
            </div>
          </div>

        
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder='Search "paneer"'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleNavigate} className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition">
              <CiUser className="text-xl" />
              <span className="text-sm font-medium hidden sm:inline cursor-pointer">Login</span>
            </button>
            <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-full cursor-pointer hover:bg-green-700 transition">
              <CiShoppingCart className="text-xl" />
              <span className="text-sm font-semibold">My Cart</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Navbar;