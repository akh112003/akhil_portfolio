import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

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
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something <span className="text-primary-blue italic">great</span> together.</h3>
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-blue/5">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-lg text-white font-medium">akhilreddyyar989@gmail.com</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-blue/5">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Social</p>
                <p className="text-lg text-white font-medium">LinkedIn / Twitter / GitHub</p>
              </div>
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
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all text-white placeholder:text-slate-600"
            />
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
