import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  // get current date

  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className={classes.Container}>
      &copy; {getCurrentYear()} Domen Perko
    </footer>
  );
};

export default Footer;
