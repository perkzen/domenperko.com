import React, { FC, useState } from 'react';
import classes from './Carousel.module.scss';
import { wrap } from 'popmotion';
import { motion, AnimatePresence } from 'framer-motion';
import {
  slideVariant,
  swipePower,
  SWIPER_CONFIDENCE_THRESHOLD,
} from '../../animations/slide';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { projects } from '../../constants/projects';

export const Carousel: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, projects.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={classes.Container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariant}
          className={classes.Project}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -SWIPER_CONFIDENCE_THRESHOLD) {
              paginate(1);
            } else if (swipe > SWIPER_CONFIDENCE_THRESHOLD) {
              paginate(-1);
            }
          }}
        >
          {projects[index].title}
        </motion.div>
      </AnimatePresence>
      <div className={classes.Buttons}>
        <div className={classes.Next} onClick={() => paginate(1)}>
          <FaChevronRight />
        </div>
        <div className={classes.Prev} onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </div>
      </div>
    </div>
  );
};
