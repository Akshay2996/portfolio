import React from "react";
import { BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  return (
    <button className="fixed bottom-5 right-5 bg-gray-100 cursor-pointer w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-300 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
      <BsSun />
    </button>
  );
}
