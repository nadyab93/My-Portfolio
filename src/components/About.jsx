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
              <p>As a newcomer to the tech world, I am equally passionate about both web development 
                and IT support. Delving into frontend design, I discover joy in crafting visually 
                captivating websites and applications. My goal in this venture into tech is to harmonize 
                creativity with functionality seamlessly. Eager to embark on this journey, I aspire to create 
                user-friendly interfaces and impactful designs. Ready to embrace the challenges and opportunities 
                in web development and IT support!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;