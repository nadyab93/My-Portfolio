import React, { useState, useEffect } from 'react';
import ResumePDF from '../assets/Resume.docx.pdf'; // Import the PDF file

const Home = () => {
  const [text, setText] = useState("I'm a ");
  const roles = ["IT Profesional", "Web Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const typingSpeed = 100; // Adjust typing speed as needed
  const deleteSpeed = 100; // Adjust delete speed as needed
  const delayAfterTyping = 1000; // Delay after typing each role
  const delayAfterDeleting = 1000; // Delay after deleting each role

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typingIndex < roles[roleIndex].length) {
        // Typing the profession character by character
        setText(prevText => prevText + roles[roleIndex][typingIndex]);
        setTypingIndex(typingIndex + 1);
      } else if (deleteIndex < roles[roleIndex].length) {
        // Deleting the typed profession
        setTimeout(() => {
          setText(prevText => prevText.slice(0, -1));
          setDeleteIndex(deleteIndex + 1);
        }, deleteSpeed);
      } else {
        // Switching to next profession immediately after typing is complete
        setText("I'm a ");
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingIndex(0);
        setDeleteIndex(0);
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, roleIndex, roles, typingIndex, deleteIndex]);

  useEffect(() => {
    // Delay after deleting each role
    if (deleteIndex === roles[roleIndex].length) {
      const timer = setTimeout(() => {
        setText("I'm a ");
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingIndex(0);
        setDeleteIndex(0);
      }, delayAfterDeleting);
      return () => clearTimeout(timer);
    }
  }, [deleteIndex, roleIndex, roles, delayAfterDeleting]);

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Resume.pdf'; // Set the desired file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Nadya Bharrat
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          {text} {/* Display typed text */}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I specialize in crafting exceptional digital experiences as a frontend 
          developer and IT support professional. My focus is on creating responsive frontend web 
          applications that captivate users with seamless design and functionality.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={handleResumeClick}>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
