import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative bg-[#0B1120] text-gray-200 py-20 md:py-45 overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#0B1120] to-black opacity-90"></div>

      
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-10 w-80 h-80 bg-blue-700/30 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
       
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide"
        >
          Discover Your Next Favorite Book
        </motion.h1>

     
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-10"
        >
          Dive into a world of stories, knowledge, and imagination. Organize,
          explore, and share your favorite books with ease.
        </motion.p>

  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <Link
            to="/all-books"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-blue-500/30 transition-all duration-300"
          >
         All Books
          </Link>
          <Link
            to="/add-book"
            className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Create Book
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
