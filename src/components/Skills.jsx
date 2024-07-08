import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { theme } = useTheme();

    return (
        <div id="skills" className={`w-full min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col justify-center items-center h-full"> {/* Center items vertically and horizontally */}
                <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="pb-8 sm:col-span-2 text-center"> {/* Centering the title */}
                        <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#800000]">
                            Skills
                        </p>
                    </div>
                    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
                        <h2 className="text-xl sm:text-2xl font-bold">Programming Languages and Frameworks:</h2>
                        <ul className="list-disc pl-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
                        <h2 className="text-xl sm:text-2xl font-bold">Tools and Platforms:</h2>
                        <ul className="list-disc pl-4">
                            <li>Git/GitHub</li>
                            <li>Visual Studio Code (VS Code)</li>
                            <li>Salesforce</li>
                        </ul>
                    </div>
                    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
                        <h2 className="text-xl sm:text-2xl font-bold">Technical Skills:</h2>
                        <ul className="list-disc pl-4">
                            <li>Troubleshooting</li>
                            <li>Agile/Scrum Methodology</li>
                            <li>Project Management</li>
                            <li>API Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

