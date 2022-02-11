import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '../../assets/pd.png';
import classes from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={classes.Container}>
      <Image src={LOGO} width={75} height={75} alt={'Website Logo'} />
    </div>
  );
};

export default Navigation;
