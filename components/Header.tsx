import React from 'react';
import type { Page } from '../App';


interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Services' },
    { page: 'events', label: 'Events' },
    { page: 'contact', label: 'Enquire Us' },
  ];

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#D4AF37]/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-28">
            <div
              className="group flex items-center gap-3 md:gap-4 cursor-pointer py-1 transition-all duration-300"
              onClick={() => setCurrentPage('home')}
            >
              <div className="relative flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Eagle Eye Logo"
                  className="h-14 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center border-l-2 border-[#D4AF37]/30 pl-4 md:pl-6">
                <h1 className="text-2xl md:text-3xl font-black tracking-[0.1em] text-[#1A1A1A] uppercase transition-colors duration-300 group-hover:text-[#D4AF37] leading-none">
                  EAGLE <span className="text-[#D4AF37] group-hover:text-[#1A1A1A]">EYE</span>
                </h1>
                <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-[#D4AF37] uppercase mt-1.5 md:mt-2 leading-none whitespace-nowrap">
                  Bouncers and Manpower
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => setCurrentPage(link.page)}
                  className={`relative text-sm font-bold transition-all duration-300 uppercase tracking-[0.2em] group ${currentPage === link.page
                    ? 'text-[#D4AF37]'
                    : 'text-[#555555] hover:text-[#D4AF37]'
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              ))}
            </nav>
            <div className="hidden md:block">
              <button
                onClick={() => setCurrentPage('contact')}
                className="btn-gold py-3 px-8 rounded-lg"
              >
                Enquire Us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
