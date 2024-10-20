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
            Hi, I'm Nadya Bharrat — a web developer who thrives on creating user-centered solutions that drive results.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Based in New York, I bring over four years of experience bridging the gap between technology and people, with a background in customer service and healthcare. This gives me a unique perspective on building digital tools that truly work for users, whether I’m coding websites, troubleshooting issues, or providing hands-on support.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            What excites me most is turning complex technical challenges into functional, no-nonsense solutions that make life easier for clients and end users. From optimizing workflows to crafting scalable web systems, I’m driven by the impact my work has on improving efficiency and user experiences. When I'm not solving tech puzzles, you can find me at the gym, staying on top of tech trends, or working on projects that sharpen both my creativity and coding skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
