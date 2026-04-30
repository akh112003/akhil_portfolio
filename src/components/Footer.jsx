import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-black text-white tracking-tight uppercase">AKHIL <span className="text-primary-blue">KK</span></h3>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-[0.3em] font-bold">Computer Science Engineer</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://github.com/akh112003" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/akhil-kk-8993b2344" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">LinkedIn</a>
          <a href="https://instagram.com/a_k_h._i_l" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">Instagram</a>
        </div>
        
        <p className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
