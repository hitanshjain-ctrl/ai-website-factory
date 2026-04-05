"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 ref={titleRef} className="text-5xl font-bold mb-4">
        Premium Website
      </h1>

      <p ref={subtitleRef} className="text-lg text-gray-400">
        Built with Next.js + AI 🚀
      </p>

      <button ref={buttonRef} className="mt-6 px-6 py-3 bg-white text-black rounded-full">
        Get Started
      </button>
    </main>
  );
}