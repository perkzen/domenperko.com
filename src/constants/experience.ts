export enum ExperienceType {
  UNI = 'university',
  COMPANY = 'company',
  FREELANCE = 'freelance',
}

export interface Experience {
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  type: ExperienceType;
  bulletPoints: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Student',
    company: 'University of Maribor',
    url: 'https://feri.um.si/',
    bulletPoints: [
      'Studying Informatics and communication technologies at the Faculty of Electrical Engineering and Computer Science, University of Maribor.',
    ],
    startDate: 'Oct 2020',
    endDate: 'Present',
    type: ExperienceType.UNI,
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Equaleyes Ltd.',
    url: 'https://equaleyes.com/',
    bulletPoints: [
      'Translated Figma designs into UI code.',
      'Collaborated effectively with a team of developers, fostering communication, and ensuring efficient ' +
        'project delivery.',
      'Demonstrated problem-solving skills and the ability to think creatively to meet ' +
        'project requirements.',
    ],
    startDate: 'Nov 2021',
    endDate: 'May 2022',
    type: ExperienceType.COMPANY,
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'nChain d.o.o.',
    url: 'https://nchain.com/',
    bulletPoints: [
      'Demonstrated proficiency in writing comprehensive unit tests for ensuring code quality.',
      'Gained valuable experience and expertise in microservice architecture.',
      'Developed scalable and maintainable codebase, following best practices and industry standards to ' +
        'ensure long-term code quality and ease of maintenance.',
    ],
    startDate: 'May 2022',
    endDate: 'Present',
    type: ExperienceType.COMPANY,
  },
];
