import React, { FC } from 'react';
import classes from './ProjectCard.module.scss';
import { Project } from '../../constants/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={classes.Container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
