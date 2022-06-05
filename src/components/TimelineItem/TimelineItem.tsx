import React, { FC } from 'react';
import classes from './TimelineItem.module.scss';
import { Experience, ExperienceType } from '../../constants/experience';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaUniversity } from 'react-icons/fa';

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem: FC<TimelineItemProps> = ({ experience }) => {
  return (
    <div className={classes.Container}>
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
        <div>
          {experience.startDate} - {experience.endDate}
        </div>
      </div>
      <p className={classes.Description}>{experience.description}</p>
    </div>
  );
};

export default TimelineItem;
