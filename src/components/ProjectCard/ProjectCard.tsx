import React, { FC } from 'react';
import classes from './ProjectCard.module.scss';
import { Project } from '../../constants/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <div className={classes.Buttons}>
          <div />
          <div />
          <div />
        </div>
        <div className={classes.Title}>{project.title}</div>
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
