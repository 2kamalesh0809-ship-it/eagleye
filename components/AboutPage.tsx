
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-0 md:pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-20">
          <h1 className="text-2xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight mt-0 pt-0 leading-none">
            About <span className="text-[#D4AF37]">Eagle Eye</span>
          </h1>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mt-2 md:mt-4 rounded-full"></div>
          <p className="mt-3 md:mt-6 text-sm md:text-lg text-white max-w-3xl mx-auto font-medium leading-tight">
            Your Trusted Partner in Elite Security and Premium Manpower Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 reveal active">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-6 md:mb-8 uppercase tracking-tight">Professional <span className="text-[#D4AF37]">Summary</span></h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
              The Eagle Eye Bouncer Team, led by <span className="text-white font-black underline decoration-[#D4AF37] decoration-2 underline-offset-4">R. Velmurugan</span>, is a professional security service specializing in event and crowd management across Tamil Nadu. We are a physically strong, disciplined, and alert team with a proven record of maintaining safety, control, and order in high-traffic venues. Our commitment to excellence ensures that every client receives the highest level of protection and professionalism.
            </p>

            <div className="space-y-8 md:space-y-10">
              <div className="relative pl-6 md:pl-8 border-l-4 border-[#D4AF37]/30">
                <h3 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-3 md:mb-4 uppercase tracking-widest">Our Mission</h3>
                <p className="text-white leading-relaxed text-base md:text-lg">
                  To provide top-tier security and manpower solutions that ensure the safety and success of our clients' events and operations. We strive to be the most reliable, professional, and respected security provider in the region.
                </p>
              </div>
              <div className="relative pl-6 md:pl-8 border-l-4 border-[#D4AF37]/30">
                <h3 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-3 md:mb-4 uppercase tracking-widest">Our Vision</h3>
                <p className="text-white leading-relaxed text-base md:text-lg">
                  To set the industry standard for security services, known for our integrity, vigilance, and unwavering commitment to client safety. We aim to build long-lasting relationships based on trust and exceptional performance.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal active">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-4 border-2 border-[#D4AF37]/20 rounded-[1.5rem] md:rounded-[2.5rem] -z-10 translate-x-2 translate-y-2"></div>
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000"
                alt="Professional security team"
                className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full h-[250px] sm:h-[350px] lg:h-[600px] object-cover border border-[#D4AF37]/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent rounded-[1.5rem] md:rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
