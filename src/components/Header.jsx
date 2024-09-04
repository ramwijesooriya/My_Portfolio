import React from 'react';

const Header = () => {
  return (
    <header className="bg-white bg- shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          Asanka Wijesooriya
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
