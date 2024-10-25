import React, { useState, useEffect } from 'react'; 
import {FaRegCalendarAlt, FaRegUser, } from 'react-icons/fa';
import { BsFileText , BsToggleOn } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";

import { PiDiamondsFour , PiSpeakerHifiBold } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";


const Sidebar = ({ darkMode, toggleDarkMode, toggleCollapse, collapsed }) => {
  const [isOpen, setIsOpen] = useState(false); // To handle sidebar toggle on small screens

  // Toggle sidebar on small screens
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  // Disable body scrolling when sidebar is open on small screens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'auto'; // Re-enable background scroll when sidebar is closed
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isOpen]);

  return (
    <div className="flex">
      {/* Top Navbar for small screens */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border ' : 'bg-white text-gray-800 shadow-md'}`}>
      
        <img src="./logo.jpg" alt="Logo" className="h-8 w-8 rounded-full border-2 border-gray-200" />
        <button
          onClick={handleSidebarToggle}
          className={`p-2 rounded focus:outline-none transition-colors duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl" />  // Close icon when sidebar is open
          ) : (
            <RxHamburgerMenu className="text-2xl" />  // Hamburger menu when sidebar is closed
          )}
        </button>
      </div>
      

      {/* Sidebar Container */}
      <div
        className={`fixed transition-all duration-300 z-40 h-screen
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
          ${collapsed ? 'w-16' : 'w-full md:w-60'} 
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
          md:left-0 md:border-r border-gray-300 overflow-hidden p-2 md:ml-4`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4 px-2 pt-2">
          <img src="./logo.jpg" alt="Logo" className="h-12 w-12 rounded-full border-2 border-gray-200" />
        </div>

        {/* Sidebar navigation items */}
        <nav className="flex-grow overflow-y-auto">
        <ul className="space-y-6 h-[calc(100vh-64px)]">
  {[
    { icon: <CiHome className="rounded rounded-lg" />, label: 'Home' },
    {
      icon: collapsed ? <PiDiamondsFour className="rounded rounded-lg" /> : <FaRegCalendarAlt className="rounded rounded-lg" />,
      label: 'Events',
    },
    {
      icon: collapsed ? <PiSpeakerHifiBold className="rounded rounded-lg" /> : <FaRegUser className="rounded rounded-lg" />,
      label: 'Speakers',
    },
    {
      icon: collapsed ? <FiShoppingBag className="rounded rounded-lg" /> : <BsFileText className="rounded rounded-lg" />,
      label: 'Reports',
    },
    {
      icon: <IoIosNotificationsOutline />,
      label: 'Notifications',
      badge: true, // Dynamically add a badge here
    },
    { icon: <IoChatbubblesOutline />, label: 'Messages' },
    { icon: <IoSettingsOutline />, label: 'Settings' },
  ].map(({ icon, label, badge }, index) => (
    <li
      key={index}
      className={`relative flex items-center gap-2 p-2 ${
        !collapsed ? 'group hover:bg-purple-100' : ''
      }`} // Apply hover background only when not collapsed
    >
      <span className={`text-xl group-hover:text-purple-500 ${collapsed ? 'mx-auto' : 'mr-4'} relative`}>
        {icon}

        {/* Red dot when collapsed */}
        {badge && collapsed && (
          <span className="absolute top-[-4px] right-[-4px] block h-2.5 w-2.5 rounded-full bg-red-500"></span>
        )}
      </span>
      {/* Show label only if not collapsed */}
      {!collapsed && <span className="group-hover:text-purple-500">{label}</span>}

      {/* Badge for Notifications when not collapsed */}
      {badge && !collapsed && (
        <span className="absolute right-4 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
          3
        </span>
      )}
    </li>
  ))}

  {/* Collapse Button */}
  <li className={`flex items-center gap-2 cursor-pointer p-2 ${!collapsed ? 'group hover:bg-purple-100' : ''}`} onClick={toggleCollapse}>
    {collapsed ? (
      <MdKeyboardDoubleArrowRight className="text-xl ml-2 group-hover:text-purple-500" /> // Show right arrow when collapsed
    ) : (
      <MdKeyboardDoubleArrowLeft className="text-xl mr-4 group-hover:text-purple-500" />  // Show left arrow when expanded
    )}
    {!collapsed && <span className="group-hover:text-purple-500">Collapse</span>}
  </li>

  {/* Dark Mode Toggle */}
  <li className={`flex items-center gap-3 cursor-pointer p-2 ${!collapsed ? 'group hover:bg-purple-100' : ''}`} onClick={toggleDarkMode}>
    {darkMode ? (
      <RxSwitch className="text-xl text-white group-hover:text-purple-500" />
    ) : (
      <BsToggleOn className="text-xl text-gray-500 mr-4 group-hover:text-purple-500" />
    )}
    {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
  </li>

  <hr />

  {/* Profile Section */}
  <li>
    <div className="flex items-center justify-between mt-auto px-2">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-200" />
        {!collapsed && (
          <div className="ml-2">
            <span>Oluwayemisi Oladosu</span>
            <span className="block text-sm text-gray-500">oladosu@gmail.com</span>
          </div>
        )}
      </div>
    </div>
  </li>
</ul>




          
        </nav>
       
        
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleSidebarToggle}
        ></div>
      )}
      
    </div>
    
  );
};

export default Sidebar;
