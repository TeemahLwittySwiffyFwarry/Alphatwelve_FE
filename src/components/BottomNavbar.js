import React, { useState, useEffect } from 'react';
import { FaHome, FaCalendarAlt, FaUser, FaFileAlt } from 'react-icons/fa';

const BottomNavbar = ({ darkMode }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Show navbar only if the scroll position is greater than 200
    setShowNavbar(scrollPosition > 200); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showNavbar && ( // Render the navbar only if showNavbar is true
      <div className={`w-full bg-white shadow-lg transition-colors duration-300 md:hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center hover:text-purple-500 transition-colors duration-300">
            <FaHome className="text-2xl" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-500 transition-colors duration-300">
            <FaCalendarAlt className="text-2xl" />
            <span className="text-xs">Events</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-500 transition-colors duration-300">
            <FaUser className="text-2xl" />
            <span className="text-xs">Speakers</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-500 transition-colors duration-300">
            <FaFileAlt className="text-2xl" />
            <span className="text-xs">Reports</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-500 transition-colors duration-300">
            <img src="/path-to-your-profile-picture.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-200" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </div>
    )
  );
};

export default BottomNavbar;
