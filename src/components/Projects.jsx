import React from 'react';
import { data } from '../data/project';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  // Projects data
  const projects = data;

  // Access theme from context
  const { theme } = useTheme();

  return (
    <div id='projects' className={`w-full min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} text-${theme === 'light' ? 'black' : 'white'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 flex justify-center'>
          <p className={`text-3xl sm:text-4xl font-bold inline border-b-4 ${theme === 'light' ? 'border-[#800000]' : 'border-[#800000]'}`}>
            Projects
          </p>
        </div>
        {/* Container for projects */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              className={`shadow-lg ${theme === 'light' ? 'shadow-gray-200' : 'shadow-gray-800'} group container rounded-md flex justify-center items-center mx-auto content-div`}
              style={{ 
                backgroundImage: `url(${item.image})`, 
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                minHeight: '250px', // Adjusted minHeight
                maxHeight: '350px', // Adjusted maxHeight
                maxWidth: '300px', // Adjusted maxWidth
              }}
            >
              {/* Hover effect for images */}
              <div className={`opacity-0 group-hover:opacity-100 ${theme === 'light' ? 'bg-gray-700 bg-opacity-75 text-white' : 'bg-gray-800 bg-opacity-75 text-white'} w-full h-full flex flex-col justify-center items-center text-center`}>
                <span className='text-2xl font-bold tracking-wider mb-4'>
                  {item.name}
                </span>
                <div className='pt-2'>
                  <a href={item.live} target='_blank' rel='noopener noreferrer' className={`rounded-lg px-4 py-3 m-2 ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-700 text-white'} font-bold text-lg hover:bg-gray-200 transition duration-200`}>
                    View Live
                  </a>
                  <a href={item.github} target='_blank' rel='noopener noreferrer' className={`rounded-lg px-4 py-3 m-2 ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-700 text-white'} font-bold text-lg hover:bg-gray-200 transition duration-200`}>
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
