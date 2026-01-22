"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  });

  const [mounted, setMounted] = useState(false);

  // Mark component as mounted (refs are ready after this)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Position the active pill
  useEffect(() => {
    if (!mounted) return;

    const el = itemRefs.current[activeSection];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement!.getBoundingClientRect();

    // Adjust this for tighter/looser pill padding
    const PILL_PADDING = 1;

    setPillStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      height: rect.height - PILL_PADDING * 2,
      top: rect.top - parentRect.top + PILL_PADDING,
    });
  }, [activeSection, mounted]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950/70 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {mounted && (
            <motion.span
              className="bg-gray-200 rounded-full absolute -z-10 dark:bg-gray-800"
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
                height: pillStyle.height,
                top: pillStyle.top,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}

          {links.map((link) => (
            <motion.li
              ref={(el) => {
                itemRefs.current[link.name] = el;
              }}
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 dark:hover:text-gray-200 transition",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
