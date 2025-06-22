import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import SkillsRadar from '../components/SkillsRadar/SkillsRadar';
import Projects from '../components/Projects/Projects';
import Contact from  '../components/Contact/Contact';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SkillsRadar />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
