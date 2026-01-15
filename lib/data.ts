import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiPluralsight } from "react-icons/si";
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
    title: "Programmer Analyst",
    location: "Bengaluru, India",
    description:
      "At Cognizant, I strengthened my full‑stack foundations by building and delivering enterprise applications - working primarily as a front‑end React/JavaScript developer focused on UI/UX, while also implementing Dialogflow (GCP) chat solutions and a full‑stack Mentor‑On‑Demand project using Angular, Spring Boot, REST APIs, Hibernate, and MySQL",
    icon: React.createElement(CgWorkAlt),
    date: "July 2019 - April 2021",
  },
  {
    title: "Associate Technology L1",
    location: "Bengaluru, India",
    description:
      "At Publicis Sapient, I worked as a React developer in the retail banking domain, upgrading frontend capabilities with Apollo and modern testing/accessibility practices to improve performance, accessibility, and overall user experience for banking customers.",
    icon: React.createElement(FaReact),
    date: "April 2021 - September 2022",
  },
  {
    title: "Software Engineer 3",
    location: "Bengaluru, India",
    description:
      "At Pluralsight, I led major initiatives across content ingestion, assessments, security remediation, user ID migration, and platform architecture - improving reliability and incident response, eliminating critical vulnerabilities, modernizing monorepo-based systems, and championing engineering standards, tooling, mentoring, and cross‑team collaboration.",
    icon: React.createElement(SiPluralsight),
    date: "September 2022 - Present",
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
