import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Contact Me</h2>

      <form
        action="https://formspree.io/f/xgvwbjgr" 
        method="POST"
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transition-colors duration-300"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
