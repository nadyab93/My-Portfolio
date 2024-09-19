import React from 'react'; 
import NadyaImage from '../assets/nadya-bharrat.jpg'; // Update the path according to your image

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
            Hi, I'm Nadya Bharrat! Based in New York, I have a background in Web Development and End User Support. I’m passionate about creating efficient and scalable solutions for users and clients alike.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            With over 4 years of experience in customer service and healthcare settings, I bring strong interpersonal skills to my technical roles. I am driven by my love for technology and problem-solving, constantly striving to improve and learn new skills.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            When I'm not coding, I enjoy going to the gym, exploring the latest in tech, and working on personal projects that challenge my creativity and technical knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
