import React from 'react'; 
import comptiaAPlusImage from '../assets/certifications/comptia-a-plus.jpg'; 
import googleITImage from '../assets/certifications/google-it.jpg';
import googleDataImage from '../assets/certifications/google-data.jpg';

const Certifications = () => {
  const certifications = [
    { title: 'CompTIA A+', image: comptiaAPlusImage },
    { title: 'Google IT Support', image: googleITImage },
    { title: 'Google Data Analytics', image: googleDataImage },
  ];

  return (
    <section 
      id="certifications" 
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
        Certifications
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
        {certifications.map((certification, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full sm:w-[300px]"
          >
            <img 
              src={certification.image} 
              alt={certification.title} 
              className="w-full h-32 md:h-48 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {certification.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
