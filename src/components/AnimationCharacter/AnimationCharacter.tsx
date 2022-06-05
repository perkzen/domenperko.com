import React, { FC, ReactNode } from 'react';
import {
  motion,
  Variants,
  Transition,
  VariantLabels,
  TargetAndTransition,
} from 'framer-motion';

interface AnimationCharacterProps {
  char: ReactNode;
  className?: string;
  variant?: Variants;
  transition?: Transition;
  whileHover?: VariantLabels | TargetAndTransition;
}

const AnimationCharacter: FC<AnimationCharacterProps> = ({
  char,
  className,
  variant,
  transition,
  whileHover,
}) => {
  return (
    <motion.div
      whileHover={whileHover}
      className={className}
      variants={variant}
      transition={transition}
    >
      {char}
    </motion.div>
  );
};

export default AnimationCharacter;
