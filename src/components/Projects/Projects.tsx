import React, { FC, useEffect, useState } from 'react';
import classes from './Projects.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { Carousel } from '../Carousel/Carousel';

const Projects: FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowProjects(true);
  }, []);

  if (!showProjects) return null;

  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
      >
        Projects
      </motion.h1>
      <Carousel />
    </motion.div>
  );
};

export default Projects;
