import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../stylesmodules/Navbar.css";

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
    <nav className="w-full flex justify-around items-center px-4 py-4 bg-white shadow-md font-sans relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="h-12" />
        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto"
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
        <a
          href="/"
          onClick={() => setActiveLink('home')}
          className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 font-medium ${
            activeLink === 'home' ? 'bg-[#c7f121] text-black' : 'text-[#555]'
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setActiveLink('about')}
          className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 ${
            activeLink === 'About' ? 'bg-[#c7f121] text-black' : 'text-[#727070]'
          }`}
        >
          About
        </a>
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setActiveLink('services')}
            className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 flex items-center gap-1 ${
              activeLink === 'services'
                ? 'bg-[#c7f121] text-black'
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
        <a
          href="/blogs"
          onClick={() => setActiveLink('blogs')}
          className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 ${
            activeLink === 'blogs' ? 'bg-[#c7f121] text-black' : 'text-[#555]'
          }`}
        >
          Blogs
        </a>
        <a
          href="/contact"
          onClick={() => setActiveLink('contact')}
          className={`px-4 py-1.5 rounded-full hover:text-black hover:bg-gray-200 ${
            activeLink === 'contact' ? 'bg-[#c7f121] text-black' : 'text-[#555]'
          }`}
        >
          Contact
        </a>
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
