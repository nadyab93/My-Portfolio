import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nadya Bharrat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

