import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './LayoutProvider.module.scss';
import Footer from '../Footer/Footer';

const LayoutProvider: FC = ({ children }) => {
  return (
    <div className={classes.Container}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutProvider;
