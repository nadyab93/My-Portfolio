import React from 'react';
import weatherAppImage from '../assets/projects/weather-app.jpg'; // Importing weather-app image
import googleCloneImage from '../assets/projects/google-clone.jpg'; // Importing google-clone image
import todoImage from '../assets/projects/todo.jpg'; // Importing todo image

const Projects = () => {
  const projects = [
    {
      title: 'Weather-App',
      description:
        'A responsive weather app that fetches real-time data from a weather API and lets users toggle between Celsius and Fahrenheit.',
      link: 'https://nadyab93.github.io/weather-app/', // Replace with your actual project link
      github: 'https://github.com/nadyab93/weather-app', // Replace with your GitHub repo link
      image: weatherAppImage, // Add image reference
    },
    {
      title: 'Google-Clone',
      description:
        'A Google homepage clone built with HTML, CSS, and JavaScript, replicating the search input and layout of the main page',
      link: 'https://nadyab93.github.io/google-clone/', // Replace with your actual project link
      github: 'https://github.com/nadyab93/google-clone', // Replace with your GitHub repo link
      image: googleCloneImage, // Add image reference
    },
    {
      title: 'Todo-List',
      description:
        'A to-do list app made with Vite and Tailwind CSS, allowing users to add, delete, mark tasks, sort, and enjoy a responsive design for web and mobile.',
      link: 'https://todo-list-chi-six-13.vercel.app/', // Replace with your actual project link
      github: 'https://github.com/nadyab93/Todo-List', // Replace with your GitHub repo link
      image: todoImage, // Add image reference
    },
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white transition-colors duration-300">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
            
            <div className="flex items-center space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500"
              >
                <i className="fab fa-github fa-lg"></i> {/* GitHub icon */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
