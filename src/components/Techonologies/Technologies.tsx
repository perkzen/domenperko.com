import React, { FC, useState } from 'react';
import classes from './Technologies.module.scss';
import Marquee from 'react-fast-marquee';
import { technologies } from '../../constants/technologies';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';

const Technologies: FC = () => {
  const [technology, setTechnology] = useState('Technologies');

  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1 variants={floatVariant} transition={floatTransition}>
        {technology}
      </motion.h1>
      <Marquee className={classes.Marquee}>
        {technologies.map((tech) => (
          <a
            href={tech.url}
            key={v4()}
            onMouseEnter={() => setTechnology(tech.name)}
            onMouseLeave={() => setTechnology('Technologies')}
          >
            {tech.icon}
          </a>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Technologies;
