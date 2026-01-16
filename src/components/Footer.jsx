import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center border-t border-gray-900">
            <p className="text-gray-500 flex items-center justify-center gap-2">
                Designed & Developed by <span className="text-neon-green font-mono">Akhil</span>
            </p>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-600">
                <span>Built with React</span>
                <Heart size={12} className="text-red-500 animate-pulse" />
                <span>& Tailwind</span>
            </div>
            <p className="text-gray-700 text-xs mt-2">© 2026 All rights reserved.</p>
        </footer>
    );
};

export default Footer;
