"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/MyProfilePicture.png"
              alt="Akshay's profile picture"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-35 w-35 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.4,
              delay: 0.1,
              stiffness: 125,
            }}
            className="absolute bottom-0.5 right-2 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-normal !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Akshay.</span> A Software
        engineer who enjoys{" "}
        <span className="underline">building solutions </span>
        that make{" "}
        <span className="font-bold italic">technology accessible</span> and
        efficient for everyone.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-2 items-center justify-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-200 cursor-pointer"
          href="/Resume.pdf"
          download={true}
        >
          Download Resume{" "}
          <HiDownload className="opacity-70 group-active:translate-y-1 transition-all duration-200" />
        </a>

        <Link
          href="#contact"
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:bg-gray-100 active:scale-105 transition-all duration-200"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 group-active:translate-x-5 transition-all duration-200" />
        </Link>

        <a className="bg-white text-sky-800 text-[1.5rem] p-4 flex items-center gap-2 rounded-full">
          <FaLinkedin />
        </a>

        <a className="bg-white text-slate-800 text-[1.5rem] p-4 flex items-center gap-2 rounded-full">
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
