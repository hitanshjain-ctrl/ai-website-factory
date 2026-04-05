"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.transform = "translateY(0)";
      titleRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1
        ref={titleRef}
        style={{ transform: "translateY(-100px)", opacity: 0, transition: "all 1s" }}
        className="text-5xl font-bold mb-4"
      >
        Premium Website
      </h1>

      <p className="text-lg text-gray-400">
        Built with Next.js + AI 🚀
      </p>

      <button className="mt-6 px-6 py-3 bg-white text-black rounded-full">
        Get Started
      </button>
    </main>
  );
}