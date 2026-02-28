
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
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
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
                    <div className="px-6 pt-8 pb-20 sm:p-10 md:p-16 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl mb-4 shadow-sm border border-[#D4AF37]/30 flex items-center justify-center">
                            <img
                                src="/images/logo.png"
                                alt="Eagle Eye"
                                className="w-10 h-10 object-contain brightness-110"
                            />
                        </div>

                        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase">
                            {service.title}
                        </h2>

                        <div className="space-y-3 max-w-lg">
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-1">About this service</h4>
                                <div className="h-0.5 w-8 bg-[#D4AF37] rounded-full"></div>
                            </div>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                {service.description}
                            </p>
                            <p className="text-white/60 text-xs md:text-sm leading-relaxed italic">
                                Our professional team is dedicated to providing high-quality {service.title.toLowerCase()} tailored to your needs.
                            </p>
                        </div>

                        <div className="mt-8 w-full">
                            <button
                                onClick={() => setView('form')}
                                className="btn-gold w-full py-4 rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                            >
                                Send an Enquiry <i className="fas fa-arrow-right ml-2 text-xs"></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Step 2: Enquiry Form (Stripped Down) */
                    <div className="p-4 sm:p-10 md:p-14">
                        <button
                            onClick={() => setView('details')}
                            className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest flex items-center mb-2 hover:translate-x-[-2px] transition-transform"
                        >
                            <i className="fas fa-chevron-left mr-2"></i> Back to Details
                        </button>
                        <div className="max-w-2xl mx-auto">
                            <ServiceForm serviceTitle={service.title} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceModal;
