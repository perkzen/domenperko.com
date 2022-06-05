import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';
import LayoutProvider from '../components/LayoutProvider/LayoutProvider';
import About from '../components/About/About';
import { loadFull } from 'tsparticles';
import { tsParticles } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { options } from '../animations/particles';
import React from 'react';
import { Timeline } from '../components/Timeline/Timeline';
import Projects from '../components/Projects/Projects';

const Home: NextPage = () => {
  const particlesInit = async () => {
    await loadFull(tsParticles);
  };

  return (
    <>
      <Particles init={particlesInit} options={options} />
      <LayoutProvider>
        <Introduction />
        <About />
        <Projects />
        <Timeline />
      </LayoutProvider>
    </>
  );
};

export default Home;
