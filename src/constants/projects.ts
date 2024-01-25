// messenger app, leauge of ml, computer shop, reservation app, finanzo, blockhain

export interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  color: string;
  languages: string;
}

//Include pictures?

export const projects: Project[] = [
  {
    title: 'PM10 Pollution Prediction',
    description:
      'PM10 Pollution Prediction is a project where I tried to predict PM10' +
      ' particles in the air using recurrent neural networks and multivariate time series.' +
      ' After training the model, I exported it and made it accessible by exposing it through an API.',
    url: 'https://github.com/perkzen/development-of-intelligent-solutions-with-machine-learning/tree/master/project',
    languages: 'Python',
    color: '#e5d20d',
    technologies: [
      'Tensorflow',
      'Pandas',
      'Numpy',
      'Matplotlib',
      'Scikit-learn',
    ],
  },
  {
    title: 'GO Blockchain',
    description:
      'GO Blockchain is a basic implementation of a blockchain using the Go programming language. ' +
      'The project aims to demonstrate the fundamental ' +
      'concepts behind blockchain technology and how they can be implemented in a decentralized and secure manner.',
    url: 'https://github.com/perkzen/blockchain',
    languages: 'Go',
    color: '#00ADD8',
    technologies: ['Crypto', 'P2P', 'WebSockets'],
  },
  {
    title: 'Endava Workspaces App',
    description:
      'This is a workspace reservation web application for company Endava. ' +
      'Where you can dynamically choose your workspace or reserve it for a few days in advance. ',
    url: 'https://github.com/perkzen/reservation-system-endava',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: ['React', 'Redux', 'Tailwindcss', 'NestJS', 'MongoDB'],
  },
  {
    title: 'CompanyHub',
    description:
      'This project aims to develop a web application tailored for IT companies ' +
      'and beyond, providing an intuitive and efficient solution for task management and execution within the organization.' +
      ' The application offers a range of' +
      ' features that enhance project coordination and facilitate efficient task handling. ',
    url: 'https://github.com/techbuilddotgg/company-hub',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: [
      'NextJS',
      'PlanetScale',
      'Tailwindcss',
      'Clerk',
      'tRPC',
      'OpenAI',
    ],
  },
];
