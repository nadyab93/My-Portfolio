import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hey, I'm Nadya. Welcome! Take a peek around</p>
            </div>
            <div>
              <p>As a newcomer to the tech world, I bring 4+ years of experience in technical
                support and customer service, with a strong passion for both web development and
                IT support. I find joy in troubleshooting web applications and crafting visually captivating websites
                using HTML, CSS, JavaScript, and React. Trained in Agile methodologies and API integration, I  
                am eager to harmonize creativity with functionality, creating user-friendly interfaces and impactful
                designs. Ready to embrace new challenges, I aspire to make significant contributions
                to web development and IT support!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;