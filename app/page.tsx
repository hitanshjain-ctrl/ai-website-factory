"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  // HERO animation
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // SECTION text animation
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-black text-white overflow-x-hidden relative scroll-smooth"
    >

      {/* 🔥 MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative">

        <motion.h1
          style={{ scale: heroScale, opacity: heroOpacity }}
          animate={{
            x: mouse.x * 0.02,
            y: mouse.y * 0.02,
          }}
          className="text-5xl md:text-7xl font-bold"
        >
          AI Website Factory
        </motion.h1>

        <motion.p
          style={{ opacity: heroOpacity }}
          className="mt-4 text-gray-400 text-lg"
        >
          Build premium websites in minutes 🚀
        </motion.p>

        {/* 🔥 MAGNETIC BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full"
        >
          Start Building
        </motion.button>

        {/* Glow background */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl" />
      </section>

      {/* STORY SECTION */}
      <section className="h-[150vh] flex items-center justify-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-5xl font-bold mb-4">
            Cinematic Experience
          </h2>
          <p className="text-gray-400">
            Smooth animations that feel like a product launch video.
          </p>
        </motion.div>
      </section>

      {/* PARALLAX SECTION */}
      <section className="h-[150vh] flex items-center justify-center relative">

        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.6, 1], [0.8, 1.2]),
            rotate: useTransform(scrollYProgress, [0.6, 1], [0, 15]),
          }}
          className="w-64 h-64 bg-white rounded-3xl"
        />

        <motion.h2
          style={{
            opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
          }}
          className="absolute bottom-20 text-3xl"
        >
          Interactive UI ⚡
        </motion.h2>

      </section>

      {/* FINAL CTA */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Launch?
          </h2>

          <button className="px-8 py-3 bg-white text-black rounded-full">
            Start Building
          </button>
        </motion.div>
      </section>

    </main>
  );
}
