import React from 'react';
import { FaPhoneAlt, FaEnvelope,FaRegClock } from 'react-icons/fa'; // Importing icons from react-icons

const TopBar: React.FC = () => {
  return (
    <div className="bg-white text-dark text-sm py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="h-[40px] w-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex space-x-2 mb-2 sm:mb-0">
          <FaRegClock className="text-lg text-gray-600" />
          <span>Opening Hour: Mon - Sat, 10:00 AM - 7:30 PM</span>
        </div>
        {/* Contact Numbers with Icons */}
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <FaPhoneAlt className="text-lg transition-all duration-200 ease-in-out hover:text-blue-500" />
          <span>04362-277812</span>
          <span>9566657812</span>
          <span>9894047812</span>
        </div>

        {/* Email with Icon */}
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <FaEnvelope className="text-lg transition-all duration-200 ease-in-out hover:text-blue-500" />
          <span>Email Us: <a href="mailto:info@isysway.in" className="underline">info@isysway.in</a></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
