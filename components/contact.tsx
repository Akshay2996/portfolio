"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact" className="mb-28 scroll-mt-30 sm:mb-40" ref={ref}>
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:akshaysharmaay@gmail.com">
          akshaysharmaay@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </section>
  );
}
