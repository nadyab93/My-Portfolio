import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex justify-between items-center py-5 px-6 md:px-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="logo">
        <h1 className="text-3xl font-bold font-signature">N.B.</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About Me</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#certifications" className="hover:text-blue-600">Certifications</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact Me</a></li>
        <li>
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

