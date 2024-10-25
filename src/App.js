import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import OverviewCards from './components/OverviewCards';
import EventChart from './components/EventChart';
import EventTable from './components/EventTable';

import BottomNavbar from './components/BottomNavbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle the 'dark' class on the document element
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  useEffect(() => {
    document.title = "OO | Event Mgt Dashboard";
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      {/* Sidebar */}
      <Sidebar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        toggleCollapse={toggleSidebarCollapse} 
        collapsed={sidebarCollapsed}
      />
      
      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} 
        ${sidebarCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-60'} 'md:ml-20' : 'md:ml-60' `}>

        


        <OverviewCards darkMode={darkMode} />
        <EventChart />
        <EventTable darkMode={darkMode} />
        
        
        
        
      </div>
      <BottomNavbar darkMode={darkMode}/>
    </div>
    </div>
  );
}

export default App;
