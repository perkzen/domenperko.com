import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '../../assets/pd.png';
import classes from './Navigation.module.scss';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Links } from '../../constants/socials';

const Navigation: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Logo}>
        <Image src={LOGO} width={75} height={75} alt={'Website Logo'} />
      </div>
      <div className={classes.Socials}>
        <Link href={Links.GITHUB} passHref={true}>
          <FaGithub />
        </Link>
        <Link href={Links.LINKEDIN} passHref={true}>
          <FaLinkedin />
        </Link>
        <Link href={Links.INSTAGRAM} passHref={true}>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
