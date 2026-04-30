import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code2 } from 'lucide-react';

const projects = [
    {
        title: 'Aura - Healthcare AI Chatbot',
        description: 'An advanced AI-powered health assistant that predicts potential diseases from symptoms and provides empathetic, medically-grounded advice and precautions.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        github: 'https://github.com/akh112003/akhil_portfolio/tree/main/healthcare-bot-source',
        demo: null,
        image: '/assets/healthcare_bot.png'
    },
    {
        title: 'Student Complaint System',
        description: 'AI-powered platform for automatic categorization and prioritization of student complaints. Reduces administrative workload by intelligently routing issues.',
        tech: ['Python', 'NLP', 'Flask', 'React'],
        github: 'https://github.com/akh112003',
        demo: null,
        image: '/assets/student_complaint.png'
    },
    {
        title: 'CGPA & GPA Calculator',
        description: 'A web-based tool for students to easily calculate their semester GPA and cumulative CGPA. Features a user-friendly interface and dynamic result generation.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/akh112003',
        demo: '#',
        image: '/assets/cgpa_calculator.png'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black text-white mb-4 tracking-tight">FEATURED <span className="text-primary-blue italic">PROJECTS</span></h2>
                    <div className="w-20 h-1 bg-primary-blue rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <div className="h-56 relative overflow-hidden flex items-center justify-center bg-slate-800">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                                ) : (
                                    <Code2 className="text-slate-600 w-16 h-16 group-hover:text-primary-blue transition-colors duration-500" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy to-transparent opacity-60"></div>
                            </div>
                            
                            <div className="p-6 relative">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-mono font-bold tracking-wider text-primary-blue bg-primary-blue/10 px-2 py-1 rounded uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-navy/90 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-slate-900 w-full max-w-3xl rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 p-2 rounded-full z-10 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="h-full bg-slate-800 relative flex items-center justify-center overflow-hidden min-h-[300px]">
                                    {selectedProject.image ? (
                                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <Code2 size={64} className="text-slate-700" />
                                    )}
                                </div>

                                <div className="p-10">
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{selectedProject.title}</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-10">
                                        <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-[0.2em]">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-mono font-bold text-primary-blue bg-primary-blue/10 px-3 py-1.5 rounded-lg border border-primary-blue/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-white text-dark-navy py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] font-bold text-sm shadow-xl"
                                        >
                                            <Github size={20} />
                                            SOURCE CODE
                                        </a>
                                        {selectedProject.demo && (
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-primary-blue text-white py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] font-bold text-sm shadow-xl shadow-primary-blue/20"
                                            >
                                                <ExternalLink size={20} />
                                                LIVE DEMO
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
