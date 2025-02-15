import React, { useState } from 'react';
import ContactModal from '../../modal/ContactModal';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useContactModal } from '../../context/ContactModalContext';

const MobileNavbar = ({ homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isContactModalOpen, isChatModalOpen} = useContactModal();


  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`fixed top-0 left-0 z-40 shadow-md w-full h-[70px] bg-opacity-100 bg-gradient-to-r from-slate-100 md:from-slate-200  md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-900 dark:to-neutral-950`} style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="flex items-center justify-end h-full px-10 ">

          <button
            onClick={handleToggleMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isMenuOpen ? (
              <RiCloseLine className="w-8 h-8" />
            ) : (
              <RiMenu3Line className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 z-50 w-1/2 h-screen bg-opacity-100 shadow-lg bg-gradient-to-r from-slate-100 md:from-slate-200 md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-900 dark:to-neutral-950
          transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        style={{ fontFamily: "Montserrat, sans-serif", transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div className='flex justify-end p-5 px-9'>
          <button
            onClick={handleToggleMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isMenuOpen && (
              <RiCloseLine className="w-9 h-9" />
            )}
          </button>
        </div>

        <div className="flex flex-col justify-start h-full">
          {['Home', 'About', 'Skills', 'Expertise', 'Projects'].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection([homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef][index]);
                setIsMenuOpen(false);
              }}
              className="block w-full px-6 py-[15px] font-semibold text-left text-gray-700 transition-all duration-300 text-md dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              {section}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MobileNavbar;
