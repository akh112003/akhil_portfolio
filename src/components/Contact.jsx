import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-deep-blue/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In <span className="text-neon-cyan">Touch</span></h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm currently looking for internships and opportunity to work on exciting projects.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-neon-green transition-colors">
                                <div className="p-3 bg-dark-bg rounded-lg border border-gray-800">
                                    <Mail size={20} className="text-neon-cyan" />
                                </div>
                                <a href="mailto:akhilharikuttan104@gmail.com">akhilharikuttan104@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, href: 'https://github.com/akh112003', color: 'hover:text-white' },
                                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/akhil-kk-8993b2344', color: 'hover:text-blue-400' },
                                { icon: <Instagram size={20} />, href: 'https://instagram.com/a_k_h._i_l', color: 'hover:text-pink-500' },
                                { icon: <Phone size={20} />, href: 'https://wa.me/918547946228', color: 'hover:text-green-500' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-dark-bg rounded-lg border border-gray-800 text-gray-400 transition-colors ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-bg p-8 rounded-2xl border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-deep-blue border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-deep-blue border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-deep-blue border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border border-neon-cyan text-neon-cyan font-bold py-3 rounded-lg hover:from-neon-green/30 hover:to-neon-cyan/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : submitted ? (
                                    'Message Sent!'
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
