"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory"
    >

      {/* 🔥 MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
      />

      {/* 🎬 SECTION 1 (HERO) */}
      <section className="h-screen snap-start flex flex-col items-center justify-center text-center relative">

        <motion.h1
          animate={{
            x: mouse.x * 0.02,
            y: mouse.y * 0.02,
          }}
          className="text-6xl font-bold"
        >
          AI Website Factory
        </motion.h1>

        <p className="text-gray-400 mt-4">
          Scroll to experience the future 🚀
        </p>

      </section>

      {/* 🎥 SECTION 2 (REEL STYLE TEXT) */}
      <section className="h-screen snap-start flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Cinematic Storytelling 🎬
          </h2>
          <p className="text-gray-400">
            Every scroll reveals a new story.
          </p>
        </motion.div>

      </section>

      {/* 🍎 SECTION 3 (APPLE STYLE PRODUCT FOCUS) */}
      <section className="h-screen snap-start flex items-center justify-center relative">

        <motion.div
          initial={{ scale: 0.7, rotate: 0 }}
          whileInView={{ scale: 1.2, rotate: 15 }}
          transition={{ duration: 1 }}
          className="w-72 h-72 bg-white rounded-3xl shadow-2xl"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-20 text-4xl font-bold"
        >
          Apple-level Interaction 🍎
        </motion.h2>

      </section>

      {/* 🎯 SECTION 4 (CTA) */}
      <section className="h-screen snap-start flex items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build?
          </h2>

          <motion.button
            whileHover={{ scale: 1.2 }}
            className="px-10 py-4 bg-white text-black rounded-full"
          >
            Start Now
          </motion.button>
        </motion.div>

      </section>

    </main>
  );
}
