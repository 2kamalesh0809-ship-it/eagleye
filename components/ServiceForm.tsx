
import React, { useState } from 'react';

interface ServiceFormProps {
    serviceTitle: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ serviceTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        setStatus('Sending...');
    };

    return (
        <div className="bg-transparent px-2 py-4 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-black text-white mb-10 italic uppercase tracking-tight">Inquire <span className="text-[#D4AF37]">Now</span></h3>
            <form
                action="https://formsubmit.co/sekarsuriya16@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8 text-left"
            >
                <input type="hidden" name="_subject" value={`New Inquiry: ${serviceTitle}`} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="space-y-3">
                    <label htmlFor="service-name" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="service-name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-premium"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label htmlFor="service-email" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Official Email</label>
                        <input
                            type="email"
                            name="email"
                            id="service-email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="input-premium"
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="service-phone" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="service-phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="input-premium"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label htmlFor="service-location" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Event Location</label>
                    <input
                        type="text"
                        name="location"
                        id="service-location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="input-premium"
                    />
                </div>

                <div className="space-y-3">
                    <label htmlFor="service-message" className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] ml-1">Describe your requirement</label>
                    <textarea
                        name="message"
                        id="service-message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="input-premium resize-none"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="btn-gold w-full py-5 rounded-xl text-sm"
                    >
                        Send Inquiry
                    </button>
                </div>
                {status && <p className="text-center text-sm text-[#D4AF37] animate-pulse font-bold mt-4">{status}</p>}
            </form>
        </div>
    );
};

export default ServiceForm;
