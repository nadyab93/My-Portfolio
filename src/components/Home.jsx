import React from 'react';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { theme } = useTheme();

    const handleGithubClick = () => {
        console.log("GitHub icon clicked!");
        // Add your GitHub link handling logic here
    };

    const handleGitlabClick = () => {
        console.log("GitLab icon clicked!");
        // Add your GitLab link handling logic here
    };

    const handleEmailClick = () => {
        console.log("Email icon clicked!");
        // Add your Email link handling logic here
    };

    return (
        <div id="home" className={`w-full h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <div className="max-w-3xl mx-auto px-4 flex flex-col justify-center h-full">
                <p className="text-sm sm:text-base">Hi, my name is</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    Nadya Bharrat
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    I'm an IT Professional.
                </h2>
                <p className="py-4 max-w-xl text-sm sm:text-base md:text-lg">
                    I excel in providing top-notch technical support and customer service with over 4 years of experience, specializing in troubleshooting web applications and managing customer inquiries. My expertise includes developing responsive web applications using HTML, CSS, JavaScript, and React, delivering seamless and engaging digital experiences.
                </p>
                <div className="hidden md:flex items-center justify-center md:justify-start space-x-6 mt-6">
                    <a
                        href="https://github.com/nadyab93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white group border-2 px-4 py-4 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ${theme === 'light' ? 'bg-black border-black hover:bg-gray-400 hover:border-gray-400' : 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700'}`}
                        onClick={handleGithubClick}
                    >
                        <FaGithub className="text-3xl" />
                    </a>
                    <a
                        href="https://gitlab.com/nadyab93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white group border-2 px-4 py-4 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ${theme === 'light' ? 'bg-black border-black hover:bg-gray-400 hover:border-gray-400' : 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700'}`}
                        onClick={handleGitlabClick}
                    >
                        <FaGitlab className="text-3xl" />
                    </a>
                    <a
                        href="mailto:nbharrat@outlook.com"
                        className={`text-white group border-2 px-4 py-4 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ${theme === 'light' ? 'bg-black border-black hover:bg-gray-400 hover:border-gray-400' : 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700'}`}
                        onClick={handleEmailClick}
                    >
                        <HiOutlineMail className="text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;


