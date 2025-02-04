import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-white text-dark text-sm py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-6 lg:px-8 gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4"
        >
          <img
            src="/assets/logo.png"
            alt="logo"
            className="h-[40px] w-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-2 text-gray-700"
        >
          <FaRegClock className="text-lg" />
          <span>Mon - Sat, 10:00 AM - 7:30 PM</span>
        </motion.div>

        {/* Contact Numbers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center space-x-4"
        >
          <FaPhoneAlt className="text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ease-in-out" />
          <span className="hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            04362-277812
          </span>
          <span className="hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            9566657812
          </span>
          <span className="hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            9894047812
          </span>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4"
        >
          <FaEnvelope className="text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ease-in-out" />
          <span>
            Email Us:{" "}
            <a
              href="mailto:info@isysway.in"
              className="underline text-blue-500 hover:text-blue-700 transition-all duration-200"
            >
              info@isysway.in
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default TopBar;
