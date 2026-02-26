
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
        <div className="pt-0 md:pt-24 pb-12 bg-white min-h-[80vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 md:mb-16">
                    <h1 className="text-2xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">
                        Our Professionals in <span className="text-[#D4AF37]">Action</span>
                    </h1>
                    <p className="mt-3 text-sm md:text-lg text-[#555555] max-w-3xl mx-auto font-medium">
                        A showcase of our dedicated team providing security and manpower solutions across various premium events.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border border-[#D4AF37]/30">
                    {/* Carousel Container */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {eventImages.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative aspect-[16/10] md:aspect-video text-left">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark Gradient Overlay for Visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-14">
                                    <h3 className="text-lg md:text-4xl font-black text-[#D4AF37] mb-1 md:mb-2 uppercase tracking-tight drop-shadow-lg">{image.title}</h3>
                                    <p className="text-white text-[10px] md:text-lg max-w-2xl font-medium leading-tight drop-shadow-md">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#D4AF37] text-white p-2 md:p-4 rounded-full backdrop-blur-sm transition-all z-10 shadow-lg border border-white/10"
                    >
                        <i className="fas fa-chevron-left text-xs md:text-base"></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#D4AF37] text-white p-2 md:p-4 rounded-full backdrop-blur-sm transition-all z-10 shadow-lg border border-white/10"
                    >
                        <i className="fas fa-chevron-right text-xs md:text-base"></i>
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {eventImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#D4AF37] w-12' : 'bg-white/30 w-6'
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
                            {/* Improved overlay for Grid items */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                                <h3 className="text-[#D4AF37] font-black text-lg tracking-wider uppercase drop-shadow-md">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
