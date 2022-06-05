import nChainLogo from '../assets/nChain.jpeg';

export enum ExperienceType {
  UNI = 'university',
  COMPANY = 'company',
  FREELANCE = 'freelance',
}

export interface Experience {
  title: string;
  company: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  type: ExperienceType;
  img: any;
}

export const experiences: Experience[] = [
  {
    title: 'Student',
    company: 'University of Maribor',
    url: 'https://feri.um.si/',
    description:
      'Student at the Faculty of Electrical Engineering and Computer Science, University of Maribor, ' +
      'studying Informatics and communication technologies.',
    startDate: 'Oct 2020',
    endDate: 'Present',
    type: ExperienceType.UNI,
    img: 'https://feri.um.si/wp-content/uploads/2019/12/logo-feri.png',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Equaleyes Ltd.',
    url: 'https://equaleyes.com/',
    description:
      'I worked as a Junior Software Engineer at Equaleyes.' +
      'Mainly I worked on the frontend side where I learnt a lot about TypeScript, React, Redux and SCSS.' +
      'I also worked a little on the backend using Typescript, NestJS, Swagger and PostgreSQL.',
    startDate: 'Nov 2021',
    endDate: 'May 2022',
    type: ExperienceType.COMPANY,
    img: 'https://equaleyes.com/wp-content/uploads/2019/12/logo-equaleyes.png',
  },
  {
    title: 'Junior Software Engineer',
    company: 'nChain d.o.o.',
    url: 'https://nchain.com/',
    description:
      "Currently working as a Junior Software Engineer at nChain. Mainly working on the backend where I'm contributing to different " +
      'microservices. Some technologies that I daily use at my work are Typescript, Express.js, Swagger, GraphQL and PostgreSQL. ' +
      'The most important things that I learnt at this position is writing good unit tests',
    startDate: 'May 2022',
    endDate: 'Present',
    type: ExperienceType.COMPANY,
    img: nChainLogo,
  },
];
