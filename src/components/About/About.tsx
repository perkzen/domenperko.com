import React, { FC, useEffect } from 'react';
import classes from './About.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import Technologies from '../Techonologies/Technologies';
import Image from 'next/image';
import image from '../../assets/undraw_feeling_proud_qne1.svg';
import { useInView } from 'react-intersection-observer';

const About: FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 2, type: 'spring', bounce: 0.2 },
      });
    }
  }, [animation, inView]);

  return (
    <div className={classes.Container}>
      <div className={classes.Grid}>
        <div ref={ref}>
          <Image src={image} alt={'image'} priority />
        </div>
        <motion.div initial={{ x: '200vw' }} animate={animation}>
          <motion.div initial="start" animate="end">
            <motion.h1 variants={floatVariant} transition={floatTransition}>
              About me
            </motion.h1>
            <p>
              Hi, there I&apos;m Domen. I&apos;m a software developer from
              Slovenia. I started programming in 2020, and since then I have
              built a lot of interesting projects, by building them I have added
              a lot of new skills to my repertoire. I have been obsessed with
              the idea of using software to solve practical problems. Software
              engineering is a never ending puzzle that I am passionately
              engaged in solving.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Technologies />
    </div>
  );
};
export default About;
