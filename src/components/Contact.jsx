import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Linkedin, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">GET IN <span className="text-primary-blue italic">TOUCH</span></h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something <span className="text-primary-blue italic">great</span> together.</h3>
            
            <a href="mailto:akhilharikuttan104@gmail.com" className="glass-card p-6 rounded-2xl flex items-center gap-6 group cursor-pointer block">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-blue/5">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-lg text-white font-medium">akhilharikuttan104@gmail.com</p>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-4">
              <a href="https://www.linkedin.com/in/akhil-kk-8993b2344" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 group cursor-pointer hover:bg-[#0077b5]/10">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="https://instagram.com/a_k_h._i_l" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 group cursor-pointer hover:bg-[#e4405f]/10">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-[#e4405f] group-hover:text-white transition-all">
                  <Instagram size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instagram</span>
              </a>
              <a href="https://wa.me/918547946228" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 group cursor-pointer hover:bg-[#25d366]/10">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-[#25d366] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all text-white placeholder:text-slate-600"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all text-white placeholder:text-slate-600"
              />
            </div>
            <textarea 
              rows="5" 
              placeholder="Message" 
              className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all text-white placeholder:text-slate-600 resize-none"
            ></textarea>
            <button className="w-full bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-2">
              <Send size={18} />
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
