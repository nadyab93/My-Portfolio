import React from 'react';
import { data } from "../data/certification.js";

const Certifications = () => {
  // certifications data
  const certifications = data;
  
  return (
    <div id='certifications' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Certifications
          </p>
          <p className='py-6'>// Check out some of my certifications</p>
        </div>

        {/* container for certifications */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {certifications.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* You can adjust the button text accordingly */}
                  <a href={item.view} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
