import {
  SiNestjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiFramer,
  SiGo,
  SiFirebase,
  SiPostgresql,
  SiSolidity,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import React, { ReactNode } from 'react';

interface ITechnology {
  icon: ReactNode;
  url: string;
  name: string;
}

export const technologies: ITechnology[] = [
  {
    icon: <SiTypescript />,
    url: 'https://www.typescriptlang.org/',
    name: 'Typescript',
  },
  { icon: <SiPython />, url: 'https://www.python.org/', name: 'Python' },
  { icon: <SiNodedotjs />, url: 'https://nodejs.org/en/', name: 'Node.js' },
  {
    icon: <SiTailwindcss />,
    url: 'https://tailwindcss.com/',
    name: 'Tailwindcss',
  },
  { icon: <SiNestjs />, url: 'https://nestjs.com/', name: 'NestJS' },
  { icon: <SiExpress />, url: 'https://www.express.com/', name: 'Express' },
  { icon: <SiMongodb />, url: 'https://www.mongodb.com/', name: 'MongoDB' },
  { icon: <SiSocketdotio />, url: 'https://socket.io/', name: 'Socket.io' },
  { icon: <SiMysql />, url: 'https://www.mysql.com/', name: 'MySQL' },
  { icon: <SiReact />, url: 'https://reactjs.org/', name: 'React' },
  { icon: <SiNextdotjs />, url: 'https://nextjs.org/', name: 'Next.js' },
  { icon: <SiRedux />, url: 'https://redux.js.org/', name: 'Redux' },
  { icon: <SiSass />, url: 'https://sass-lang.com/', name: 'Sass' },
  {
    icon: <SiFramer />,
    url: 'https://www.framer.com/motion/',
    name: 'Framer-Motion',
  },
  { icon: <SiGo />, url: 'https://go.dev/', name: 'Go' },
  {
    icon: <SiFirebase />,
    url: 'https://firebase.google.com/',
    name: 'Firebase',
  },
  {
    icon: <SiPostgresql />,
    url: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
  },
  {
    icon: <SiSolidity />,
    url: 'https://docs.soliditylang.org/',
    name: 'Solidity',
  },
  { icon: <SiGit />, url: 'https://git-scm.com/', name: 'Git' },
  { icon: <SiDocker />, url: 'https://www.docker.com/', name: 'Docker' },
];
