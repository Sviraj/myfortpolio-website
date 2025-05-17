"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
         I decided to pursue my
        passion for programming. In University, I learned coding and learned{" "}
        <span className="font-medium">full-stack web development  specializing in .NET and 
          React & Angular, as well as mobile application development using Flutter. 
          With hands-on experience in developing web applications, APIs, and mobile 
          solutions, I thrive on solving complex problems and building scalable, 
          efficient software systems</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React/Angular, .NET, C#, MUi, and MsSQL
        </span>
        . I am also familiar with C#, JavaScript, TypeScript, Java, Flutter & Dart . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        Engineer.
      </p>

      <p>
        <span className="italic">I aim to create impactful software solutions </span>that drive innovation 
        and efficiency. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Azure as Cloud Computing</span>.
      </p>
    </motion.section>
  );
}
