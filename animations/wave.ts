export const charWaveVariant = {
  start: {
    y: '0%',
  },
  end: {
    y: '50%',
  },
};

export const containerVariants = {
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

export const charWaveTransition = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};
