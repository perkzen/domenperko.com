import React, { FC } from 'react';
import classes from './About.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import Technologies from '../Techonologies/Technologies';

const About: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Grid}>
        <div />
        <motion.div initial="start" animate="end">
          <motion.h1
            variants={floatVariant}
            // @ts-ignore
            transition={floatTransition}
          >
            About me
          </motion.h1>
          <p>
            Hi, there I&apos;m Domen. I&apos;m a software developer from
            Slovenia. I&apos;ve started programming in 2020, since then
            I&apos;ve built a lot of interesting project, by building them
            I&apos;ve added a lot of new skills to my repertoire. The best thing
            I find in software developing is that you can make your life much
            easier by automating boring tasks that you normally don&apos;t want
            to do.
          </p>
        </motion.div>
      </div>
      <Technologies />
    </div>
  );
};

export default About;
