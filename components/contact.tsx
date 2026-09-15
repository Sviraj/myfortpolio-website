"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import CopyButton from "./copy-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const email = "sachinviraj1998@gmail.com";
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 leading-8 dark:text-white/80">
        Please contact me directly at{" "}
        <span className="whitespace-nowrap">
          <a
            className="font-medium underline underline-offset-4 hover:text-gray-950 dark:hover:text-white"
            href={`mailto:${email}`}
          >
            {email}
          </a>{" "}
          <CopyButton textToCopy={email} />
        </span>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-none focus:border-gray-900/40 focus:ring-4 focus:ring-gray-900/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:focus:ring-white/20 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-none resize-y focus:border-gray-900/40 focus:ring-4 focus:ring-gray-900/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:focus:ring-white/20 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
