import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'dayschedule-widget/dist/dayschedule-popup.css';
import 'dayschedule-widget/dist/dayschedule-widget.js';

const DayScheduleButton = () => {
  const handleClick = () => {
    if (window.daySchedule) {
        window.daySchedule.initPopupWidget({ url: 'https://stavan.dayschedule.com/' });
      } else {
        console.error('daySchedule is not defined');
      }
  };

    return (
      <button
        onClick={handleClick}
        className="bg-yellow-600 text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        {/* <FontAwesomeIcon icon={faCalendar} className="mr-2" /> */}
        Book Consultation
      </button>
    );
}

export default DayScheduleButton;