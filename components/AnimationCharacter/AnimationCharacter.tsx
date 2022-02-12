import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface AnimationCharacterProps {
  char: string;
}

const AnimationCharacter: FC<AnimationCharacterProps> = ({ char }) => {
  return (
    <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}>
      {char}
    </motion.div>
  );
};

export default AnimationCharacter;
