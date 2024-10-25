import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ showModal, event, handleClose, darkMode }) => {
  if (!showModal) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 w-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} bg-opacity-50 transition duration-300`}
    >
      <div 
        className={`p-6  shadow-lg max-w-lg relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition duration-300`}
      >
        
        {/* Close "x" button at the top right corner */}
        <button 
          onClick={handleClose} 
          className={`absolute top-3 right-3 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'} focus:outline-none`}
        >
          <IoIosCloseCircleOutline size={30} />
        </button>

        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        {event && (
          <>
            <p><strong>Event Name:</strong> {event.name}</p>
            <p className='mt-6'><strong >Event Description:</strong> {event.description || 'No description available'}</p>
            <p className='mt-6'><strong>Date:</strong> {event.date}</p>
            
            <div className="flex flex-col items-start justify-center mb-4">
  {/* Horizontal Olympic-style overlapping images */}
  <div className="relative flex items-center mt-8">
    <img
      src={event.speakerProfilePicture}
      alt="Speaker 1"
      className="w-16 h-16 rounded-full border-4 border-white z-30"
      style={{ marginRight: '-25px' }}
    />
    <img
      src={event.speakerProfilePicture}
      alt="Speaker 2"
      className="w-16 h-16 rounded-full border-4 border-white z-20"
      style={{ marginRight: '-25px' }}
    />
    <img
      src={event.speakerProfilePicture}
      alt="Speaker 3"
      className="w-16 h-16 rounded-full border-4 border-white z-10"
    />
  </div>

  {/* Additional information */}
  <p className="mt-4 text-left"><strong>3 Guest Speakers:</strong> {event.speaker}, Prof. Jega Kashimawo, Dr. Gbadejo Kashomo</p>
  <p className="text-left">500 Attendees</p>
</div>




            
            {/* Button Group */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between sm:items-center gap-4 ">
              {/* Edit Button (Left) */}
              <button 
                className={`bg-white  border border-gray-300  hover:bg-gray-400 text-gray-800 px-4 py-2  flex-1 sm:flex-none ${darkMode ? 'hover:bg-gray-400' : ''}`}
              >
                Edit
              </button>

              {/* Delete and Mark as Completed Buttons (Right) */}
              <div className="flex flex-col sm:flex-row sm:ml-auto gap-4 ">
                <button 
                  className={`bg-red-500 hover:bg-red-800 text-white px-4 py-2  ${darkMode ? 'hover:bg-red-400' : ''}`}
                >
                  Delete
                </button>
                <button 
                  className={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2  ${darkMode ? 'hover:bg-indigo-400' : ''}`}
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
