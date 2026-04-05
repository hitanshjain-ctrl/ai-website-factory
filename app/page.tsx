"use client";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
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