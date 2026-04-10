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
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.4]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // TEXT reveal
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // PARALLAX card
  const cardScale = useTransform(scrollYProgress, [0.5, 1], [0.7, 1.2]);
  const cardRotate = useTransform(scrollYProgress, [0.5, 1], [0, 20]);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-black text-white overflow-x-hidden relative scroll-smooth"
    >
      {/* 🔥 MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20 z-0"
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />

      {/* 🎬 HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative z-10">

        <motion.h1
          style={{ scale: heroScale, opacity: heroOpacity }}
          animate={{
            x: mouse.x * 0.015,
            y: mouse.y * 0.015,
          }}
          className="text-5xl md:text-7xl font-bold"
        >
          AI Website Factory
        </motion.h1>

        <motion.p
          style={{ opacity: heroOpacity }}
          className="mt-4 text-gray-400 text-lg max-w-xl"
        >
          Build cinematic websites like Apple launches 🚀
        </motion.p>

        {/* Magnetic Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full shadow-lg"
        >
          Start Building
        </motion.button>

        <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl" />
      </section>

      {/* 🎥 SCROLL STORY (REEL STYLE) */}
      <section className="h-[200vh] flex items-center justify-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-5xl font-bold mb-4">
            Scroll Storytelling 🎬
          </h2>
          <p className="text-gray-400 text-lg">
            Every scroll feels like an Instagram reel.
          </p>
        </motion.div>
      </section>

      {/* 🍎 APPLE-STYLE PRODUCT FOCUS */}
      <section className="h-[200vh] flex items-center justify-center relative">

        <motion.div
          style={{
            scale: cardScale,
            rotate: cardRotate,
          }}
          className="w-72 h-72 bg-gradient-to-br from-white to-gray-300 rounded-3xl shadow-2xl"
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

      {/* 🚀 FINAL CTA */}
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

          <motion.button
            whileHover={{ scale: 1.15 }}
            className="px-10 py-4 bg-white text-black rounded-full"
          >
            Create Website
          </motion.button>
        </motion.div>
      </section>

    </main>
  );
}
