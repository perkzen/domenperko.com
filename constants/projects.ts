// messenger app, discord crypto bot, web scraper, computer shop

export interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
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
    technologies: ['React', 'Redux', 'Tailwindcss'],
  },
  {
    title: 'Discord Crypto Bot',
    description:
      'I made this bot, so I could get stats about a specific cryptocurrency fast without needing to search the web. ' +
      'When I write the command to fetch data about the specific cryptocurrency that I want, ' +
      'the Bot scrapes a crypto exchange a retrieves the latest data about the coin.',
    url: '',
    technologies: ['Python', 'Discord'],
  },
  {
    title: 'Student Work Web Scraper',
    description:
      'Python web scraping bot for the job portal "Študentski Servis". ' +
      'The bot will scrape all jobs on the site depending on the search parameters you give him.' +
      ' The end results will be displayed in an excel spreadsheet.',
    url: 'https://github.com/perkzen/Studentski_servis_webscraper',
    technologies: ['Python'],
  },
];
