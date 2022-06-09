import React, { FC } from 'react';
import classes from './TimelineItem.module.scss';
import { Experience, ExperienceType } from '../../constants/experience';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  experience: Experience;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const TimelineItem: FC<TimelineItemProps> = ({ experience }) => {
  return (
    <motion.div variants={variants} className={classes.Container}>
      <div className={classes.Title}>
        <div className={classes.Icon}>
          {experience.type === ExperienceType.COMPANY ? (
            <HiOutlineOfficeBuilding />
          ) : (
            <FaUniversity />
          )}
        </div>
        <h1>
          {experience.title}, {experience.company}{' '}
        </h1>
      </div>
      <div className={classes.Description}>
        <p className={classes.Time}>
          {experience.startDate} - {experience.endDate}
        </p>
        <p>{experience.description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
