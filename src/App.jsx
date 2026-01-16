import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollSection from './components/ScrollSection';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-gray-300 font-sans selection:bg-neon-green selection:text-black h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <ScrollSection id="hero"><Hero /></ScrollSection>
      <ScrollSection id="about"><About /></ScrollSection>
      <ScrollSection id="skills"><Skills /></ScrollSection>
      <ScrollSection id="projects"><Projects /></ScrollSection>
      <ScrollSection id="contact"><Contact /></ScrollSection>
      <div className="snap-start"><Footer /></div>
    </div>
  );
}

export default App;
