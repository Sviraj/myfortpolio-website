"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(0, 0, 0, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "0.75rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              dateClassName="!font-medium text-gray-600 dark:text-white/60"
              iconStyle={{
                background: theme === "light" ? "white" : "#1f2937",
                boxShadow:
                  theme === "light"
                    ? "0 0 0 4px #e5e7eb"
                    : "0 0 0 4px rgba(255, 255, 255, 0.2)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-lg font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 !text-sm !font-medium text-gray-500 dark:text-white/50">
                {item.location}
              </p>
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
