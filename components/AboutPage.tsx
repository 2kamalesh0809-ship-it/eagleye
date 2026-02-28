
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-10 md:pt-16 pb-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
            About <span className="text-[#D4AF37]">Eagle Eye</span>
          </h1>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-base md:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Your Trusted Partner in Elite Security and Premium Manpower Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-2 lg:order-1 reveal active">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">Professional <span className="text-[#D4AF37]">Summary</span></h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-medium">
              The Eagle Eye Bouncer Team, led by <span className="text-white font-black underline decoration-[#D4AF37] decoration-2 underline-offset-4">R. Velmurugan</span>, is a professional security service specializing in event and crowd management across Tamil Nadu. We are a physically strong, disciplined, and alert team with a proven record of maintaining safety, control, and order in high-traffic venues.
            </p>

            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-[#D4AF37]">
                <h3 className="text-xl font-black text-[#D4AF37] mb-4 uppercase tracking-widest text-sm">Our Mission</h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  To provide top-tier security and manpower solutions that ensure the safety and success of our clients' events and operations.
                </p>
              </div>
              <div className="relative pl-8 border-l-4 border-[#D4AF37]">
                <h3 className="text-xl font-black text-[#D4AF37] mb-4 uppercase tracking-widest text-sm">Our Vision</h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  To set the industry standard for security services, known for our integrity, vigilance, and unwavering commitment to client safety.
                </p>
              </div>

              {/* Government Certification Section */}
              <div className="relative pl-8 border-l-4 border-[#D4AF37] reveal active pt-4">
                <h3 className="text-xl font-black text-[#D4AF37] mb-4 uppercase tracking-widest text-sm">Government Certification</h3>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm mt-6">
                  <div className="space-y-10">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-white font-black uppercase tracking-tight text-xl mb-3">Udyam Registration Certificate</h4>
                        <p className="text-white/60 text-sm leading-relaxed italic">
                          Eagle Eye Manpower Services is an officially registered Micro Enterprise under the Ministry of MSME, Govt. of India.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-left">
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Registration No.</span>
                          <p className="text-white font-bold tracking-tight text-base">UDYAM-TN-24-0171188</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Registration Date</span>
                          <p className="text-white font-bold text-base tracking-tight">26/02/2026</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Incorporation Date</span>
                          <p className="text-white font-bold text-base tracking-tight">01/01/2026</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Team Strength</span>
                          <p className="text-white font-bold text-base tracking-tight uppercase">23 Specialists</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Major Activity</span>
                          <p className="text-white font-bold uppercase text-base">Services</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">NIC Codes</span>
                          <p className="text-white font-bold text-xs uppercase">78, 80, 82, 96 (Official)</p>
                        </div>
                      </div>
                    </div>

                    {/* Highly Visible Certificate Preview - Positioned Below */}
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="relative group cursor-pointer" onClick={() => window.open('/images/certificate.png', '_blank')}>
                        <div className="relative bg-white rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-lg">
                          <img
                            src="/images/certificate.png"
                            alt="Udyam Registration Certificate"
                            className="w-full h-auto object-contain brightness-100 group-hover:scale-[1.01] transition duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal active">
            <div className="relative p-1">
              {/* Tight fitting gold border */}
              <div className="absolute inset-0 border-2 border-[#D4AF37]/40 rounded-[2.5rem]"></div>

              <div className="relative rounded-[2.3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional security team"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
