import React, { FC } from 'react';
import classes from './Introduction.module.scss';
import { stringToArray } from '../../utils/converter';
import AnimationCharacter from '../AnimationCharacter/AnimationCharacter';
import { v4 } from 'uuid';

const Introduction: FC = () => {
  const text = stringToArray('Hello_world!');

  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <h1>
            {text.map((char) => (
              <AnimationCharacter char={char} key={v4()} />
            ))}
          </h1>
          <small>~ Domen Perko</small>
        </div>
      </div>
    </>
  );
};

export default Introduction;
