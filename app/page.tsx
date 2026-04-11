"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [projects, setProjects] = useState<string[]>([]);

  // 🔥 SMOOTH SCROLL (APPLE FEEL)
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e: any) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  // 🎬 HERO ANIMATION
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // 🎥 TEXT STORY
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [150, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // 🍎 PRODUCT PARALLAX
  const cardScale = useTransform(scrollYProgress, [0.5, 1], [0.6, 1.2]);
  const cardRotate = useTransform(scrollYProgress, [0.5, 1], [0, 25]);

  const generateWebsite = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setHtml(data.html);
  };

  const saveProject = () => {
    setProjects([...projects, html]);
  };

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-black text-white overflow-x-hidden"
    >

      {/* 🔥 MOUSE GLOW */}
      <motion.div
        className="fixed w-[500px] h-[500px] bg-purple-500 blur-3xl opacity-20 pointer-events-none z-0"
        animate={{
          x: mouse.x - 250,
          y: mouse.y - 250,
        }}
      />

      {/* 🔐 AUTH */}
      <SignedOut>
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-6">Login Required 🔐</h1>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>

        {/* 🎬 HERO (APPLE STYLE) */}
        <section className="h-screen flex flex-col items-center justify-center text-center sticky top-0 z-10">

          <motion.h1
            style={{ scale: heroScale, opacity: heroOpacity }}
            animate={{
              x: mouse.x * 0.01,
              y: mouse.y * 0.01,
            }}
            className="text-6xl md:text-8xl font-bold"
          >
            AI Website Factory
          </motion.h1>

          <motion.p
            style={{ opacity: heroOpacity }}
            className="mt-6 text-gray-400 text-lg max-w-xl"
          >
            Apple-level UI. Instagram storytelling. Built by AI 🚀
          </motion.p>

        </section>

        {/* 🎥 SCROLL STORY (REEL FEEL) */}
        <section className="h-[200vh] flex items-center justify-center relative">

          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-4">
              Cinematic Scroll 🎬
            </h2>

            <p className="text-gray-400 text-lg">
              Every scroll feels like a product launch video.
            </p>
          </motion.div>

        </section>

        {/* 🍎 PRODUCT SHOWCASE */}
        <section className="h-[200vh] flex items-center justify-center relative">

          <motion.div
            style={{
              scale: cardScale,
              rotate: cardRotate,
            }}
            className="w-80 h-80 bg-gradient-to-br from-white to-gray-300 rounded-3xl shadow-2xl"
          />

          <motion.h2
            style={{
              opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
            }}
            className="absolute bottom-20 text-4xl font-bold"
          >
            Premium Interaction ⚡
          </motion.h2>

        </section>

        {/* 🤖 AI GENERATOR */}
        <section className="h-screen flex flex-col items-center justify-center gap-4">

          <h2 className="text-4xl font-bold">Generate Website</h2>

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your website..."
            className="p-3 text-black rounded w-80"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={generateWebsite}
            className="px-6 py-3 bg-white text-black rounded"
          >
            Generate
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={saveProject}
            className="px-6 py-3 bg-purple-600 rounded"
          >
            Save Project
          </motion.button>

        </section>

        {/* 📺 LIVE PREVIEW */}
        {html && (
          <section className="h-screen">
            <iframe srcDoc={html} className="w-full h-full border-none" />
          </section>
        )}

        {/* 💾 SAVED PROJECTS */}
        <section className="min-h-screen p-10">

          <h2 className="text-3xl mb-6">Saved Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <iframe key={i} srcDoc={p} className="h-64 border" />
            ))}
          </div>

        </section>

      </SignedIn>

    </main>
  );
}
