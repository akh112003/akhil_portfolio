import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">About <span className="text-neon-green">Me</span></h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-deep-blue p-8 rounded-2xl border border-gray-800 hover:border-neon-cyan/50 transition-colors duration-300 relative shadow-lg group">
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-neon-cyan/10 rounded-full blur-xl group-hover:bg-neon-cyan/20 transition-colors"></div>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                I am a <span className="text-neon-green font-semibold">Computer Science Engineering Student</span> graduating in 2026, passionate about building smart, scalable, and user-centric software solutions.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                My journey involves exploring Full-Stack Development and Artificial Intelligence to solve real-world problems. I thrive in challenging environments where I can leverage my skills in Java, React, and Python to create impactful innovative projects.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { label: 'Degree', value: 'B.E. Computer Science' },
                            { label: 'Graduation', value: 'June 2026' },
                            { label: 'Focus', value: 'Full-Stack & AI' },
                            { label: 'Location', value: 'India' } // Placeholder location
                        ].map((item, idx) => (
                            <div key={idx} className="bg-deep-blue/50 p-6 rounded-xl border border-gray-800 hover:border-neon-green/50 transition-colors">
                                <h4 className="text-neon-cyan text-sm font-mono mb-2">{item.label}</h4>
                                <p className="text-white font-semibold text-lg">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
