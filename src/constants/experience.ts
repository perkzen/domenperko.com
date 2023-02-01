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
}

export const experiences: Experience[] = [
  {
    title: 'Student',
    company: 'University of Maribor',
    url: 'https://feri.um.si/',
    description:
      'Studying Informatics and communication technologies at the Faculty of Electrical Engineering and Computer Science, University of Maribor.',
    startDate: 'Oct 2020',
    endDate: 'Present',
    type: ExperienceType.UNI,
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Equaleyes Ltd.',
    url: 'https://equaleyes.com/',
    description:
      'I worked as a Junior Software Engineer at Equaleyes. ' +
      'I mainly worked on the frontend side where I learnt a lot about TypeScript, React, Redux and SCSS. ' +
      'I also worked a little on the backend where I used Typescript, NestJS, Swagger and PostgreSQL. ' +
      'My responsibilities included:  Developing new features for the frontend sometimes even whole pages and backend fixing bugs, writing REST endpoints, writing documentation. ' +
      'The main things that I learnt are how to collaborate with other developers and how to communicate with other team members ' +
      'and thinking outside the box.',
    startDate: 'Nov 2021',
    endDate: 'May 2022',
    type: ExperienceType.COMPANY,
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'nChain d.o.o.',
    url: 'https://nchain.com/',
    description:
      'Currently working as a Junior Software Engineer at nChain.' +
      ' My responsibilities range from contributing to different microservices, managing SQL migrations and developing SPA in react' +
      'Some technologies that I daily use at my work are Typescript, React, NestJS, Express.js, Swagger, GraphQL and PostgreSQL. ' +
      'The most important things that I learnt so far at this position are how to write good unit tests for my code and microservice architecture.',
    startDate: 'May 2022',
    endDate: 'Present',
    type: ExperienceType.COMPANY,
  },
];
