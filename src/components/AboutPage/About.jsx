import React from 'react';
import AboutCards from './AboutCards';
import VerticalLine from '../common/VerticalLine';
import SectionHeading from '../common/SectionHeading';

const About = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen p-5 mb-28 md:mb-10 lg:mb-0 ' >
        <div className='w-full max-w-4xl p-3 px-2 rounded-lg md:p-12 '>
          <SectionHeading title={"About Me"} />
          <p className='mt-5 text-sm font-medium leading-relaxed text-center text-gray-800 md:text-[16px] dark:text-gray-300'>
            I am a Software Engineering student, currently pursuing my studies at PCPS College, affiliated with the University of Bedfordshire. I have a strong passion for programming, specifically in JavaScript and Python. I am highly interested in full stack development and mobile app development with Flutter. To enhance my full stack skills, I am presently engaged in the Python Django framework, JavaScript React framework, and working with REST APIs using Django Rest Framework.
          </p>

          <p className='mt-4 text-sm font-light leading-relaxed text-center text-gray-700 md:text-[16px] dark:text-gray-400'>
            I am always looking to connect with like-minded individuals and explore new opportunities in both web and mobile development. Let's keep in touch!
          </p>
        </div>

        <div className='flex flex-col items-center gap-5 px-8 mt-3 md:flex-row'>
          <AboutCards />
        </div>
      </div>
    </>
  );
};

export default About;
