import React, { useEffect, useState } from "react";
import { CiShoppingCart, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);          // store user object
  const [location, setLocation] = useState("Badarpur meethapur New Delhi 110044");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    setIsAuthenticated(!!token);
    
    if (userData) {
      try {
        setUser(JSON.parse(userData));   // parse stored user JSON
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleNavigateAddToCart=()=>{
    navigate('/products/AddToCart')
  }
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  const handleNavigate = () => {
    if (isAuthenticated) {
      // optional: go to profile page
      navigate('/profile');
    } else {
      navigate('/register');
    }
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      alert("Please login first to view your cart");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Row 1: Logo + Delivery/Location + Cart Icon (mobile) */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
              <span className="text-amber-400">s</span>
              <span className="text-amber-400">w</span>
              <span className="text-amber-400">i</span>
              <span className="text-amber-400">f</span>
              <span className="text-amber-400">t</span>
              <span className="text-green-600">cart</span>
              <CiShoppingCart className="inline text-xl sm:text-2xl text-blue-800" />
            </p>
          </div>

          {/* Delivery + Location */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
              <span className="text-green-600">⏱️ Delivery in</span>
              <span className="font-bold">16 min</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-1 sm:px-2 py-1 rounded-lg">
              <CiLocationOn className="text-lg sm:text-xl text-green-600" />
              <span className="text-xs sm:text-sm font-medium truncate max-w-[120px] sm:max-w-[180px]">
                {location}
              </span>
              <IoChevronDown className="text-xs text-gray-500 hidden sm:inline" />
            </div>
          </div>

          {/* Mobile Cart Icon + Menu Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <div
              onClick={handleCartClick}
              className={`relative ${!isAuthenticated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <CiShoppingCart className="text-2xl text-green-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Row 2: Search Bar + Desktop Login/Cart */}
        <div className="mt-3 sm:mt-0 sm:flex sm:items-center sm:justify-between gap-4">
          <div className="flex-1 max-w-xl mx-0 sm:mx-4">
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

          {/* Desktop: Register/Username + Cart */}
          <div className="hidden sm:flex items-center gap-4 mt-2 sm:mt-0">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
            >
              <CiUser className="text-xl" />
              <span className="text-sm font-medium hidden sm:inline cursor-pointer">
                {isAuthenticated && user ? user.username : "Register"}
              </span>
            </button>
            <div
              onClick={handleNavigateAddToCart}
              className={`flex items-center gap-1 text-white px-3 py-1.5 rounded-full transition ${
                isAuthenticated
                  ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed opacity-70'
              }`}
            >
              <CiShoppingCart className="text-xl" />
              <button className="text-sm font-semibold">My Cart</button>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-3 border-t border-gray-200 flex flex-col gap-3">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition w-full py-2"
            >
              <CiUser className="text-xl" />
              <span className="text-sm font-medium">
                {isAuthenticated && user ? user.username : "Login / Signup"}
              </span>
            </button>
            <div
              onClick={handleCartClick}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                isAuthenticated
                  ? 'bg-green-50 text-green-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-2">
                <CiShoppingCart className="text-xl" />
                <span className="text-sm font-semibold">My Cart</span>
              </div>
              <span className="text-xs font-bold">₹0.00</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;