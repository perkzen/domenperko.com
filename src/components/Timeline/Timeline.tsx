import React, { FC } from 'react';
import classes from './Timline.module.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experiences } from '../../constants/experience';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { useInViewAnimation } from '../../utils/useInViewAnimation';
import {
  childVariants,
  parentVariants,
} from '../../animations/staggerChildren';

export const Timeline: FC = () => {
  const { ref, animation } = useInViewAnimation();

  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
      >
        Timeline
      </motion.h1>
      <motion.ul
        variants={parentVariants}
        initial={'hidden'}
        animate={animation}
        ref={ref}
      >
        {experiences.map((experience, index) => (
          <motion.li variants={childVariants} key={index}>
            <TimelineItem experience={experience} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
