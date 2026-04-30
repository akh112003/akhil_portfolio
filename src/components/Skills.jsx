import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Layout, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="text-primary-blue" size={32} />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
  },
  {
    title: 'Backend Systems',
    icon: <Database className="text-primary-blue" size={32} />,
    skills: ['Node.js', 'Python', 'Flask', 'PostgreSQL', 'Redis']
  },
  {
    title: 'AI & Machine Learning',
    icon: <Cpu className="text-primary-blue" size={32} />,
    skills: ['NLP', 'Gemini API', 'TensorFlow', 'Data Processing', 'Vector DBs']
  },
  {
    title: 'Cloud & DevOps',
    icon: <Globe className="text-primary-blue" size={32} />,
    skills: ['Vercel', 'AWS', 'Docker', 'Git', 'CI/CD']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">MY <span className="text-primary-blue italic">SKILLS</span></h2>
          <div className="w-20 h-1 bg-primary-blue rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border-white/5 group hover:bg-primary-blue/5 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/40"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
