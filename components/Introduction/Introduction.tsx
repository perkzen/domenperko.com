import React, { FC } from 'react';
import classes from './Introduction.module.scss';
import { stringToArray } from '../../utils/converter';
import AnimationCharacter from '../AnimationCharacter/AnimationCharacter';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';
import {
  charWaveTransition,
  charWaveVariant,
  containerVariants,
} from '../../animations/wave';

const Introduction: FC = () => {
  const text = stringToArray('Hello_world!');

  return (
    <div className={classes.Container}>
      <motion.h1 variants={containerVariants} initial="start" animate="end">
        {text.map((char) => (
          <AnimationCharacter
            char={char}
            key={v4()}
            variant={charWaveVariant}
            // @ts-ignore
            transition={charWaveTransition}
          />
        ))}
      </motion.h1>
      <small>~ Domen Perko</small>
    </div>
  );
};

export default Introduction;
