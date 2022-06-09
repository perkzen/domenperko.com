import React, { FC, useEffect } from 'react';
import classes from './Timline.module.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experiences } from '../../constants/experience';
import { motion, useAnimation } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Timeline: FC = () => {
  const [ref, inView] = useInView({ threshold: 1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
    if (!inView) {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        transition={floatTransition}
        className={classes.Title}
        ref={ref}
      >
        Timeline
      </motion.h1>
      <motion.ul variants={variants} initial={'hidden'} animate={animation}>
        {experiences.map((experience, index) => (
          <motion.li variants={childVariants} key={index}>
            <TimelineItem experience={experience} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
