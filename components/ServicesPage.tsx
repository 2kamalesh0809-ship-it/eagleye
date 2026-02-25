import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: 'fas fa-user-shield', title: 'Bouncer & Security Services', description: 'Highly-trained bouncers and security personnel for events, parties, and venues to ensure crowd control and safety.' },
  { icon: 'fas fa-user-tie', title: 'Receptionist Staffing', description: 'Professional and courteous receptionists to manage your front desk and create a welcoming environment for your guests.' },
  { icon: 'fas fa-broom', title: 'House Keeping Services', description: 'Reliable and efficient housekeeping staff for residential, commercial, and industrial properties to maintain cleanliness.' },
  { icon: 'fas fa-hard-hat', title: 'Non-Skilled Labour Supply', description: 'Providing a dedicated workforce for various non-skilled labour requirements across different sectors.' },
  { icon: 'fas fa-users', title: 'Manpower for Events', description: 'Complete manpower solutions for events, including loading/unloading crews and general support staff.' },
  { icon: 'fas fa-graduation-cap', title: 'Fresher Placement', description: 'Connecting Diploma, ITI, and Engineering freshers with opportunities in various industries.' },
];

const sectors = [
  { icon: 'fas fa-desktop', name: 'IT Sector' },
  { icon: 'fas fa-university', name: 'Bank Sector' },
  { icon: 'fas fa-home', name: 'Residences' },
  { icon: 'fas fa-industry', name: 'Industrial' },
  { icon: 'fas fa-building', name: 'Commercial' },
  { icon: 'fas fa-hotel', name: 'Hotels' },
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="py-24 bg-white min-h-[80vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight">
            Our <span className="text-[#D4AF37]">Services</span>
          </h1>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-[#555555] max-w-3xl mx-auto font-medium leading-relaxed">
            Comprehensive solutions to meet your security and manpower needs. Click on a service to learn more or request a quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-white p-8 md:p-10 rounded-3xl border border-[#E6C766]/40 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:border-[#D4AF37] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className={`${service.icon} text-6xl text-[#D4AF37]`}></i>
              </div>
              <div className="bg-[#FFF8E7] p-6 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/10">
                <i className={`${service.icon} text-[#D4AF37] text-3xl md:text-4xl`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
              <p className="text-[#555555] text-sm md:text-base flex-grow font-medium leading-relaxed">{service.description}</p>
              <div className="mt-10 text-[#D4AF37] font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all duration-300 group-hover:gap-5">
                View Details <i className="fas fa-arrow-right text-xs"></i>
              </div>
            </div>
          ))}
        </div>


        {/* Selected Service Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

      </div>
    </div>
  );
};

export default ServicesPage;
