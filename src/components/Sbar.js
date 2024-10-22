import React, { useState } from 'react';
import {
  FaHome, FaCalendarAlt, FaUser, FaFileAlt, FaBell, FaEnvelope, FaCog, FaAngleRight, FaToggleOn, FaToggleOff, FaBars
} from 'react-icons/fa';

const Sidebar = ({ darkMode, toggleDarkMode, toggleCollapse, collapsed }) => {
  const [isOpen, setIsOpen] = useState(false); // To handle sidebar toggle on small screens

  // Toggle sidebar on small screens
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Top Navbar for small screens */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white flex justify-between p-4 md:hidden">
        <img src="./logo.jpg" alt="Logo" className="h-8 w-8 rounded-full border-2 border-gray-200" />
        <button
          onClick={handleSidebarToggle}
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed transition-all duration-300 z-50 h-screen 
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
          ${collapsed ? 'w-16 md:w-16' : 'w-full md:w-60'} 
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:left-0 md:border-r border-gray-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4 px-2 pt-2">
          <img src="./logo.jpg" alt="Logo" className="h-12 w-12 rounded-full border-2 ms-4 border-gray-200" />
        </div>

        {/* Sidebar navigation items */}
        <nav className="flex-grow">
          <ul className="space-y-6">
            {[{
                icon: <FaHome />, label: 'Home' },
              { icon: <FaCalendarAlt />, label: 'Events' },
              { icon: <FaUser />, label: 'Speakers' },
              { icon: <FaFileAlt />, label: 'Reports' },
              { icon: <FaBell />, label: 'Notifications' },
              { icon: <FaEnvelope />, label: 'Messages' },
              { icon: <FaCog />, label: 'Settings' },
            ].map(({ icon, label }, index) => (
              <li key={index} className="flex items-center gap-2 group">
                <span className={`text-xl group-hover:text-purple-500 ${collapsed ? 'mx-auto' : 'mr-4'}`}>
                  {icon}
                </span>
                {!collapsed && <span className="group-hover:text-purple-500">{label}</span>}
              </li>
            ))}

            {/* Collapse Button */}
            <li className="flex items-center gap-2 cursor-pointer group" onClick={toggleCollapse}>
              <FaAngleRight className={`text-xl group-hover:text-purple-500 ${collapsed ? 'mx-auto' : 'mr-4'}`} />
              {!collapsed && <span className="group-hover:text-purple-500">Collapse</span>}
            </li>

            {/* Dark Mode Toggle */}
            <li className="flex items-center gap-2 cursor-pointer group" onClick={toggleDarkMode}>
              {darkMode ? (
                <FaToggleOn className="text-xl text-white mr-4 group-hover:text-purple-500" />
              ) : (
                <FaToggleOff className="text-xl text-gray-500 mr-4 group-hover:text-purple-500" />
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
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={handleSidebarToggle}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
