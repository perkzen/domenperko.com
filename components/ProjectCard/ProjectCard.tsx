import React, { FC } from 'react';
import classes from './ProjectCard.module.scss';
import { Project } from '../../constants/projects';
import Tilt from 'react-tilt';
import classNames from 'classnames';

interface ProjectCardProps {
  project: Project;
}

// drag effect with framer motion add button show more

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Tilt
      className={classNames(classes.Container, 'Tilt')}
      options={{ max: 25, scale: 1 }}
    >
      <h1 className={'Tilt-inner'}>{project.title}</h1>
      <p>{project.description}</p>
    </Tilt>
  );
};

export default ProjectCard;
