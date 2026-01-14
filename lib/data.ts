import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import javaScript30 from "@/public/JavaScript30.png";
import javaScriptEffects from "@/public/JavaScriptEffects.png";
import sabkaBazaar from "@/public/SabkaBazaar.png";
import twindle from "@/public/Twindle.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Twindle",
    description:
      "An open‑source CLI and reading experience that converts Twitter threads into readable formats like PDF, EPUB, and MOBI, for enhanced accessibility and offline reading.",
    tags: ["Node.js", "Svelte", "HTML-to-PDF", "Open Source"],
    imageUrl: twindle,
    url: "https://github.com/twindle-co/twindle",
  },
  {
    title: "Sabka Bazaar",
    description:
      "An e‑commerce web app for daily groceries featuring atomic design components, global state, responsive cart experience, and an accessible, touch‑friendly and mobile compatible UI.",
    tags: ["React", "Sass", "Webpack", "React Router", "Jest", "RTL"],
    imageUrl: sabkaBazaar,
    url: "https://sabkabazaar-shopping.netlify.app/",
  },
  {
    title: "JavaScript30",
    description:
      "Collection of 30 small, focused projects built with vanilla JavaScript (ES6) to deepen core JS, DOM, and browser API concepts without relying on frameworks or libraries.",
    tags: ["JavaScript", "ES6", "HTML5", "DOM", "Browser API", "CSS"],
    imageUrl: javaScript30,
    url: "https://akshay2996.github.io/JavaScript-30/",
  },
  {
    title: "JavaScriptEffects",
    description:
      "Collection of interactive UI effects built with vanilla JavaScript, HTML5, and CSS3 - from counters, smooth scrolling, and theme toggles to particle animations, parallax landing pages, and lazy‑loaded image galleries.",
    tags: ["JavaScript", "Svelte", "CSS3", "UI Effects", "Animations"],
    imageUrl: javaScriptEffects,
    url: "https://akshay2996.github.io/JavaScript-Effects/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Docker",
  "Node.js",
  "GraphQL",
  "Git",
  "Tailwind",
  "Framer Motion",
  "PostgreSQL",
  "RTL",
  "Webpack",
  "Cypress",
  "Accessibility",
  "Kafka",
  "Jest",
  "Mocha",
  "TypeORM",
  "GitLab CI/CD",
  "AWS",
  "Performance optimization",
  "Security",
  "AI-assisted development",
] as const;
