import React, { useState } from 'react';
import { FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa6';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const EventTable = ({ darkMode }) => {
    const events = [
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed' },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress' },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed' },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed' },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed' },
        { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'completed' },
        { name: 'Web3 Interface Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'in-progress' },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed' },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress' },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress' },
        { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'completed' },
        { name: 'Web3 Interface Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'in-progress' },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed' },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress' },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress' },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed' },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress' },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed' },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed' },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed' },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed' },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress' },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress' },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed' },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress' },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed' },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed' },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed' },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed' },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress' },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress' },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed' },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress' },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed' },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed' },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed' },
        
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5); // Default to 5 items per page

    // Calculate the number of pages
    const pageCount = Math.ceil(events.length / itemsPerPage);
    
    // Get current events to display based on the selected items per page
    const currentEvents = events.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(0); // Reset to first page
    };

    return (
        <div className={`p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h1 className="text-2xl font-bold mb-4">Event History</h1>
            <form className="flex items-center space-x-4 mb-6">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className={`border rounded-md p-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
                />
                <select className={`border rounded-md p-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                    <option>Date</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <select className={`border rounded-md p-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
                <select className={`border rounded-md p-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                    <option>Name</option>
                    <option>Event 1</option>
                    <option>Event 2</option>
                </select>
                <span>Displaying {events.length} results</span>
                <select className={`border rounded-md p-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                    <option>Sort: Most Recent</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <button className="border rounded-md p-2">...</button>
                <button className={`border rounded-md p-2 flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <FiArrowDown className="mr-1" />
                    Export
                </button>
            </form>
            <table className={`min-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <tr>
                        <th className="border px-4 py-2 text-left">Event Name</th>
                        <th className="border px-4 py-2 text-left">Date</th>
                        <th className="border px-4 py-2 text-left">Speaker</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEvents.map((event, index) => (
                        <tr key={index} className={darkMode ? 'border-gray-600' : 'border-gray-200'}>
                            <td className="border px-4 py-2">{event.name}</td>
                            <td className="border px-4 py-2">{event.date}</td>
                            <td className="border px-4 py-2">{event.speaker}</td>
                            <td className="border px-4 py-2">
                                {event.status === 'in-progress' ? (
                                    <button className="flex items-center bg-green-100 text-green-600 rounded-lg px-3 py-1">
                                        <FaCircle className="text-green-600 mr-1" />
                                        In Progress
                                    </button>
                                ) : (
                                    <button className="flex items-center bg-purple-100 text-purple-600 rounded-lg px-3 py-1">
                                        <FaCircle className="text-purple-600 mr-1" />
                                        Completed
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination Controls */}
            {/* Pagination Controls */}
<div className="flex justify-between items-center mt-4">
    <div className="flex items-center space-x-2">
        <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`p-2 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <FaLessThan />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: pageCount }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`px-3 py-1 rounded-full ${currentPage === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                {index + 1}
            </button>
        ))}

        <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= pageCount - 1}
            className={`p-2 ${currentPage >= pageCount - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <FaGreaterThan />
        </button>
    </div>

    {/* Rows per Page Selection */}
    <div className="ml-4">
        <span>Show: </span>
        <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            
            
            className={`border rounded ml-2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-200'}`}
        >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={15}>15 rows</option>
            <option value={20}>20 rows</option>
            <option value={25}>25 rows</option>
            <option value={30}>30 rows</option>
        </select>
        
    </div>
</div>

        </div>
    );
};

export default EventTable;
