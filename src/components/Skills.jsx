import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('developer');

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white transition-colors duration-300">Skills</h2>

      <div className="flex mb-8">
        <button
          className={`py-3 px-6 rounded-tl-lg rounded-tr-lg border-b-4 ${
            activeTab === 'developer'
              ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
              : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-400 border-gray-400 dark:border-gray-700'
          } transition duration-300 ease-in-out`}
          onClick={() => setActiveTab('developer')}
        >
          Developer Skills
        </button>
        <button
          className={`py-3 px-6 rounded-tl-lg rounded-tr-lg border-b-4 ${
            activeTab === 'it'
              ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
              : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-400 border-gray-400 dark:border-gray-700'
          } transition duration-300 ease-in-out`}
          onClick={() => setActiveTab('it')}
        >
          IT Skills
        </button>
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3 text-left bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-colors duration-300">
        {activeTab === 'developer' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Developer Skills</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-900 dark:text-white transition-colors duration-300">
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, DOM Manipulation, Asynchronous JavaScript, Object-Oriented Programming</li>
              <li>Git, GitHub</li>
              <li>SCRUM, Command Line</li>
              <li>Unit Testing (Mocha)</li>
              <li>Vite, Tailwind CSS</li>
              <li>Firebase, Figma</li>
            </ul>
          </div>
        )}

        {activeTab === 'it' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">IT Skills</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-900 dark:text-white transition-colors duration-300">
              <li>PC Assembly & Troubleshooting</li>
              <li>Operating Systems Installation & Management</li>
              <li>Preventive Maintenance</li>
              <li>Networking Fundamentals</li>
              <li>User Account Management</li>
              <li>Reimaging Computers</li>
              <li>IT Service Management (ITSM)</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
