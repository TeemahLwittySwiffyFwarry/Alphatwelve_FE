import React, { useState, useEffect } from 'react';
import { FaHome, FaCalendarAlt, FaUser, FaFileAlt } from 'react-icons/fa';

const BottomNavbar = ({ darkMode }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeTab, setActiveTab] = useState('Home'); // Track active tab

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowNavbar(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    showNavbar && (
      <div className={`fixed mt-4 bottom-0 left-0 w-full z-100 shadow-lg transition-colors duration-300 md:hidden 
        ${darkMode ? 'bg-gray-900' : 'bg-white'} 
        ${darkMode ? 'bg-opacity-90' : 'bg-opacity-100'} 
        transition duration-300`}>
        <hr />
        <div className="flex justify-around py-2">
          {/* Home Icon */}
          <div
            className={`flex flex-col items-center  ${activeTab === 'Home' ? 'text-purple-500 border-t-4 border-purple-500' : 'hover:text-purple-500'}`}
            onClick={() => handleTabClick('Home')}
          >
            <FaHome className="text-2xl mt-2" />
            <span className="text-xs">Home</span>
          </div>

          {/* Events Icon */}
          <div
            className={`flex flex-col items-center ${activeTab === 'Events' ? 'text-purple-500 border-t-4 border-purple-500' : 'hover:text-purple-500'}`}
            onClick={() => handleTabClick('Events')}
          >
            <FaCalendarAlt className="text-2xl mt-2" />
            <span className="text-xs">Events</span>
          </div>

          {/* Speakers Icon */}
          <div
            className={`flex flex-col items-center ${activeTab === 'Speakers' ? 'text-purple-500 border-t-4 border-purple-500' : 'hover:text-purple-500'}`}
            onClick={() => handleTabClick('Speakers')}
          >
            <FaUser className="text-2xl mt-2" />
            <span className="text-xs">Speakers</span>
          </div>

          {/* Reports Icon */}
          <div
            className={`flex flex-col items-center ${activeTab === 'Reports' ? 'text-purple-500 border-t-4 border-purple-500' : 'hover:text-purple-500'}`}
            onClick={() => handleTabClick('Reports')}
          >
            <FaFileAlt className="text-2xl mt-2" />
            <span className="text-xs">Reports</span>
          </div>

          {/* Profile Icon */}
          <div
            className={`flex flex-col items-center ${activeTab === 'Profile' ? 'text-purple-500 border-t-4 border-purple-500' : 'hover:text-purple-500'}`}
            onClick={() => handleTabClick('Profile')}
          >
            <img src="/logo.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-200 mt-2" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </div>
    )
  );
};

export default BottomNavbar;
