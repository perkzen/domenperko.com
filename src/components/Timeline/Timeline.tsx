import React, { FC, useEffect } from 'react';
import classes from './Timline.module.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experiences } from '../../constants/experience';
import { motion, useAnimation } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import { useInView } from 'react-intersection-observer';

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Timeline: FC = () => {
  const [ref, inView] = useInView({ threshold: 1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log('d');
      animation.start('open');
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
      <motion.nav initial={false} animate={animation}>
        <motion.ul variants={variants}>
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} />
          ))}
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};
