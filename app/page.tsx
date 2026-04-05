"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Title */}
      <motion.h1
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
      >
        Premium Website
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg text-gray-400 text-center max-w-xl"
      >
        Built with Next.js + AI 🚀  
        Experience smooth animations and modern UI.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
        className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium shadow-lg"
      >
        Get Started
      </motion.button>

      {/* Background Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl"
      />

    </main>
  );
}