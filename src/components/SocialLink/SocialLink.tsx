import React, { FC, ReactNode } from 'react';
import classes from './SocialLink.module.scss';
import { Links } from '../../constants/socials';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  link: string;
}

const SocialLink: FC<SocialLinkProps> = ({ link }) => {
  const getIcon = (): ReactNode => {
    switch (link) {
      case Links.GITHUB:
        return <FaGithub />;
      case Links.LINKEDIN:
        return <FaLinkedin />;
      case Links.EMAIL:
        return <FaGoogle />;
      default:
        return 'Icon not found';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.5, rotate: 30, transition: { duration: 0.5 } }}
      className={classes.Container}
    >
      <a href={link}>{getIcon()}</a>
    </motion.div>
  );
};

export default SocialLink;
