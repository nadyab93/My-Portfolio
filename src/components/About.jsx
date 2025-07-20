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
          With over four years of experience in customer-facing roles, I bring a unique mix of technical skills and empathy to every project. My background in psychology helps me understand user needs, while my training in software development and IT support allows me to build and maintain effective, practical solutions.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          I'm skilled in front-end technologies like HTML, CSS, JavaScript, and React, and have experience troubleshooting systems, supporting end users, and analyzing data. Whether I’m coding interfaces, resolving support tickets, or streamlining workflows, I focus on making tech more accessible and impactful.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            I’m always exploring new tools and approaches to grow as a developer, analyst, and problem-solver. My goal is to contribute to innovative teams where I can use both technical and soft skills to improve user experiences and deliver results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
