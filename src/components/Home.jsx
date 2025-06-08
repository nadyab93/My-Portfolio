import React from 'react';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-blur content-wrapper"
    >
      {/* "I am Nadya Bharrat." text in white */}
      <h1 className="text-5xl font-bold mb-4 text-white">My name is Nadya Bharrat.</h1>

      {/* "Based in New York..." text in white */}
      <p className="text-xl mb-6 text-white">
        I am a End User Support Specialist and Web Developer with a strong focus on delivering effective technical solutions.
      </p>

      {/* Icons Section with light effect */}
      <div className="flex space-x-6 text-5xl mb-6"> {/* Increased icon size */}
        <a 
          href="https://github.com/nadyab93" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://gitlab.com/nadyab93" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <i className="fab fa-gitlab"></i>
        </a>
        <a 
          href="https://www.freecodecamp.org/nbharrat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <i className="fab fa-free-code-camp"></i>
        </a>
        <a 
          href="https://codepen.io/nadyab93" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a 
          href="https://replit.com/@NadyaBharrat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <i className="fab fa-replit"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;