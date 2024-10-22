import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ showModal, event, handleClose, darkMode }) => {
  if (!showModal) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} bg-opacity-50 transition duration-300`}
    >
      <div 
        className={`p-6 rounded-lg shadow-lg max-w-lg relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition duration-300`}
      >
        
        {/* Close "x" button at the top right corner */}
        <button 
          onClick={handleClose} 
          className={`absolute top-3 right-3 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'} focus:outline-none`}
        >
          <IoIosCloseCircleOutline />
        </button>

        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        {event && (
          <>
            <p><strong>Event Name:</strong> {event.name}</p>
            <p><strong>Description:</strong> {event.description || 'No description available'}</p>
            <p><strong>Date:</strong> {event.date}</p>
            
            <div className="flex flex-col items-center justify-center mb-4">
              <img 
                src={event.speakerProfilePicture} 
                alt="Speaker" 
                className="my-4 w-24 h-24 rounded-full"
              />
              <p className="mt-2 text-center"><strong>Speaker:</strong> {event.speaker}</p>
              <p>500 Attendees</p>
            </div>
            
            {/* Button Group */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              {/* Edit Button (Left) */}
              <button 
                className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex-1 sm:flex-none ${darkMode ? 'hover:bg-green-400' : ''}`}
              >
                Edit
              </button>

              {/* Delete and Mark as Completed Buttons (Right) */}
              <div className="flex flex-col sm:flex-row sm:ml-auto gap-4">
                <button 
                  className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-red-400' : ''}`}
                >
                  Delete
                </button>
                <button 
                  className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-blue-400' : ''}`}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
