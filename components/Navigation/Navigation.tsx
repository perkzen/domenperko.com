import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '../../assets/pd.png';
import classes from './Navigation.module.scss';
import { SocialsLinks } from '../../constants/socials';
import SocialLink from '../SocialLink/SocialLink';
import { v4 } from 'uuid';

const Navigation: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Logo}>
        <Image src={LOGO} width={75} height={75} alt={'Website Logo'} />
      </div>
      <div className={classes.Socials}>
        {SocialsLinks.map((socialLink) => (
          <SocialLink link={socialLink} key={v4()} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
