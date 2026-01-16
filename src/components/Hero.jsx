import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Aspiring Full-Stack & AI Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="circuit-bg absolute inset-0 opacity-20"></div>

            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6 relative inline-block">
                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-neon-cyan/50 p-2 mx-auto relative shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                                {/* Placeholder for Profile Image */}
                                <span className="text-4xl text-gray-500">IMG</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-dark-bg p-2 rounded-full border border-neon-green">
                                <span className="text-2xl">⚡</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-neon-cyan font-mono text-lg mb-4">Hello, I'm Akhil</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Building <span className="text-neon-green">Smart</span> Solutions
                    </h1>

                    <div className="h-8 mb-8">
                        <span className="text-xl md:text-2xl text-gray-400 font-mono">
                            {text}
                            <span className="animate-pulse text-neon-green">|</span>
                        </span>
                    </div>

                    <motion.div
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-transparent border border-neon-green text-neon-green rounded hover:bg-neon-green/10 transition-all duration-300 font-mono flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        <button className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan/20 transition-all duration-300 font-mono flex items-center gap-2">
                            Download Resume
                            <Download size={18} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
