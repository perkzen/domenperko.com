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
      'Graduated as Bachelor of Informatics and communication technologies at the Faculty of Electrical Engineering and Computer Science, University of Maribor.',
      'Currently enrolled in the Master of Informatics and Data Technologies at the Faculty of Electrical Engineering and Computer Science, University of Maribor.',
    ],
    startDate: 'Oct 2020',
    endDate: 'Present',
    type: ExperienceType.UNI,
  },
  {
    title: 'Frontend Software Engineer',
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
      'Acted as the sole frontend developer on a crucial MVP project, overseeing the entire development lifecycle and contributing to its successful deployment to production',
      'Stepped in to handle crucial aspects of projects during the absence of a Senior Software Engineer, showcasing adaptability and leadership in ensuring project continuity.',
    ],
    startDate: 'May 2022',
    endDate: 'Present',
    type: ExperienceType.COMPANY,
  },
];
