
import React, { useState, useEffect } from 'react';
import ServiceModal from './ServiceModal';
import EventsPage from './EventsPage';
import type { Page } from '../App';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}


const testimonials = [
    {
        quote: "The Eagle Eye team was incredibly professional and handled our corporate gala flawlessly. Their presence was reassuring yet non-intrusive. Highly recommended.",
        name: "Priya Sharma",
        company: "Lead Event Manager, Innovate Corp"
    },
    {
        quote: "We hired bouncers for a large-scale music festival, and Eagle Eye delivered. They managed the crowd effectively and were quick to de-escalate any potential issues. True professionals.",
        name: "Arjun Reddy",
        company: "Operations Head, Vibe Fest"
    },
    {
        quote: "For my wedding reception, I wanted to ensure everything went smoothly. The security personnel from Eagle Eye were courteous, well-dressed, and made all our guests feel safe.",
        name: "Anika Desai",
        company: "Private Client"
    }
];

const faqs = [
    {
        question: "What types of events do you provide bouncers for?",
        answer: "We provide security for a wide range of events including corporate functions, concerts, weddings, private parties, promotional events, and more. Our solutions are tailored to the specific needs of each event."
    },
    {
        question: "Are your security personnel trained and licensed?",
        answer: "Absolutely. All our bouncers and security staff undergo rigorous training in crowd management, conflict resolution, and first aid. They are fully licensed and vetted to ensure the highest standards of professionalism."
    },
    {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking as early as possible, especially for large events, to ensure availability. However, we can often accommodate last-minute requests depending on our schedule. Reach out to us for your enquiry."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing depends on several factors, including the number of personnel required, the duration of the event, and the level of risk involved. Please contact us for a detailed and customized quote."
    },
    {
        question: "What areas do you serve?",
        answer: "We are based in Chennai and primarily serve the entire Tamil Nadu region. For special requests or large-scale events outside this area, please get in touch to discuss the possibilities."
    }
];


interface Service {
    image: string;
    title: string;
    description: string;
}

const services: Service[] = [
    { image: '/images/vip-celebrity-management.jpg.jpg', title: 'Bouncers and security', description: 'Experienced and physically fit security personnel for high-profile events, clubs, and personal protection.' },
    { image: '/images/corporate-event-security.jpg.jpg', title: 'Lady Bouncers', description: 'Professional female security staff specializing in female guest safety, entry checks, and specialized event security.' },
    { image: '/images/venue-access-control.jpg', title: 'Warehouse Workers', description: 'Dedicated manpower for warehouse management, including inventory handling, sorting, and facility support.' },
    { image: '/images/professional-alert-team.jpg', title: 'House keeping', description: 'Professional cleaning and maintenance services for corporate offices, apartments, and commercial venues.' },
    { image: '/images/concert-crowd-management.jpg', title: 'Loaders and Unloaders', description: 'Strong and efficient manpower for heavy lifting, transport logistics, and event setup/dismantling.' },
    { image: '/images/private-party-monitoring.jpeg', title: 'Skilled and unskilled staffs', description: 'Flexible workforce solutions providing both specialized technical labor and general support staff for various industries.' },
];

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll Reveal and Scroll Top Logic
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => revealObserver.observe(el));

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative overflow-hidden">
            {/* Our Services Section - New Priority Section */}
            <section id="our-services" className="pt-2 pb-10 md:pt-16 md:pb-24 bg-white scroll-mt-20 min-h-[85vh] flex flex-col justify-center reveal">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="mb-4 md:mb-12 text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-black text-[#1A1A1A] tracking-tight uppercase">
                            Our <span className="text-[#D4AF37]">Services</span>
                            <div className="h-0.5 w-12 bg-[#D4AF37] mt-1 rounded-full mx-auto md:mx-0"></div>
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedService(service)}
                                className="relative h-44 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-[#D4AF37]/30 group cursor-pointer hover:border-[#D4AF37] transition-all duration-500 shadow-sm"
                            >
                                {/* Background Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                {/* Content Bar at bottom - Ultra Compact for Mobile */}
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/20 leading-none">
                                    <h3 className="text-[12px] sm:text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight text-center py-2">{service.title}</h3>
                                    <div className="hidden sm:flex mt-1 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity justify-center">
                                        <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">View Details</span>
                                        <i className="fas fa-arrow-right text-[8px] text-[#D4AF37]"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Service Modal */}
            <ServiceModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />

            {/* Events Section Integrated from EventsPage */}
            <section id="events-section" className="reveal">
                <EventsPage />
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-[#FFF8E7] reveal">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">Why Choose <span className="text-[#D4AF37]">Eagle Eye</span>?</h2>
                        <p className="text-[#555555] mt-4 max-w-2xl mx-auto text-lg">We deliver excellence and peace of mind through our dedicated and highly-trained personnel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-10 rounded-2xl border border-[#E6C766] text-center transform hover:-translate-y-2 transition-all duration-300 shadow-sm">
                            <i className="fas fa-shield-halved text-[#D4AF37] text-4xl mb-6"></i>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider">Professional Staff</h3>
                            <p className="text-[#555555]">Physically strong, disciplined, and alert team with a proven record.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-[#E6C766] text-center transform hover:-translate-y-2 transition-all duration-300 shadow-sm">
                            <i className="fas fa-users-gear text-[#D4AF37] text-4xl mb-6"></i>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider">Customized Solutions</h3>
                            <p className="text-[#555555]">Tailored security and manpower services to fit your unique needs.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-[#E6C766] text-center transform hover:-translate-y-2 transition-all duration-300 shadow-sm">
                            <i className="fas fa-handshake text-[#D4AF37] text-4xl mb-6"></i>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider">Client-Centric</h3>
                            <p className="text-[#555555]">Your safety and satisfaction are our top priorities.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-[#E6C766] text-center transform hover:-translate-y-2 transition-all duration-300 shadow-sm">
                            <i className="fas fa-clock text-[#D4AF37] text-4xl mb-6"></i>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider">24/7 Availability</h3>
                            <p className="text-[#555555]">Available on call for all events, assignments and emergencies.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-24 bg-white reveal">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">What Our <span className="text-[#D4AF37]">Clients Say</span></h2>
                        <p className="text-[#555555] mt-4 max-w-2xl mx-auto text-lg">Real feedback from clients who trust our services.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-10 rounded-2xl border border-[#D4AF37]/30 flex flex-col shadow-sm">
                                <i className="fas fa-quote-left text-[#D4AF37] text-3xl mb-6"></i>
                                <p className="text-[#555555] italic mb-8 flex-grow leading-relaxed text-lg">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-[#1A1A1A] text-xl">{testimonial.name}</p>
                                    <p className="text-[#D4AF37] font-bold mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-[#FFF8E7] reveal">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">Frequently Asked <span className="text-[#D4AF37]">Questions</span></h2>
                        <p className="text-[#555555] mt-4 max-w-2xl mx-auto text-lg">Find answers to common questions about our services.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-sm hover:border-[#D4AF37] transition-colors duration-300">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left p-8"
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="text-xl font-bold text-[#1A1A1A]">{faq.question}</span>
                                    <i className={`fas fa-chevron-down text-[#D4AF37] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-8 pt-0">
                                        <p className="text-[#555555] leading-relaxed text-lg">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-[160px] md:bottom-28 right-6 md:right-10 z-[55] btn-gold w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <i className="fas fa-arrow-up text-lg md:text-2xl"></i>
            </button>
        </div>
    );
};

export default HomePage;
