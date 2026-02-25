
import React, { useState, useEffect } from 'react';

const eventImages = [
    { src: "/images/event1.png", title: "Professional Security Team", description: "Providing elite security and crowd management for major sporting events." },
    { src: "/images/event2.png", title: "VIP Protection Services", description: "Our professional bouncer team ensuring safety at exclusive corporate gatherings." },
    { src: "/images/event3.png", title: "Event Safety Operations", description: "Dedicated team for large-scale event security and guest assistance." },
    { src: "/images/event4.png", title: "High-Alert Response Team", description: "Highly disciplined security personnel ready for action." },
    { src: "/images/event5.png", title: "Dignitary Safeguarding", description: "Ensuring seamless security for important dignitary visits." },
    { src: "/images/event6.png", title: "Premium Venue Management", description: "Complete perimeter and access control for premium venues." },
];

const EventsPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventImages.length) % eventImages.length);
    };

    return (
        <div className="py-24 bg-white min-h-[80vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
                        Our Professionals in <span className="text-[#D4AF37]">Action</span>
                    </h1>
                    <p className="mt-4 text-lg text-[#555555] max-w-3xl mx-auto">
                        A showcase of our dedicated team providing security and manpower solutions across various premium events.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-xl border border-[#D4AF37]/30">
                    {/* Carousel Container */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {eventImages.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative aspect-video">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                                    <h3 className="text-2xl md:text-4xl font-black text-[#1A1A1A] mb-2 uppercase tracking-tight">{image.title}</h3>
                                    <p className="text-[#555555] text-sm md:text-lg max-w-2xl font-medium">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white p-4 rounded-full backdrop-blur-sm transition-all z-10 shadow-lg border border-[#D4AF37]/20"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white p-4 rounded-full backdrop-blur-sm transition-all z-10 shadow-lg border border-[#D4AF37]/20"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {eventImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#D4AF37] w-12' : 'bg-gray-300 w-6'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Event Grid View (Gold Border Styled) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {eventImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/40 shadow-lg group hover:border-[#D4AF37] transition-all duration-500"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-bottom p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                <h3 className="mt-auto text-[#1A1A1A] font-black text-lg tracking-wider uppercase">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
