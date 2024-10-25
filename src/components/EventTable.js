import React, { useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { FaLessThan, FaGreaterThan, FaChevronRight, FaChevronDown, FaCircle } from 'react-icons/fa';

import Modal from './Modal'; // Import the new Modal component
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // This is an additional plugin for auto-table generation



const EventTable = ({ darkMode }) => {
    const events = [
        { name: 'Cloud Innovation summit and Innovation', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Web3 Interface Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Web3 Interface Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Cybersecurity for startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'Cloud Innovation summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Blockchain Revolution Conference', date: '15-05-24', speaker: 'Jane Smith', status: 'in-progress', speakerProfilePicture: '/profile.png', },
        { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'completed', speakerProfilePicture: '/profile.png', },
        { name: 'Data analytic In Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'completed', speakerProfilePicture: '/profile.png', },
        // Your event objects here...
    ];


    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [openRow, setOpenRow] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(events); // Initialize with all events
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Handle search and filtering
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query); // Update searchQuery directly

        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(query) ||
            event.speaker.toLowerCase().includes(query)
        );
        setFilteredEvents(filtered);
        setCurrentPage(0); // Reset to the first page after filtering
    };

    // Handle date filtering
    const handleDateChange = (e) => {
        const selectedDate = e.target.value; // Date picked from the date picker
        setSelectedDate(selectedDate);

        // Filter events by the selected date
        const filteredByDate = events.filter(event => event.date === selectedDate);
        setFilteredEvents(filteredByDate.length ? filteredByDate : events); // If no match, show all
        setCurrentPage(0); // Reset to the first page after filtering
    };

    // Sort by status: 'in-progress' first, then 'completed'
    // const sortByStatus = (a, b) => {
    //     const statusOrder = { 'in-progress': 1, 'completed': 2 };
    //     return statusOrder[a.status] - statusOrder[b.status];
    // };


    const pageCount = Math.ceil(filteredEvents.length / itemsPerPage);
    const currentEvents = filteredEvents.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(0);
    };

    // Handle clicking on an event to open the modal
    const handleEventClick = (event) => {
        setSelectedEvent(event); // Set the selected event
        setShowModal(true);      // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    const toggleRow = (index) => {
        setOpenRow(openRow === index ? null : index);
    };

    const handleStatusChange = (status) => {
        // Filter events based on the selected status
        const filteredByStatus = status ? events.filter(event => event.status === status) : events;
        setFilteredEvents(filteredByStatus);
        setCurrentPage(0); // Reset to the first page after filtering
    };

    const handleSortBySpeakerName = (sortOrder) => {
        const sortedEvents = [...events]; // Copy the events array

        if (sortOrder === 'asc') {
            sortedEvents.sort((a, b) => a.speaker.localeCompare(b.speaker)); // Sort A-Z by speaker name
        } else if (sortOrder === 'desc') {
            sortedEvents.sort((a, b) => b.speaker.localeCompare(a.speaker)); // Sort Z-A by speaker name
        }

        setFilteredEvents(sortedEvents); // Update the state with sorted events
        setCurrentPage(0); // Reset to the first page after sorting
    };

    const handleSortChange = (sortOrder) => {
        const sortedEvents = [...events]; // Copy the events array

        if (sortOrder === 'nameAsc') {
            sortedEvents.sort((a, b) => a.name.localeCompare(b.name)); // Sort A-Z by event name
        } else if (sortOrder === 'nameDesc') {
            sortedEvents.sort((a, b) => b.name.localeCompare(a.name)); // Sort Z-A by event name
        } else if (sortOrder === 'recent') {
            sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent
        }

        setFilteredEvents(sortedEvents); // Update the state with sorted events
        setCurrentPage(0); // Reset to the first page after sorting
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        const title = "Event History";

        doc.setFontSize(20);
        doc.text(title, 14, 22);

        const tableColumn = ["Event Name", "Date", "Speaker", "Status"];
        const tableRows = [];

        currentEvents.forEach(event => {
            const eventData = [
                event.name,
                event.date,
                event.speaker,
                event.status
            ];
            tableRows.push(eventData);
        });

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 30,
            styles: { overflow: 'linebreak', fontSize: 10 },
            theme: 'striped'
        });

        doc.save("event_history.pdf");
    };









    return (
        <div className={`p-6 mb-16 md:mb-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            
            <h1 className="text-2xl font-bold mb-4">Event History</h1>

            <form className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-7 w-full max-w-full">
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={`border rounded-md p-2 pl-10 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    />
                    {/* Search icon inside the input */}
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-3/4 text-gray-500" />
                </div>
                
                <div className="relative w-full md:w-auto">
                    <input
                        type={isFocused ? "date" : "text"}
                        value={selectedDate}
                        onChange={handleDateChange}
                        placeholder={isFocused ? "" : "Date"}
                        className={`border rounded-md p-2 w-full placeholder-gray-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>


                <div>
                    <select
                        className={`border rounded-md p-2 w-full md:w-auto ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <option value="">Status</option> {/* Show all when no specific status is selected */}
                        <option value="completed">Completed</option>
                        <option value="in-progress">In-progress</option>
                    </select>

                </div>
                <div>
                    <select
                        className={`border rounded-md p-2 w-full md:w-2/3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                        onChange={(e) => handleSortBySpeakerName(e.target.value)}
                    >
                        <option value="" >Name</option> {/* Default option */}
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>

                </div>
                <span className="w-full md:w-auto">Displaying {events.length} results</span>

                <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sort:</span>
                    <select
                        className={`border rounded-md p-2 w-full md:w-auto ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                        onChange={(e) => handleSortChange(e.target.value)}
                    >
                        <option value="recent">Most Recent</option>
                        <option value="nameAsc">Name: A-Z</option>
                        <option value="nameDesc">Name: Z-A</option>

                    </select>
                </div>
                <div className="flex justify-between ml-0 md:ml-4">
    <button className="border rounded-md p-2 w-full w-1/4 text-center">
        <BsThreeDotsVertical />
    </button>

    <button
        onClick={exportToPDF} // Attach export function
        className={`border rounded-md p-2 flex items-center w-full md:w-auto ${darkMode ? 'text-white' : 'text-black'} ml-32 md:ml-4`} 
    >
        <FiArrowDown className="mr-1" />
        Export
    </button>
</div>

            </form>


            {/* Table and pagination controls go here */}
            <div className="overflow-x-auto max-w-full">
  <table className={`min-w-full table-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <tr>
        <th className="border px-4 py-2 text-left">Event Name</th>
        <th className="border px-4 py-2 text-left hidden sm:table-cell">Date</th>
        <th className="border px-4 py-2 text-left hidden sm:table-cell">Speaker</th>
        <th className="border px-4 py-2 text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      {currentEvents.map((event, index) => (
        <React.Fragment key={index}>
          {/* Primary row with event details */}
          <tr className={darkMode ? 'border-gray-600' : 'border-gray-200'}>
            <td className="border px-2 py-2 flex items-center">
              {/* Toggle button to expand/collapse row */}
              <button onClick={() => toggleRow(index)} className="mr-2">
                {openRow === index ? (
                  <FaChevronDown className="md:hidden" />
                ) : (
                  <FaChevronRight className="md:hidden" />
                )}
              </button>
              {/* Event name button */}
              <button
                onClick={() => handleEventClick(event)}
                className={`ml-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black border-gray-200'}`}
              >
                {event.name}
              </button>
            </td>
            {/* Hidden on small screens */}
            <td className="border px-4 py-2 hidden sm:table-cell">{event.date}</td>
            <td className="border px-4 py-2 hidden sm:table-cell">{event.speaker}</td>
            {/* Status button */}
            <td className="border px-1 py-1 text-center ml-0 md:ml-2">
              {event.status === 'in-progress' ? (
                <button className="flex items-center bg-blue-500 md:bg-green-100 text-white md:text-green-600 rounded-lg px-1 py-1 text-xs/4 md:text-sm  md:pr-4">
                  <FaCircle className="text-white hidden sm:inline md:text-green-600 mr-1" />
                  In Progress
                </button>
              ) : (
                <button className="flex items-center bg-green-600 md:bg-purple-100 text-white md:text-purple-600 rounded-lg px-1 py-1 text-xs/4 md:text-sm md:pr-4">
                  <FaCircle className="text-white hidden sm:inline md:text-purple-600 mr-1" />
                  Completed
                </button>
              )}
            </td>
          </tr>

          {/* Expanded row */}
          {openRow === index && (
            <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} sm:hidden`}>
              {/* Spanning all columns */}
              <td colSpan="4" className="border px-4 py-2">
                <div className="grid grid-cols-2">
                  {/* Speaker name on the left */}
                  <div className="font-medium text-left"> {event.speaker}</div>
                  {/* Date on the right */}
                  <div className="font-medium text-right">{event.date}</div>
                </div>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  </table>

   {/* Pagination and controls... */}
   <div className="flex sm:flex-col md:flex-row sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
    {/* Pagination Controls */}
    <div className="flex items-center space-x-2">
        {/* Previous Arrow */}
        <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`p-3 bg-gray-200 border border-gray-400 rounded-sm ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <FaLessThan className='text-black' />
        </button>

        {/* Page Numbers with Circular Background and Spacing */}
        <div className="flex items-center space-x-1 md:space-x-4">  {/* Adjust space between circles */}
            {Array.from({ length: Math.min(3, pageCount) }, (_, index) => {
                const pageNumber = Math.max(
                    0,
                    Math.min(currentPage - 1, pageCount - 3)
                ) + index;

                return (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-8 h-8 flex items-center justify-center text-sm sm:text-base rounded-full ${
                            currentPage === pageNumber
                                ? 'bg-purple-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        {pageNumber + 1}
                    </button>
                );
            })}
        </div>

        {/* Next Arrow */}
        <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= pageCount - 1}
            className={`p-3 bg-gray-200 border border-gray-400 rounded-sm ${currentPage >= pageCount - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <FaGreaterThan className='text-black' />
        </button>
    </div>

    {/* Rows per Page Selection */}
    <div className="flex items-center">
        <span className="hidden sm:inline">Show: </span>
        <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className={`border rounded ml-2 p-1 text-sm sm:text-base ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-200'}`}
        >
            <option value={10}>10 rows</option>
            <option value={15}>15 rows</option>
            <option value={20}>20 rows</option>
            <option value={25}>25 rows</option>
            <option value={30}>30 rows</option>
        </select>
    </div>
</div>
</div>

           




            {/* Modal */}
            <Modal
                showModal={showModal}
                event={selectedEvent}
                handleClose={handleCloseModal}
                darkMode={darkMode} 
         
            />
        </div>
    );
};

export default EventTable;
