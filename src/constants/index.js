import {
  web,
  problemSolving,
  teamCollaboration,
  havelsan,
  cbiko,
  freelance,
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
    title: 'Full Stack Web Developer Intern',
    company_name: 'T.C. Human Resource Office Intern',
    icon: cbiko,
    iconBg: '#E6DEDD/Users/ibrahimtekfidan/Downloads/freelance.svg',
    date: 'June 2023 - July 2023',
    points: [
      'Developing and maintaining project tracking web applications using React.js and Express.js technologies.',
      'I integrated secure authentication functionality into my project. I utilized a JWT (JSON Web Token) based authentication mechanism to ensure users can securely log in and access authorized features.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'React.js Developer Intern',
    company_name: 'HAVELSAN Intern',
    icon: havelsan,
    iconBg: '#E6DEDD',
    date: 'August 2023 - September 2023',
    points: [
      'Developing and maintaining AI based web applications using React.js and other related technologies.',
      'The project was developed utilizing AI APIs from OPENAI and D-ID.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Freelancer',
    icon: freelance,
    iconBg: '#E6DEDD',
    date: 'October 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',

      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
];

const projects = [
  {
    name: 'Game Expolorer',
    description:
      'Game Explorer is a web application developed for users who want to explore the gaming world and gather information about games.',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactquery',
        color: 'pink-text-gradient',
      },
      {
        name: 'zustand',
        color: 'green-text-gradient',
      },
    ],
    image: game,
    source_code_link: 'https://github.com/ibrahim-tekfidan/game-explorer',
    live_link: 'https://game-explorer-steel.vercel.app/',
  },

  {
    name: 'Fitness Club Center',
    description:
      'Fitness Club Center is a web application developed for users who want to explore the exercise. Provided instructions for each exercise and linked tutorial YouTube videos. Included a section at the bottom suggesting similar exercises based on selected previous exercise.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactquery',
        color: 'pink-text-gradient',
      },
      {
        name: 'zustand',
        color: 'green-text-gradient',
      },
    ],
    image: fitness,
    source_code_link: 'https://github.com/ibrahim-tekfidan/fitness-club-center',
    live_link: 'https://fitness-club-center.vercel.app/',
  },

  {
    name: 'Festival Journey',
    description:
      'This project was developed using Scss and HTML5. While developing this project, advance css properties were used.',
    tags: [
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
    ],
    image: festival,
    source_code_link: 'https://github.com/ibrahim-tekfidan/festival-journey',
    live_link: 'https://festival-journey.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
