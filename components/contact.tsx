import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact" className="mb-28 scroll-mt-30 sm:mb-40" ref={ref}>
      <SectionHeading>Contact me</SectionHeading>
    </section>
  );
}
