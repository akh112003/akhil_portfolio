import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-black text-white tracking-tight">AKHIL <span className="text-primary-blue">REDDY</span></h3>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-[0.3em] font-bold">Software Engineer</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">GitHub</a>
          <a href="#" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-slate-400 hover:text-primary-blue transition-colors">Twitter</a>
        </div>
        
        <p className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
