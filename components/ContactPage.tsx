
import React, { useState } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setStatus('Sending...');
  };

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight">
            For <span className="text-[#D4AF37]">Enquiry</span>
          </h1>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-[#555555] max-w-2xl mx-auto font-medium">
            We're here to help. Reach out to us for a free quote or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#E6C766] shadow-[0_10px_40px_rgba(0,0,0,0.04)] order-2 lg:order-1 reveal active">
            <h2 className="text-3xl font-black text-[#1A1A1A] mb-10 uppercase tracking-tight">Send a <span className="text-[#D4AF37]">Message</span></h2>
            <form
              action="https://formsubmit.co/eagleeyeofficialchennai@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Location</label>
                  <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder="e.g. Chennai" className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Service of Interest</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all appearance-none">
                  <option value="">Select a service</option>
                  <option>Bouncer & Security</option>
                  <option>Receptionist</option>
                  <option>House Keeping</option>
                  <option>Labour Supply</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Your Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="How can we help you?" className="w-full bg-white border border-[#E0E0E0] rounded-xl py-3 px-4 text-[#1A1A1A] focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all resize-none"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-white font-black py-5 px-8 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 uppercase tracking-widest text-sm">
                  Submit Request
                </button>
              </div>
              {status && <p className="text-center text-[#D4AF37] font-bold animate-pulse">{status}</p>}
            </form>
          </div>

          <div className="space-y-10 order-1 lg:order-2 reveal active">
            <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">Enquiry <span className="text-[#D4AF37]">Information</span></h3>
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              <div className="flex items-start p-8 bg-[#FFF8E7] rounded-3xl border border-[#E6C766] transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 border border-[#D4AF37]/20">
                  <LocationIcon className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-2">Our Office</h4>
                  <p className="text-[#555555] text-lg font-medium">Thiruverkadu, Chennai - 600077</p>
                </div>
              </div>
              <div className="flex items-start p-8 bg-[#FFF8E7] rounded-3xl border border-[#E6C766] transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 border border-[#D4AF37]/20">
                  <PhoneIcon className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-2">Phone</h4>
                  <a href="tel:9094091083" className="text-[#555555] hover:text-[#D4AF37] transition-colors text-lg font-bold">90940 91083</a>
                </div>
              </div>
              <div className="flex items-start p-8 bg-[#FFF8E7] rounded-3xl border border-[#E6C766] transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 border border-[#D4AF37]/20">
                  <MailIcon className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:eagleeyeofficialchennai@gmail.com" className="text-[#555555] hover:text-[#D4AF37] transition-colors whitespace-nowrap text-lg font-bold">eagleeyeofficialchennai@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
