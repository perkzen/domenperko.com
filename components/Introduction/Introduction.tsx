import React, { FC } from 'react';
import classes from './Introduction.module.scss';
import { motion } from 'framer-motion';

const Introduction: FC = () => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <motion.h1 animate={{ scale: 1.5 }} transition={{ duration: 0.5 }}>
            Hello world!
          </motion.h1>
          <small>~ Domen Perko</small>
        </div>
      </div>
    </>
  );
};

export default Introduction;
