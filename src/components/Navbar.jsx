import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`py-4 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold">Nadya Bharrat</span>
                </div>
                <ul className="hidden md:flex space-x-4 list-none">
                    <li>
                        <Link
                            to='home'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='about'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='skills'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='certifications'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            Certifications
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='projects'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='contact'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={handleMenuToggle} className="focus:outline-none">
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
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center ml-4">
                    <input
                        type="checkbox"
                        className="hidden"
                        id="toggle"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                    <label
                        htmlFor="toggle"
                        className={`cursor-pointer w-12 h-6 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} relative`}
                    >
                        <span
                            className={`block w-6 h-6 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'}`}
                        />
                    </label>
                </div>
            </div>
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col space-y-4 mt-4 list-none">
                    <li>
                        <Link
                            to='home'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='about'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='skills'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='certifications'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            Certifications
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='projects'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='contact'
                            smooth={true}
                            duration={500}
                            className={`hover:text-[#800000] cursor-pointer ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                            onClick={handleMenuToggle}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

