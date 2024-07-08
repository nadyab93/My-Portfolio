import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();

    return (
        <div id="contact" className={`w-full min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <div className="flex justify-center items-center p-4 h-full">
                <form action="https://formspree.io/f/xblrjbkr" method="POST" className={`flex flex-col max-w-[600px] w-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} p-4 rounded-lg shadow-lg`}>
                    <div className="pb-8 flex justify-center flex-col items-center">
                        <p className={`text-4xl font-bold inline border-b-4 border-[#800000] ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Contact Me</p>
                        <p className={`text-center py-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>Submit the form below or shoot me an email at nbharrat@outlook.com</p>
                    </div>
                    <input className={`bg-white p-3 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`} type="text" placeholder="Name" name="name" required />
                    <input className={`bg-white p-3 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`} type="email" placeholder="Email" name="email" required />
                    <textarea className={`bg-white p-3 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`} name="message" rows="5" placeholder="Message" required></textarea>
                    <button type="submit" className={`bg-transparent border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-500 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-lg transition duration-200 ${theme === 'light' ? 'border-gray-800' : 'border-white'}`} style={{ width: 'fit-content', margin: 'auto' }}>
                        Let's Collaborate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

