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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Sales and Recruiting",
    company_name: "LegalHead GmbH",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan. 2023 - Aug. 2023, Düsseldorf",
    points: [
      "Conducted client acquisition, talent recruitment, and maintained strong business relationships.",
    ],
  },
  {
    title: "Customer Service & CAP Department",
    company_name: "Amazon",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr. 2021 - Apr. 2022, Berlin",
    points: [
      "Managed payment processing and conducted professional customer interactions to resolve financial and others inquiries efficiently.",
    ],
  },
  {
    title: "Aviation Handling Services | Airport",
    company_name: "AHS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep. 2018 - Mar. 2019, Düsseldorf",
    points: [
      "Managed lost and found, firearm transport to tax counters, and supported ground operations.",
    ],
  },
  {
    title: "Analog & Digital Photography Assistant",
    company_name: "Studio Eikelpoth",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct. 2017 - Dec. 2017, Düsseldorf",
    points: [
      "Supported photography production and assisted with creative projects in the studio.",
    ],
  },
  {
    title: "Frontend, Web Development",
    company_name: "SuperCode",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024-2025, Düsseldorf",
    points: [
      "HTML, CSS, JS, TS, React Native, Supabase.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Heinrich Heine University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2022-2024, Düsseldorf",
    points: [
      "Digital Innovations, Basics of Coding, Computerarchitecture.",
    ],
  },
  {
    title: "Photography and Design",
    company_name: "design akademie berlin | SRH Hochschule",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2019-2021, Berlin",
    points: [
      "Different styles of Photography; Portrait, Product etc., Design Rules, Typography, Software; Adobe, Cinema4D",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
        name: "mongodb",
        color: "green-text-gradient",
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
