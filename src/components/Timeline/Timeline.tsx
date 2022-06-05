import React, { FC } from 'react';
import classes from './Timline.module.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experiences } from '../../constants/experience';
import { v4 } from 'uuid';

export const Timeline: FC = () => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Timeline</h1>
      {experiences.map((experience) => (
        <TimelineItem key={v4()} experience={experience} />
      ))}
    </div>
  );
};
