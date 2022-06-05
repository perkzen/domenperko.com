import React, { FC } from 'react';
import classes from './Timline.module.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experiences } from '../../constants/experience';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';

export const Timeline: FC = () => {
  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
      >
        Timeline
      </motion.h1>
      {experiences.map((experience) => (
        <TimelineItem key={v4()} experience={experience} />
      ))}
    </motion.div>
  );
};
