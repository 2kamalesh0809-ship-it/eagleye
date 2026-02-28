
import React, { useState } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';
import SuccessModal from './SuccessModal';

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formsubmit.co/ajax/eagleeyeofficialchennai@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact Form Submission"
        })
      });

      if (response.ok) {
        setStatus('');
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please check your connection.');
    }
  };

  return (
    <div className="py-24 bg-white min-h-screen">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
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
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="input-premium" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className="input-premium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="input-premium" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Location</label>
                  <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder="e.g. Chennai" className="input-premium" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Service of Interest</label>
                <div className="relative">
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-premium appearance-none pr-12 cursor-pointer transition-all duration-300"
                  >
                    <option value="" className="bg-[#141414] text-white">Select a service</option>
                    <option className="bg-[#141414] text-white">Bouncer & Security</option>
                    <option className="bg-[#141414] text-white">Receptionist</option>
                    <option className="bg-[#141414] text-white">House Keeping</option>
                    <option className="bg-[#141414] text-white">Labour Supply</option>
                    <option className="bg-[#141414] text-white">Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-[#D4AF37] text-xs"></i>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Your Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="How can we help you?" className="input-premium resize-none"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="btn-gold w-full py-5 rounded-xl text-sm">
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
                  <i className="fab fa-whatsapp text-3xl text-[#25D366]"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/919094091083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555555] hover:text-[#D4AF37] transition-colors text-lg font-bold"
                  >
                    90940 91083
                  </a>
                </div>
              </div>
              <div className="flex items-start p-8 bg-[#FFF8E7] rounded-3xl border border-[#E6C766] transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 border border-[#D4AF37]/20">
                  <MailIcon className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:eagleeyeofficialchennai@gmail.com" className="text-[#555555] hover:text-[#D4AF37] transition-colors break-all text-base sm:text-lg font-bold">eagleeyeofficialchennai@gmail.com</a>
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
