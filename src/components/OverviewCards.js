import React from 'react';

import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";

const OverviewCards = ({ darkMode }) => {
  const summaryItems = [
    { title: 'Total Events', value: '100,000', percentageChange: '+5.0%' },
    { title: 'Active Speakers', value: 25, percentageChange: '-5.0%' }, // Negative percentage
    { title: 'Total Registration', value: 300, percentageChange: '+5.0%' },
    { title: 'Total Revenue', value: "$500,000", percentageChange: '+7.8%' },
  ];

  return (
    <div className={`p-4 w-full ms-pt-10   ${darkMode ? 'bg-gray-800 text-white' : 'text-black'}`}>
        
        <h2 className="text-2xl font-bold mb-8 pt-10 md:pt-2">Welcome! Here is your summary</h2>

      
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {summaryItems.map((item, index) => {
          // Determine if the percentage change is positive or negative
          const isPositive = item.percentageChange.startsWith('+');
          const isNegative = item.percentageChange.startsWith('-');

          return (
            <div 
            key={index} 
            className={`p-4 md:p-2 lg:p-4 shadow max-w-full overflow-hidden transition-all duration-300 border rounded-md
              ${darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-white hover:bg-purple-100'}`}
            >
              <div className="flex items-center mb-2">
                
                <h3 className="text-lg font-semibold ml-2 md:text-sm lg:text-lg">{item.title}</h3>
                <IoMdInformationCircleOutline className={`text-sm ms-1 ${darkMode ? 'text-white' : 'text-black'}`} />
              </div>
              {/* <div className={`grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-start ml-2`}>
  <p className="text-2xl md:text-sm lg:text-2xl font-bold ml-2 md:ml-1 md:text-left lg:text-left ">
    {item.value}
  </p>
  <div className={`flex items-center ${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : ''}`}>
  <div className="flex items-center">
    {isPositive ? (
      <GoArrowUpRight className="text-sm mr-1" />
    ) : isNegative ? (
      <GoArrowDownRight className="text-sm mr-1" />
    ) : null}
    <span className="text-sm">{item.percentageChange}</span>
  </div>
</div>

</div> */}

<div className={`flex md:flex-col sm:flex-row lg:flex-row items-center ml-2`}>
  <div className="flex items-center mb-1 md:mb-0 md:mr-2">
    <p className="text-2xl md:text-sm lg:text-2xl font-bold">{item.value}</p>
  </div>
  <div className={`flex items-center ${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : ''}`}>
    {isPositive ? (
      <GoArrowUpRight className="text-sm" />
    ) : isNegative ? (
      <GoArrowDownRight className="text-sm" />
    ) : null}
    <span className="ml-1 text-sm">{item.percentageChange}</span>
  </div>
</div>


            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewCards;
