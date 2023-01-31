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
      'React',
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
    title: 'Discord Crypto Bot',
    description:
      'I made this bot, so I could get stats about a specific cryptocurrency fast without needing to search the web. ' +
      'When I write the command to fetch data about the specific cryptocurrency that I want, ' +
      'the Bot scrapes a crypto exchange a retrieves the latest data about the coin.',
    url: '',
    color: '#3572A5',
    languages: 'Python',
    technologies: ['Python', 'Discord'],
  },
  {
    title: 'Finazo',
    description:
      'Finazo is a web application that I build to manage my finances and also to visualize my income and expenses. ',
    url: 'https://github.com/perkzen/finazo',
    languages: 'Typescript',
    color: '#3178C6',
    technologies: ['NextJS', 'PlanetScale', 'Tailwindcss'],
  },
];
