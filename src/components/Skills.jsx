import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bootstrap from '../assets/bootstrap.png';
import CSS from '../assets/css.png';
import GitHub from '../assets/github.png';
import Git from '../assets/git.png';
import Gitlab from '../assets/gitlab.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Linux from '../assets/linux.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import Tailwind from '../assets/tailwind.png';
import Vite from '../assets/vite.png';
import VM from '../assets/vm.png';
import Wireshark from '../assets/wireshark.png';
import RestAPI from '../assets/restapi.png'; // Added RestAPI import

const Skills = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0
  };

  const skills = [
    { name: 'Bootstrap', icon: Bootstrap },
    { name: 'CSS', icon: CSS },
    { name: 'Git', icon: Git },
    { name: 'GitHub', icon: GitHub },
    { name: 'GitLab', icon: Gitlab },
    { name: 'HTML', icon: HTML },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'Linux', icon: Linux },
    { name: 'React', icon: ReactImg },
    { name: 'Redux', icon: Redux },
    { name: 'Rest API', icon: RestAPI },
    { name: 'Tailwind CSS', icon: Tailwind },
    { name: 'Vite', icon: Vite },
    { name: 'VM', icon: VM },
    { name: 'Wireshark', icon: Wireshark }
  ];

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className='shadow-md shadow-[#040c16]'>
              <img className='w-20 mx-auto' src={skill.icon} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
