import React, { FC } from 'react';
import classes from './Projects.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { projects } from '../../constants/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects: FC = () => {
  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
      >
        Projects
      </motion.h1>
      <div className={classes.Projects}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
