import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/MyProfilePicture.png"
            alt="Akshay's profile picture"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-35 w-35 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="absolute bottom-1 right-1 text-4xl">👋</span>
        </div>
      </div>
    </section>
  );
}
