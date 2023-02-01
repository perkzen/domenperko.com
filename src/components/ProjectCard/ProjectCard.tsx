import React, { FC } from 'react';
import classes from './ProjectCard.module.scss';
import { Project } from '../../constants/projects';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  variants?: Variants;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div className={classes.Container} variants={variants}>
      <h1>
        <Link href={project.url} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <SiGithub />
            {project.title}
          </a>
        </Link>
      </h1>
      <p>{project.description}</p>
      <div className={classes.Language}>
        <span style={{ background: project.color }} />
        <p>{project.languages}</p>
      </div>
      <div className={classes.Tags}>
        {project.technologies.map((tag, i) => (
          <p key={i} className={classes.Tag}>
            {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
