import { Transition, Variants } from 'framer-motion';

export const charWaveVariant: Variants = {
  start: {
    y: '0%',
  },
  end: {
    y: '50%',
  },
};

export const containerVariants: Variants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const charWaveTransition: Transition = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};
