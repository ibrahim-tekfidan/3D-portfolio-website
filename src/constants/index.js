import {
  web,
  problemSolving,
  teamCollaboration,
  havelsan,
  cbiko,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  game,
  fitness,
  festival,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Problem Solving',
    icon: problemSolving,
  },
  {
    title: 'Team Collaboration',
    icon: teamCollaboration,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'HAVELSAN Intern',
    icon: havelsan,
    iconBg: '#383E56',
    date: 'August 2023 - September 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'T.C. Human Resource Offic Intern',
    icon: cbiko,
    iconBg: '#E6DEDD',
    date: 'June 2023 - July 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const projects = [
  {
    name: 'Game Expolorer',
    description: '',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chakra UI',
        color: 'green-text-gradient',
      },
      {
        name: 'React Query',
        color: 'pink-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'pink-text-gradient',
      },
    ],
    image: game,
    source_code_link: 'https://github.com/ibrahim-tekfidan/game-explorer',
  },

  {
    name: 'Fitness Club Center',
    description: '',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chakra UI',
        color: 'green-text-gradient',
      },
      {
        name: 'React Query',
        color: 'pink-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'pink-text-gradient',
      },
    ],
    image: fitness,
    source_code_link: 'https://github.com/ibrahim-tekfidan/fitness-club-center',
  },

  {
    name: 'Festival Journey',
    description: '',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sass',
        color: 'green-text-gradient',
      },
    ],
    image: festival,
    source_code_link: 'https://github.com/ibrahim-tekfidan/festival-journey',
  },
];

export { services, technologies, experiences, projects };
