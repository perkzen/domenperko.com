import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './LayoutProvider.module.scss';

const LayoutProvider: FC = ({ children }) => {
  return (
    <div className={classes.Container}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default LayoutProvider;
