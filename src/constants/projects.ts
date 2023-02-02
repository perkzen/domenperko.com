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
    title: 'Chat App',
    description:
      'This is a basic messenger web chat application. ' +
      'Where you can send private messages to online users. ' +
      'For this application is used sockets for sending messages, ' +
      'express for backend server with mongodb for saving data and ' +
      'on the frontend I used React with Next.js for search engine optimization.',
    url: 'https://github.com/perkzen/messenger',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: [
      'Tailwindcss',
      'NextJS',
      'Redux',
      'Express',
      'MongoDB',
      'Socket.io',
    ],
  },
  {
    title: 'Computer Shop',
    description:
      'This is an online store where you can buy computers and computer parts. ' +
      'Admin can add and remove products from the shop. This shop has also many features few of them are filtering items and adding them to the shopping cart. ' +
      'When you go to the shopping cart and click on checkout all purchases will be saved in a table that can be accessed by the admin.',
    url: 'https://github.com/perkzen/computer_store',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: ['React', 'Redux', 'Tailwindcss'],
  },
  {
    title: 'Reservation app',
    description:
      'This is a workspace reservation web application for company Endava. ' +
      'Where you can dynamically choose your workspace or reserve it for a few days in advance. ',
    url: 'https://github.com/perkzen/reservation-system-endava',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: ['React', 'Redux', 'Tailwindcss', 'NestJS', 'MongoDB'],
  },
  {
    title: 'Finazo',
    description:
      'Finazo is a web application where you can manage your finances. Finanzo also visualizes your income and expenses in graphs. ',
    url: 'https://github.com/perkzen/finazo',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: ['NextJS', 'PlanetScale', 'Tailwindcss', 'NextAuth', 'tRPC'],
  },
];
