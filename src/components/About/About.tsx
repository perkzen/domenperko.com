import React, { FC } from 'react';
import classes from './About.module.scss';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import Technologies from '../Techonologies/Technologies';
import Image from 'next/image';
import image from '../../assets/undraw_feeling_proud_qne1.svg';

const About: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Grid}>
        <Image src={image} alt={'image'} priority />
        <motion.div initial="start" animate="end">
          <motion.h1 variants={floatVariant} transition={floatTransition}>
            About me
          </motion.h1>
          <p>
            Hi, there I&apos;m Domen. I&apos;m a software developer from
            Slovenia. I started programming in 2020, and since then I have built
            a lot of interesting projects, by building them I have added a lot
            of new skills to my repertoire. I have been obsessed with the idea
            of using software to solve practical problems. Software engineering
            is a neverending puzzle that I am passionately engaged in solving.
          </p>
        </motion.div>
      </div>
      <Technologies />
    </div>
  );
};

export default About;
