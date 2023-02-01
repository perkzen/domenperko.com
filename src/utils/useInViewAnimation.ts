import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useInViewAnimation = (reset = false) => {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
    if (!inView && reset) {
      animation.start('hidden');
    }
  }, [animation, inView, reset]);

  return { ref, animation };
};
