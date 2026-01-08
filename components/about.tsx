import React from "react";

export default function About() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <h1 className="text-3xl font-medium capitalize mb-8">About me</h1>
      <p className="mb-3">
        I’m Akshay Sharma, an <span className="font-medium">Engineer</span> who
        loves turning ideas into real, usable products. Over the years I’ve been
        building projects that sharpen my skills in{" "}
        <span className="font-medium">
          modern software development — JavaScript, Node.js, TypeScript, React,
          Next.js, CSS and others
        </span>
        . <span className="italic">My favorite part of this industry</span> is
        solving problems in a simple, thoughtful way and seeing others actually
        use what I build. I care a lot about clean, readable code and intuitive
        user experiences, and I’m always exploring new tools and patterns to
        improve as an engineer.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, you’ll probably
        find me creating something in a different medium —{" "}
        <span className="font-medium">
          filming and editing videos, taking photos, or experimenting with
          visual storytelling
        </span>
        . I’m also a <span className="font-medium">science enthusiast</span> who
        loves learning about the universe and how things work. Above all, I see
        myself as a <span className="font-medium">lifelong learner</span> —
        always curious, always experimenting, and always looking for the next
        challenge to grow from.
      </p>
    </section>
  );
}
