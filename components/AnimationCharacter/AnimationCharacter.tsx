import React, { FC } from 'react';
import { motion, Transition, Variants } from 'framer-motion';

interface AnimationCharacterProps {
  char: string;
  className?: string;
  variant?: Variants;
  transition?: Transition;
}

const AnimationCharacter: FC<AnimationCharacterProps> = ({
  char,
  className,
  variant,
  transition,
}) => {
  return (
    <motion.div
      className={className}
      variants={variant}
      transition={transition}
    >
      {char}
    </motion.div>
  );
};

export default AnimationCharacter;
