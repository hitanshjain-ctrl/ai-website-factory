"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from(".title", {
      y: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".btn", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="title text-5xl font-bold mb-4">
        Premium Website
      </h1>

      <p className="subtitle text-lg text-gray-400">
        Built with Next.js + AI 🚀
      </p>

      <button className="btn mt-6 px-6 py-3 bg-white text-black rounded-full">
        Get Started
      </button>
    </main>
  );
}