import { tesla, abcservices, hobit } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Hiring Manager",
    company_name: "ABC Services",
    icon: abcservices,
    iconBg: "#accbe1",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "HOBIT",
    icon: hobit,
    iconBg: "#fbc3bc",
    date: "April 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/priyanshii026/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/priyanshi-saxena-089010236/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Cologo - Online Logo Maker",
    description:
      "Developed a web application that help designers download a custom logo in seconds.",
    link: "https://cologo.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Evently - Event Manager Application",
    description:
      "Created a web application that helps users to manage their events and get notified about upcoming events.",
    link: "https://custom-event-manager.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Protomock - AI Interview Preparation Platform",
    description:
      "Developed a web application that helps users to prepare for their interviews using AI by giving mock interviews.",
    link: "https://protomock.vercel.app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Figma Clone - Design Tool",
    description:
      "Developed a web application that helps designers to create designs and prototypes for web applications",
    link: "https://figma-designer.vercel.app",
  },
];
