export const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const childVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
