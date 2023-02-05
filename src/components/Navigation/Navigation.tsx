import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '../../assets/pd.png';
import classes from './Navigation.module.scss';
import { SocialsLinks } from '../../constants/socials';
import SocialLink from '../SocialLink/SocialLink';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';

const Navigation: FC = () => {
  return (
    <div className={classes.Container}>
      <motion.div
        className={classes.Logo}
        whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image src={LOGO} width={75} height={75} alt={'Website Logo'} />
      </motion.div>
      <div className={classes.Socials}>
        {SocialsLinks.map((socialLink) => (
          <SocialLink link={socialLink} key={v4()} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
