import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
        Backend: ['Node.js', 'Java', 'JDBC', 'MySQL'],
        AI_Tools: ['Python', 'OpenCV', 'TensorFlow (Basics)', 'Git', 'GitHub']
    };

    return (
        <section id="skills" className="py-20 bg-deep-blue/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Technical <span className="text-neon-cyan">Skills</span></h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.2 }}
                            className="bg-dark-bg p-8 rounded-2xl border border-gray-800 hover:border-neon-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-3">
                                {category.replace('_', ' & ')}
                            </h3>
                            <div className="space-y-4">
                                {items.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-400 group-hover:text-neon-cyan transition-colors">{skill}</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.floor(Math.random() * (95 - 70) + 70)}%` }} // Randomized width for effect
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-neon-green to-neon-cyan rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
