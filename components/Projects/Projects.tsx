import React, { FC } from 'react';
import classes from './Projects.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { projects } from '../../constants/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import { v4 } from 'uuid';

const Projects: FC = () => {
  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        // @ts-ignore
        transition={floatTransition}
      >
        Projects
      </motion.h1>
      {/*<div className={classes.Content}>*/}
      {/*  {projects.map((project) => (*/}
      {/*    <ProjectCard project={project} key={v4()} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </motion.div>
  );
};

export default Projects;
