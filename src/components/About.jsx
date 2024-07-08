import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Import your image from the assets folder
import Picture from '../assets/Picture.jpg';

const About = () => {
    const { theme } = useTheme();

    return (
        <div id="about" className={`w-full min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col justify-center items-center h-full"> {/* Center items vertically and horizontally */}
                <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                    <div className="pb-8 sm:col-span-2 text-center"> {/* Centering the title */}
                        <p className={`text-3xl sm:text-4xl font-bold inline border-b-4 ${theme === 'light' ? 'border-[#800000]' : 'border-[#800000]'}`}>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-2xl sm:text-4xl font-bold">
                        {/* Replace the text with the imported image */}
                        <img src={Picture} alt="About Me" className="max-w-full h-auto rounded-md shadow-lg" />
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                        <p>
                            As a newcomer to the tech world, I bring 4+ years of experience in technical
                            support and customer service, with a strong passion for both web development and
                            IT support. I find joy in troubleshooting web applications and crafting visually captivating websites
                            using HTML, CSS, JavaScript, and React. Trained in Agile methodologies and API integration, I  
                            am eager to harmonize creativity with functionality, creating user-friendly interfaces and impactful
                            designs. Ready to embrace new challenges, I aspire to make significant contributions
                            to web development and IT support!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


