
import React from 'react';
import type { Page } from '../App';
import { HomeIcon } from './icons/HomeIcon';
import { AboutIcon } from './icons/AboutIcon';
import { EventsIcon } from './icons/EventsIcon';
import { PhoneIcon } from './icons/PhoneIcon';

import { ServicesIcon } from './icons/ServicesIcon';

interface MobileNavbarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { page: 'home' as Page, label: 'Home', Icon: HomeIcon },
        { page: 'services' as Page, label: 'Services', Icon: ServicesIcon },
        { page: 'events' as Page, label: 'Events', Icon: EventsIcon },
        { page: 'about' as Page, label: 'About Us', Icon: AboutIcon },
        { page: 'contact' as Page, label: 'Enquire Us', Icon: PhoneIcon },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/20 z-50 md:hidden pb-safe">
            <div className="flex justify-around items-center h-16 md:h-20">
                {navItems.map((item) => (
                    <button
                        key={item.page}
                        onClick={() => setCurrentPage(item.page)}
                        className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 active:scale-95 relative ${currentPage === item.page ? 'text-[#D4AF37]' : 'text-[#777777]'
                            }`}
                    >
                        <item.Icon className={`h-6 w-6 transition-transform duration-300 ${currentPage === item.page ? 'scale-110' : ''}`} />
                        <span className="text-[10px] mt-1 font-black uppercase tracking-widest">{item.label}</span>
                        {currentPage === item.page && (
                            <div className="absolute top-0 w-12 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MobileNavbar;
