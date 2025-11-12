import React from "react";
import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <section className="relative bg-[#0B1120] text-white py-32 px-6 overflow-hidden">
      {/* Background gradient or image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-[#0B1120] to-blue-800 opacity-70 -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Welcome to The Book Haven
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl mb-10"
        >
          Discover, share, and manage your favorite books. Explore top genres, trending books, and more with our modern digital library.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-8 rounded-lg shadow-lg">
            All Books
          </button>
          <button className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white transition text-blue-400 font-semibold py-3 px-8 rounded-lg shadow-lg">
            Add Book
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
