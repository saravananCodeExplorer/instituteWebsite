import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClass = (path: string) =>
    `text-white hover:text-white transition-all duration-300 ease-in-out border-b-2 ${
      location.pathname === path
        ? 'border-yellow-500'
        : 'border-transparent hover:border-yellow-500'
    }`;

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-xl font-semibold">Logo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 justify-center w-full">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/courses" className={getLinkClass('/courses')}>
              Courses
            </Link>
            <Link
              to="/language-school"
              className={getLinkClass('/language-school')}
            >
              Language School
            </Link>
            <Link
              to="/placement-students"
              className={getLinkClass('/placement-students')}
            >
              Placement Students
            </Link>
            <Link to="/testimonials" className={getLinkClass('/testimonials')}>
              Testimonials
            </Link>
            <Link to="/review" className={getLinkClass('/review')}>
              Review
            </Link>
            <Link to="/gallery" className={getLinkClass('/gallery')}>
              Gallery
            </Link>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
            <Link
              to="/placement-partners"
              className={getLinkClass('/placement-partners')}
            >
              Placement Partners
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white focus:outline-none transition-all duration-300 ease-in-out"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">×</span>
              ) : (
                <span className="text-2xl">≡</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } bg-gray-800 py-2 md:hidden`}
        >
          <Link to="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link to="/courses" className={getLinkClass('/courses')}>
            Courses
          </Link>
          <Link
            to="/language-school"
            className={getLinkClass('/language-school')}
          >
            Language School
          </Link>
          <Link
            to="/placement-students"
            className={getLinkClass('/placement-students')}
          >
            Placement Students
          </Link>
          <Link to="/testimonials" className={getLinkClass('/testimonials')}>
            Testimonials
          </Link>
          <Link to="/review" className={getLinkClass('/review')}>
            Review
          </Link>
          <Link to="/gallery" className={getLinkClass('/gallery')}>
            Gallery
          </Link>
          <Link to="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
          <Link
            to="/placement-partners"
            className={getLinkClass('/placement-partners')}
          >
            Placement Partners
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
