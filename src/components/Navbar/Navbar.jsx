import React, { useEffect, useState } from 'react';
import ContactModal from '../../modal/ContactModal';
import { useContactModal } from '../../context/ContactModalContext';
import { motion } from 'framer-motion'
import CoolMode from '../ui/CoolMode';

const Navbar = ({ homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('Home');
  const { isContactModalOpen, isChatModalOpen } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: 'Home' },
        { ref: aboutRef, id: 'About' },
        { ref: skillsRef, id: 'Skills' },
        { ref: expertiseRef, id: 'Expertise' },
        { ref: projectsRef, id: 'Projects' },
        { ref: certificatesRef, id: 'Certificates' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          const sectionTop = top + window.scrollY;

          if (sectionTop <= scrollPosition && sectionTop + ref.current.clientHeight > scrollPosition) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef]);

  return (
    <>

      <motion.div
       className={`fixed z-40 flex justify-center w-full max-w-[620px] px-3 py-[14px] my-5 rounded-full shadow-md bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-800`}
       initial={{ scale: 0.9, opacity: 0, y: -15 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          transition={{
            duration: 0.5,
            ease: 'easeOut', 
          }}
       >
        <ul className='flex items-center gap-10 font-semibold text-[15px] text-slate-800 dark:text-neutral-300 '>
          {['Home', 'About', 'Skills', 'Expertise', 'Projects'].map((section, index) => {
            const sectionRefs = [homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef];
            return (
              <li
                key={section}
                className={`relative cursor-pointer group ${activeSection === section ? 'text-slate-900 dark:text-neutral-100 scale-110' : ''} hover:scale-105 transition-transform duration-700`}
                onClick={() => {
                  setActiveSection(section);
                  scrollToSection(sectionRefs[index]);
                }}
              >
                {section}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-600 to-purple-700 transition-all duration-500 ${activeSection === section ? 'w-full' : 'w-0'}`}
                ></span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
