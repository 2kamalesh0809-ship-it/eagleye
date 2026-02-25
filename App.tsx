
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import EventsPage from './components/EventsPage';
import MobileNavbar from './components/MobileNavbar';

export type Page = 'home' | 'about' | 'services' | 'events' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white text-[#555555] min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <MobileNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919094091083"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-10 right-6 md:right-10 z-[60] group flex items-center justify-center transition-all duration-500 active:scale-90"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-x-4 group-hover:translate-x-0">
          Chat with us
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-8 border-transparent border-l-[#1A1A1A]"></div>
        </span>

        {/* Button Circle */}
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#1DA851] hover:scale-110 transition-all duration-300 border-2 border-white/20">
          <i className="fab fa-whatsapp text-white text-3xl md:text-3xl"></i>
        </div>
      </a>
    </div>
  );
};

export default App;
