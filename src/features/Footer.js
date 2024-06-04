import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        
        <div className="mt-4 space-x-4">
        <Link to="/" className="text-gray-600">
              Home
            </Link>
            <Link to="/services" className="text-gray-600">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-600">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-600">
              Contact
            </Link>
          <Link to="/tos" className="text-gray-600">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-600">
              Privacy Policy
            </Link>
        </div>
        <p className="text-sm">&copy; 2024 Sellology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
