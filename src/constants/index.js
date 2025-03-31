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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Portfolio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "Developing and maintaining web applications using Nodejs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Video Editor",
    company_name: "Vishal Kumar Sharma- Youtube Channel",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2024 - Jan 2024",
    points: [
      "Edited and enhanced video content to improve engagement and retention.",
      "Integrated advanced transitions, effects, and motion graphics for a polished look.",
      "Collaborated with content creators to align video aesthetics with branding and audience preferences.",
      " Managed video rendering, compression, and uploading to ensure optimal quality and performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Vasu Chaudhari",
    designation: "Web Developer",
    company: "NITP",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEHtjbMPoVojA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718259438061?e=1749081600&v=beta&t=Unqqj6Sq5TtGDrIdRk-t-NezgzlhJJCwQ0zx02WDCig",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success.",
    name: "Anshu Jha",
    designation: "DevOps Learner",
    company: "NITP",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEjCvgTaRXHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722789697549?e=1749081600&v=beta&t=nks2hKyUDk3kCJqMg0jwn0Waxztq4BupSqXeoIzgGOo",
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
