import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../stylesmodules/Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [activeIcon, setActiveIcon] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path.includes('about')) setActiveLink('about');
    else if (path.includes('services')) setActiveLink('services');
    else if (path.includes('blogs')) setActiveLink('blogs');
    else if (path.includes('contact')) setActiveLink('contact');
  }, []);

  return (
    <nav className="w-full flex fixed top-0 justify-around items-center px-4 py-4 bg-white font-sans z-50">
      {/* Left: Logo */}
     <div className="flex items-center justify-between w-full lg:w-auto">
  <img src="https://res.cloudinary.com/dtfjtlpia/image/upload/v1746759430/Screenshot_2025-05-09_082544_zdmzwr.png" alt="Logo" className="h-12 w-15" />
  <button
    className="lg:hidden flex flex-col gap-1.5"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span className="w-6 h-0.5 bg-black" />
    <span className="w-6 h-0.5 bg-black" />
    <span className="w-6 h-0.5 bg-black" />
  </button>
</div>

      {/* Center: Navigation */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row items-start lg:items-center gap-4 lg:gap-6 absolute lg:static top-20 left-4 right-4 bg-white lg:bg-transparent rounded-xl lg:rounded-none shadow-md lg:shadow-none p-4 lg:p-0 transition-all z-40`}
      >
        {/* Corrected Order */}
        <Link
          to="/"
          onClick={() => setActiveLink('home')}
          className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 ${
            activeLink === 'home' ? 'bg-[#c7f121] text-black' : 'text-[#555]'
          }`}
        >
          Home
        </Link>
       <Link
          to="/about"
          onClick={() => setActiveLink('home')}
          className={`px-4 py-1.5 rounded-full hover:bg-[#c7f121] hover:text-[#000000] ${
            activeLink === 'home' ? 'bg-[#fcf9f9] text-black' : 'text-[#555]'
          }`}
        >
          About
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setActiveLink('services')}
            className={`px-4 py-1.5 rounded-full hover:bg-[#c7f121] hover:text-[#000000] flex items-center gap-1 ${
              activeLink === 'services'
                ? 'bg-[#fcf9f9] text-black'
                : 'text-[#555]'
            }`}
          >
            Services <span className="text-lg font-bold">+</span>
          </button>
          {dropdownOpen && (
            <div className="absolute top-10 left-0 w-64 bg-white rounded-xl shadow-lg z-50 p-2 flex flex-col">
              {[
                'Business Advisory',
                'Business Accounting',
                'Tax Accounting',
                'Bookkeeping Services',
                'SMSF Accountants',
                'Software Solutions',
                'QBCC Annual Reporting',
                'Crypto Accountant',
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          to="/blog"
          onClick={() => setActiveLink('home')}
          className={`px-4 py-1.5 rounded-full hover:bg-[#c7f121] hover:text-[#000000] ${
            activeLink === 'home' ? 'bg-[#fcf9f9] text-black' : 'text-[#555]'
          }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={() => setActiveLink('home')}
          className={`px-4 py-1.5 rounded-full hover:bg-[#c7f121] hover:text-[#000000] ${
            activeLink === 'home' ? 'bg-[#fcf9f9] text-black' : 'text-[#555]'
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Right: Social Media */}
      <div className="hidden lg:flex items-center gap-2">
        <span className="text-sm text-gray-600">Our Social Media</span>
        <div className="flex gap-2 text-white">
          <div
            onClick={() => setActiveIcon('facebook')}
            className={`w-8 h-8 rounded-full flex hover-media items-center justify-center cursor-pointer transition ${
              activeIcon === 'facebook'
                ? 'bg-[#c7f121] text-black'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            <FaFacebookF />
          </div>
          <div
            onClick={() => setActiveIcon('twitter')}
            className={`w-8 h-8 rounded-full hover-media flex items-center justify-center cursor-pointer transition ${
              activeIcon === 'twitter'
                ? 'bg-[#c7f121] text-black'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            <FaTwitter />
          </div>
          <div
            onClick={() => setActiveIcon('instagram')}
            className={`w-8 h-8 rounded-full flex items-center hover-media justify-center cursor-pointer transition ${
              activeIcon === 'instagram'
                ? 'bg-[#c7f121] text-black'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
