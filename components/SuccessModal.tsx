
import React from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message = "Thank you! Your enquiry has been sent successfully. Our team will contact you shortly." }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-[#141414] border border-[#D4AF37]/30 w-full max-w-md p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center animate-in zoom-in slide-in-from-bottom-4 duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                    <i className="fas fa-check text-3xl text-white"></i>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Message <span className="text-[#D4AF37]">Sent</span></h3>

                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    {message}
                </p>

                <button
                    onClick={onClose}
                    className="btn-gold w-full py-4 rounded-xl text-sm"
                >
                    Dismiss
                </button>

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
