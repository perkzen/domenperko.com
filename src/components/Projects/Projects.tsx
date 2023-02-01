import React, { FC } from 'react';
import classes from './Projects.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { projects } from '../../constants/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import {
  childVariants,
  parentVariants,
} from '../../animations/staggerChildren';
import { useInViewAnimation } from '../../utils/useInViewAnimation';

const Projects: FC = () => {
  const { ref, animation } = useInViewAnimation();
  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
      >
        Projects
      </motion.h1>
      <motion.div
        className={classes.Projects}
        variants={parentVariants}
        initial={'hidden'}
        animate={animation}
        ref={ref}
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} variants={childVariants} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
