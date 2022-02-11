import React, { FC } from 'react';
import classes from './Introduction.module.scss';

const Introduction: FC = () => {
  return (
    <div className={classes.Container}>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Introduction;
