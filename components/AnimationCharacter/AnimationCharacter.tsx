import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface AnimationCharacterProps {
  char: string;
  className?: string;
}

const AnimationCharacter: FC<AnimationCharacterProps> = ({
  char,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
      className={className}
    >
      {char}
    </motion.div>
  );
};

export default AnimationCharacter;
