import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
    {
        title: 'Library Management System',
        description: 'A robust Java-based application for managing college library operations, including book tracking, student records, and fine calculation. Used JDBC to connect with MySQL database.',
        tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
        github: 'https://github.com/akh112003',
        demo: null,
        image: null
    },
    {
        title: 'CGPA & GPA Calculator',
        description: 'A web-based tool for students to easily calculate their semester GPA and cumulative CGPA. Features a user-friendly interface and dynamic result generation.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/akh112003',
        demo: '#',
        image: '/assets/cgpa_calculator.png'
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
        title: 'Facial Expression Detection',
        description: 'Real-time facial expression recognition system using Python and OpenCV. Detects emotions like happy, sad, angry, and neutral from video feed.',
        tech: ['Python', 'OpenCV', 'TensorFlow'],
        github: 'https://github.com/akh112003',
        demo: null,
        image: null
    },
    {
        title: 'Music Streaming Web App',
        description: 'A responsive UI clone of a music streaming service. Focuses on frontend design, smooth transitions, and playing functionality simulation.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/akh112003',
        demo: '#',
        image: null
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured <span className="text-neon-green">Projects</span></h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="bg-deep-blue rounded-xl overflow-hidden border border-gray-800 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all cursor-pointer group"
                        >
                            <div className="h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue to-transparent opacity-60"></div>
                                        <span className="text-gray-500 font-mono text-xl">
                                            {project.title.substring(0, 3)}
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-1 rounded">
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-deep-blue w-full max-w-2xl rounded-2xl border border-neon-cyan/30 overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 p-1 rounded-full z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="h-64 bg-gray-800 relative flex items-center justify-center overflow-hidden">
                                {selectedProject.image ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-500 font-mono text-xl">
                                        {selectedProject.title} Screenshot
                                    </span>
                                )}
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="text-sm font-mono text-neon-green bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.github}
                                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <Github size={20} />
                                        GitHub Repo
                                    </a>
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            className="flex-1 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a>
                                    )}
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
