import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/intelligent.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/iot.jpg";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Software Engineer",
    location: "Agrithmics (Pvt) Ltd.",
    description:
      "I worked project that ERP System. In here done Module Implementation,Bulk Handling and real-time transaction handling. Related technologies React, .net, MsSql, RabbitMQ, Reddis, Azure ",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec- 2023 June",
  },
  {
    title: "Front-End Developer",
    location: "Part Time",
    description:
      "I worked as a front-end developer in part time. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelancer Developer",
    location: "Full Time",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, .NET, TypeScript, Tailwind, MSSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Intelligent Candidate Ranking System",
    description:
      "Level-4 Research Project. Natural Language Processing based apporoach for Candidate Ranking base on machine learning and data science techniques.",
    tags: ["Python", "ML", "NLP", "Data Science"],
    imageUrl: corpcommentImg,
  },
  {
    title: "LearnX",
    description:
      "LMS designed to effortlessly manage all key aspects of online education. From user-friendly course creation and interactive content delivery to seamless learner assessment and progress tracking.",
    tags: ["React(TS)", "Tailwind", ".NET", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "IoT Project",
    description:
      "Mini IoT project that able to send sensor reading from Aruino Nano to ESP32 throught wireless communication and update real-time database.",
    tags: ["Arduino", "ESP32", "FireBase", "NRf Module", "Wireless communication"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MsSql",
  "MongoDB",
  "Redux",
  "MySQL",
  ".NET",
  "Express",
  "SpringBoot",
  "Python",
  "Git",
] as const;
