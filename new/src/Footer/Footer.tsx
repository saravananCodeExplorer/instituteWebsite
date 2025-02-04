import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">Isysway Technologies</h2>
          <p className="mt-3">12-A Nallaiya Complex, [Basement Floor], Near Railway Station, Thanjavur 613001.</p>
          <p className="mt-2 flex justify-center sm:justify-start items-center gap-2">
            <Phone className="text-yellow-400" /> 04362-277812, 9894047812
          </p>
          <p className="mt-2 flex justify-center sm:justify-start items-center gap-2">
            <Mail className="text-yellow-400" /> info@isysway.in
          </p>
          <h2 className="text-2xl font-semibold text-yellow-400 mt-5">Branch Contact Info</h2>
          <p className="mt-3">No:52, 2nd Kumar Complex, RR Nagar, New Bus Stand, Thanjavur-613005.</p>
          <p className="mt-2 flex justify-center sm:justify-start items-center gap-2">
            <Phone className="text-yellow-400" /> 9894047812, 9566657812
          </p>
          <p className="mt-2 flex justify-center sm:justify-start items-center gap-2">
            <Mail className="text-yellow-400" /> info@isysway.in
          </p>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-yellow-400">Popular Links</h3>
          <ul className="mt-3 space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'Courses', path: '/courses' },
              { name: 'Language School', path: '/language-school' },
              { name: 'Placement Students', path: '/placement-students' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Reviews', path: '/review' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={link.path} className="hover:text-yellow-400 transition-all duration-300">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-yellow-400">Follow Us</h3>
          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            {[
              { icon: <Facebook size={24} />, link: 'https://facebook.com' },
              { icon: <Twitter size={24} />, link: 'https://twitter.com' },
              { icon: <Linkedin size={24} />, link: 'https://linkedin.com' },
              { icon: <Instagram size={24} />, link: 'https://instagram.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400"
      >
        Copyright &copy; Isysway Technologies 2025. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
