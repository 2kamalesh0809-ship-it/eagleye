
import React from 'react';
import type { Page } from '../App';
import { EagleIcon } from './icons/EagleIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}


const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white border-t border-[#D4AF37]/30 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div
              className="group flex items-center justify-center sm:justify-start gap-4 cursor-pointer mb-8 transition-all duration-300"
              onClick={() => setCurrentPage('home')}
            >
              <img
                src="/images/logo.png"
                alt="Eagle Eye Logo"
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center border-l-2 border-[#D4AF37]/20 pl-4 text-left">
                <h1 className="text-2xl font-black tracking-tight text-[#1A1A1A] uppercase leading-none">
                  EAGLE <span className="text-[#D4AF37]">EYE</span>
                </h1>
              </div>
            </div>
            <p className="text-[#555555] max-w-md mx-auto sm:mx-0 font-medium leading-relaxed">
              Your trusted partner for <span className="text-[#D4AF37] font-bold">elite security</span> and professional manpower solutions in Chennai. Redefining protection with excellence.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('home')} className="text-[#777777] font-bold hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-[#777777] font-bold hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">About Us</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-[#777777] font-bold hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">Services</button></li>
              <li><button onClick={() => setCurrentPage('events')} className="text-[#777777] font-bold hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">Events</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-[#777777] font-bold hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">Enquire Us</button></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] mb-8">Executive Contact</h3>
            <ul className="space-y-6 text-[#555555]">
              <li className="flex items-start justify-center sm:justify-start">
                <div className="p-2 bg-[#FFF8E7] rounded-lg mr-4 border border-[#D4AF37]/20">
                  <LocationIcon className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                </div>
                <span className="font-medium pt-1">Thiruverkadu, Chennai - 600077</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <div className="p-2 bg-[#FFF8E7] rounded-lg mr-4 border border-[#D4AF37]/20">
                  <PhoneIcon className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                </div>
                <a href="tel:9094091083" className="font-bold hover:text-[#D4AF37] transition-colors">90940 91083</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <div className="p-2 bg-[#FFF8E7] rounded-lg mr-4 border border-[#D4AF37]/20">
                  <MailIcon className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                </div>
                <a href="mailto:eagleeyeofficialchennai@gmail.com" className="font-bold hover:text-[#D4AF37] transition-colors break-all pt-1 text-[13px] sm:text-base">eagleeyeofficialchennai@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] mb-8">Proprietor</h3>
            <div className="p-6 bg-[#FFF8E7] rounded-2xl border border-[#D4AF37]/20">
              <p className="text-[#1A1A1A] font-black text-xl uppercase tracking-tight">R. Velmurugan</p>
              <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Executive Director</p>
            </div>
            {/* Social Media Contact Buttons */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <a
                href="https://wa.me/919094091083"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-[#1DA851] hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)' }}
                className="w-[42px] h-[42px] flex items-center justify-center text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:brightness-110 hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
                title="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-[#145DBF] hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-100 pt-10 text-center">
          <p className="text-[#999999] text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Eagle Eye Bouncer & Manpower Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
