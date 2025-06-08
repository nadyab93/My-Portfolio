import React from 'react'; 
import NadyaImage from '../assets/nadya-bharrat.jpg'; 

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left side: Image */}
        <div className="mb-6 md:mb-0 md:mr-10">
          <img 
            src={NadyaImage} 
            alt="Nadya Bharrat" 
            className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg" 
          />
        </div>

        {/* Right side: About me text */}
        <div className="text-center md:text-left md:max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            About Me
          </h2>
          <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          Hi, I’m Nadya Bharrat — an aspiring IT support professional and web developer based in New York with a passion for creating user-focused tech solutions. I hold a Bachelor’s degree in Psychology and am pursuing a second Bachelor’s in Information Systems. With over four years of experience in customer service and pharmacy, I bring a unique perspective to building practical tools that truly help users.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          Trained through Generation USA and PerScholas, I’m skilled in front-end development and desktop support, working with HTML, CSS, JavaScript, React, and Tailwind. I’m always learning new technologies like Firebase and Git to grow my skillset.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            What excites me most is turning complex challenges into clear, practical solutions—whether coding responsive websites or helping users troubleshoot issues with patience. When I’m not exploring tech, you’ll find me staying active, learning online, or working on projects that fuel my creativity and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
