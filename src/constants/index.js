import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  freelancer,
  mckinseyForwardProgram,
  molhemon,
  odinProject,
  udacity,
  sprints,
  memoryG,
  toDoList,
  battelShip,
  cVApp,
  threejs,
  vite512,
  StyledComponents,
  Sass,
  reactRouter,
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
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-end Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Video Editor',
    icon: backend,
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
    name: 'git',
    icon: git,
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
    name: 'React Router',
    icon: reactRouter,
  },
  {
    name: 'Vite',
    icon: vite512,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Styled Components',
    icon: StyledComponents,
  },
  {
    name: 'Sass',
    icon: Sass,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },

  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
];

const experiences = [
  {
    title: 'Freelance Video Editor',
    company_name: 'Self-Employed',
    icon: freelancer,
    iconBg: '#383E56',
    date: 'Aug 2019 - present',
    points: [
      'Taking a whole project from A to Z.',
      'Discussing with different clients their preferences for every project and delivering a suitable outcome',
      'Manipulate and edit RAW pieces in a way that is invisible to the audience.',
      'Input music, dialogues, graphics, and effects.',
      ' Create rough and final cuts and Color correction skills.',
      'Work closely with a team to get the best outcome',
    ],
  },
  {
    title: 'Video Editor',
    company_name: 'Molhemon Creative agency',
    icon: molhemon,
    iconBg: '#E6DEDD',
    date: 'JULY 2023 - OCT 2024',
    points: [
      'Taking a whole project from A to Z.',
      'Discussing with different clients their preferences for every project and delivering a suitable outcome',
      'Manipulate and edit RAW pieces in a way that is invisible to the audience.',
      'Input music, dialogues, graphics, and effects.',
      ' Create rough and final cuts and Color correction skills.',
      'Work closely with a team to get the best outcome',
    ],
  },
];

const courses = [
  {
    title: 'Front-end Web Developer Graduate',
    company_name: 'The Odin Project',
    icon: odinProject,
    iconBg: '#383E56',
    date: 'Mar 2023 – Mar 2024 ',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Graduate',
    company_name: 'Mckinsey Forward Program',
    icon: mckinseyForwardProgram,
    iconBg: '#383E56',
    date: 'June 2023 - Nov 2023 ',
    points: [
      `Forward, offered by McKinsey, is a six-month online learning journey that equips young talent with must-have practical skills to help them succeed in the future of work.`,
    ],
  },
  {
    title: 'Front-end Web Developer Graduate',
    company_name: 'Sprints',
    icon: sprints,
    iconBg: '#E6DEDD',
    date: 'May 2022 – Jul 2022 ',
    points: [
      'Developing and maintaining 1 big web application(E-commerce) using React and related technologies.',
      'Collaborating with cross-functional teams and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Front-end Web Developer Graduate',
    company_name: 'Udacity',
    icon: udacity,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 – Mar 2022 ',
    points: [
      'Developing and maintaining web applications using javascript and related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Martin Mystry',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Petof Cidnra',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Chris Brown',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const projects = [
  {
    name: 'Memory-Card Game',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: memoryG,
    source_code_link:
      'https://github.com/Wespro/-Project-Memory-Card-Tod?tab=readme-ov-file',
    deploy_code_link: 'https://voidmemorygame.netlify.app/',
  },
  {
    name: 'To-do-List App',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: toDoList,

    source_code_link: 'https://github.com/Wespro/Project-Todo-List-TOP',
    deploy_code_link: 'https://wespro.github.io/Project-Todo-List-TOP/',
  },
  {
    name: 'Battleship Game',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: battelShip,

    source_code_link: 'https://github.com/Wespro/Project-Battleship-TOD',
    deploy_code_link: 'https://wespro.github.io/Project-Battleship-TOD/',
  },
  {
    name: 'C.V App',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: cVApp,
    source_code_link:
      'https://github.com/Wespro/Project-CV-Application-TOD-React.js',
    deploy_code_link: 'https://void-cv-application.netlify.app/',
  },
  //
];

export { services, technologies, experiences, courses, testimonials, projects };
