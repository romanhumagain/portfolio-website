import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAndroid, FaGithub } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiFlutter, SiExpress } from 'react-icons/si';
import socialLinks , {socialLinksDetails} from '../data/socialLinks'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";


const ProjectHeading = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen gap-1 mt-16 md:gap-5 lg:gap-10 md:flex-row'>
        <div className='md:pr-8 lg:pb-20 lg:pr-20'>
          <div className='items-center hidden gap-6 mt-5 md:flex md:flex-col'>
          {socialLinksDetails.length > 0 && socialLinksDetails.map((socialLink, index) => (
          
          <a
          key={index}
            href={socialLink.link}
            className={`text-[21px] md:text-[26px] ${socialLink.brand_color} transition-transform duration-700 transform hover:scale-110 cursor-pointer `}
            target='_blank'
            rel='noopener noreferrer'
          >
            <socialLink.icon />
          </a>
      ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 py-10 text-center md:py-16" style={{ fontFamily: "Montserrat, sans-serif" }}>

          <h1 className="text-[22px] font-semibold text-transparent bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text md:text-3xl">
            Explore My Projects
          </h1>
          <p className="max-w-xl mt-8 text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
            Dive into a selection of my latest projects, spanning Full Stack web applications, mobile apps, and desktop software. Each project showcases skills, tools, and design choices bringing ideas to life.
          </p>

          <div className="flex flex-col items-center justify-center mt-8 text-center">
            <p className="max-w-md text-[14px] text-neutral-500 md:text-[15px]">
              Some of the core technologies I use to build scalable projects across different platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeIn md:gap-6">
              <div className="relative group">
                <FaPython className="text-3xl text-yellow-500 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  Python
                </span>
              </div>

              <div className="relative group">
                <SiDjango className="text-3xl text-green-700 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  Django
                </span>
              </div>

              <div className="relative group">
                <FaReact className="text-3xl text-blue-500 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  React
                </span>
              </div>

              <div className="relative group">
                <FaNodeJs className="text-3xl text-green-500 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  Node.js
                </span>
              </div>

              <div className="relative group">
                <SiMongodb className="text-3xl text-green-500 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  MongoDB
                </span>
              </div>

              <div className="relative group">
                <SiExpress className="text-3xl text-gray-700 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  Express
                </span>
              </div>

              <div className="relative group">
                <SiFlutter className="text-3xl text-blue-400 transition-transform duration-500 transform hover:scale-125 animate-pulse" />
                <span className="absolute px-2 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-800 rounded-md opacity-0 dark:bg-neutral-700 left-1/2 -bottom-9 group-hover:opacity-100">
                  Flutter
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400">Scroll down for more projects</p>
            <span className="mt-2 text-4xl text-pink-600 md:text-5xl animate-bounce dark:text-purple-300">&#8595;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHeading