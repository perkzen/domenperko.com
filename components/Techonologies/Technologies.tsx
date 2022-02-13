import React, { FC, useState } from 'react';
import classes from './Technologies.module.scss';
import Marquee from 'react-fast-marquee';
import { technologies } from '../../constants/technologies';
import AnimationCharacter from '../AnimationCharacter/AnimationCharacter';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';

const Technologies: FC = () => {
  const [technology, setTechnology] = useState('Technologies');

  return (
    <motion.div initial="start" animate="end" className={classes.Container}>
      <motion.h1
        variants={floatVariant}
        // @ts-ignore
        transition={floatTransition}
      >
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
            <AnimationCharacter
              char={tech.icon}
              whileHover={{
                scale: 1.5,
                transition: { duration: 0.2 },
              }}
            />
          </a>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Technologies;
