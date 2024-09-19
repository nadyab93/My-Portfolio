import React from 'react';
import generationImage from '../assets/certifications/generation.jpg'; 
import w3schoolsImage from '../assets/certifications/w3schools.jpg'; 
import perscholasImage from '../assets/certifications/perscholas.jpg'; 
import comptiaAPlusImage from '../assets/certifications/comptia-a-plus.jpg'; 

const Certifications = () => {
  const certifications = [
    { title: 'Generation USA', image: generationImage },
    { title: 'W3Schools', image: w3schoolsImage },
    { title: 'PerScholas', image: perscholasImage },
    { title: 'CompTIA A+', image: comptiaAPlusImage },
  ];

  return (
    <section 
      id="certifications" 
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {certifications.map((certification, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <img src={certification.image} alt={certification.title} className="w-full h-32 md:h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">{certification.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
