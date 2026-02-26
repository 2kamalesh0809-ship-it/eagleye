
import React, { useEffect } from 'react';
import ServiceForm from './ServiceForm';

interface Service {
    image: string;
    title: string;
    description: string;
}

interface ServiceModalProps {
    service: Service | null;
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    const [view, setView] = React.useState<'details' | 'form'>('details');

    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (service) {
            document.body.style.overflow = 'hidden';
            setView('details'); // Reset to details view when modal opens for a new service
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [service]);

    if (!service) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative bg-[#0F0F0F]/95 w-full ${view === 'details' ? 'max-w-2xl' : 'max-w-5xl'} max-h-[95vh] overflow-y-auto rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 animate-in fade-in zoom-in backdrop-blur-2xl`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-20 text-white hover:text-[#D4AF37] transition-colors"
                >
                    <i className="fas fa-times text-2xl"></i>
                </button>

                {view === 'details' ? (
                    /* Step 1: Service Details */
                    <div className="p-8 sm:p-14 md:p-20 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white/5 rounded-3xl mb-10 shadow-sm border border-[#D4AF37]/30 flex items-center justify-center">
                            <img
                                src="/images/logo.png"
                                alt="Eagle Eye"
                                className="w-16 h-16 object-contain brightness-110"
                            />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
                            {service.title}
                        </h2>

                        <div className="space-y-8 max-w-lg">
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs mb-2">About this service</h4>
                                <div className="h-0.5 w-12 bg-[#D4AF37] rounded-full"></div>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed font-medium">
                                {service.description}
                            </p>
                            <p className="text-white/60 text-base leading-relaxed italic">
                                Our professional team is dedicated to providing high-quality {service.title.toLowerCase()} tailored to your specific needs. We ensure reliability, safety, and excellence in every assignment.
                            </p>
                        </div>

                        <div className="mt-14 w-full">
                            <button
                                onClick={() => setView('form')}
                                className="btn-gold w-full py-6 rounded-2xl"
                            >
                                Send an Enquiry <i className="fas fa-arrow-right ml-2 text-xs"></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Step 2: Enquiry Form (The "Next Page") */
                    <div className="flex flex-col md:flex-row min-h-[600px]">
                        <div className="md:w-5/12 p-10 md:p-16 bg-white/5 border-r border-white/10 flex flex-col justify-center">
                            <button
                                onClick={() => setView('details')}
                                className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-10 flex items-center hover:translate-x-[-4px] transition-transform"
                            >
                                <i className="fas fa-chevron-left mr-3"></i> Back to Details
                            </button>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Request a <span className="text-[#D4AF37]">Quote</span></h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Fill out the form and our specialist team will get back to you with a tailored solution for your <strong>{service.title}</strong> requirements.
                            </p>
                            <div className="mt-10 space-y-4">
                                <div className="flex items-center gap-4 text-[#D4AF37]">
                                    <i className="fas fa-check-circle"></i>
                                    <span className="text-white font-bold">Priority Response</span>
                                </div>
                                <div className="flex items-center gap-4 text-[#D4AF37]">
                                    <i className="fas fa-check-circle"></i>
                                    <span className="text-white font-bold">Vetted Professionals</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-7/12 p-8 sm:p-14 bg-transparent">
                            <div className="md:hidden mb-10">
                                <button
                                    onClick={() => setView('details')}
                                    className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest flex items-center"
                                >
                                    <i className="fas fa-chevron-left mr-3"></i> Back
                                </button>
                            </div>
                            <ServiceForm serviceTitle={service.title} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceModal;
