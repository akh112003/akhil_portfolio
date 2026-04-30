import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">
            ABOUT <span className="text-primary-blue italic">ME</span>
          </h2>
          
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-bold">Computer Science Engineer</span> expected to graduate in 2026. I am dedicated to crafting exceptional digital experiences and building the next generation of technology.
            </p>
            <p>
              My approach focuses on <span className="text-primary-blue font-medium italic underline decoration-primary-blue/30 underline-offset-4">clean code, efficient design patterns</span>, and leveraging AI to solve complex real-world problems.
            </p>
            <p>
              Currently focusing on full-stack development and artificial intelligence, I am always pushing the boundaries of my technical skills and building projects that make a difference.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-3xl font-black text-white mb-1">2+</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">15+</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects Built</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">10+</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-1">24/7</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Availability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
