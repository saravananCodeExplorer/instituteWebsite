import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClass = (path: string) =>
    `text-white text-lg hover:text-yellow-400 transition-all duration-300 ease-in-out border-b-2 ${
      location.pathname === path
        ? "border-yellow-500"
        : "border-transparent hover:border-yellow-500"
    }`;

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xl font-semibold"
          >
            Logo
          </motion.div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5 justify-center w-full">
            {[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: "Language School", path: "/language-school" },
              { name: "Placement Students", path: "/placement-students" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Review", path: "/review" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
              { name: "Placement Partners", path: "/placement-partners" },
            ].map((link) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-white text-2xl focus:outline-none transition-all duration-300 ease-in-out"
              whileTap={{ scale: 0.8 }}
            >
              {isMobileMenuOpen ? "×" : "≡"}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 py-2 md:hidden flex flex-col space-y-2 px-4"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/courses" },
                { name: "Language School", path: "/language-school" },
                { name: "Placement Students", path: "/placement-students" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Review", path: "/review" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
                { name: "Placement Partners", path: "/placement-partners" },
              ].map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={link.path}
                    className="block text-white text-lg py-2 px-4 border-b border-gray-600 hover:bg-gray-700 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
