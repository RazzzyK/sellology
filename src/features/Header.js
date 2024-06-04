import React from 'react';
import { Link } from 'react-router-dom';
import DayScheduleButton from '../components/Schedule';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-2xl font-bold">
        <Link to="/">
              Sellology
            </Link>
            </div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700">
              Home
            </Link>
            <Link to="/services" className="text-gray-700">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-700">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700">
              Contact
            </Link>
        </nav>
        
        <div className="space-x-4">
          <DayScheduleButton />
          <Link to="/login" className="text-blue-500">Log In</Link>
          <Link to="/getstarted" className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-indigo-200">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
