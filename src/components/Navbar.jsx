import React from 'react';
import { Home, User, Code, Briefcase, Mail, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'skills', icon: <Settings size={20} />, label: 'Skills' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4 p-3 glass rounded-full shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="p-3 text-slate-400 hover:text-primary-blue hover:bg-white/10 rounded-full transition-all duration-300 relative group"
          >
            {item.icon}
            <span className="absolute right-full mr-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
