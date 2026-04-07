<main className="bg-black text-white">

  {/* HERO */}
  <section className="h-screen flex flex-col items-center justify-center text-center px-4">
    <motion.h1
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-bold mb-4"
    >
      Premium Website
    </motion.h1>

    <motion.p
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="text-lg text-gray-400 max-w-xl"
    >
      Built with Next.js + AI 🚀  
      Experience smooth animations and modern UI.
    </motion.p>

    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ delay: 0.8 }}
      className="mt-8 px-8 py-3 bg-white text-black rounded-full"
    >
      Get Started
    </motion.button>
  </section>

  {/* SECTION 2 */}
  <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900">
    <h2 className="text-4xl font-bold">Scroll Section 1 🚀</h2>
  </section>

  {/* SECTION 3 */}
  <section className="h-screen flex items-center justify-center bg-black">
    <h2 className="text-4xl font-bold">Scroll Section 2 ⚡</h2>
  </section>

</main>