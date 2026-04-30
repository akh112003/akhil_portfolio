import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, FileText, Mail, ChevronDown, Instagram, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Card - Branding/Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4"
        >
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl group-hover:bg-primary-blue/30 transition-colors"></div>
            
            <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-primary-blue/20">
              <Terminal className="text-primary-blue w-10 h-10" />
            </div>
            
            <span className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-2 block">Hello, I am</span>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight uppercase">
              AKHIL <span className="text-primary-blue italic">KK</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:akhilharikuttan104@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer group/item">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover/item:bg-primary-blue/20 group-hover/item:text-primary-blue">
                  <Mail size={16} />
                </div>
                <span className="text-sm">akhilharikuttan104@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <a href="#" className="flex-1 bg-primary-blue hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-blue/20 font-bold text-sm">
                  <FileText size={18} />
                  RESUME
                </a>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/akh112003" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center py-3 transition-colors text-white">
                  <Github size={18} className="mr-2" /> <span className="text-xs font-bold">GITHUB</span>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/akhil-kk-8993b2344" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-800 hover:bg-[#0077b5] rounded-xl flex items-center justify-center py-3 transition-colors text-white">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/a_k_h._i_l" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-800 hover:bg-[#e4405f] rounded-xl flex items-center justify-center py-3 transition-colors text-white">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/918547946228" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-800 hover:bg-[#25d366] rounded-xl flex items-center justify-center py-3 transition-colors text-white">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Large Title */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8"
        >
          <div className="space-y-6">
            <h2 className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tighter">
              COMPUTER <br />
              <span className="text-slate-800 outline-text uppercase">SCIENCE</span> <br />
              ENGINEER
            </h2>
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-slate-800"></div>
              <p className="max-w-md text-lg text-slate-400 leading-relaxed text-right italic">
                Expected Graduation: 2026. Currently looking for internships and opportunities to work on exciting projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #334155;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
