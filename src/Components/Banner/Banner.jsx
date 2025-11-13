import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ThemeContext } from "../../Provider/ThemeProvider"; 

const Banner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`relative py-20 md:py-45 overflow-hidden transition-colors ${
        theme === "light" ? "bg-white text-gray-900" : "bg-[#0B1120] text-gray-200"
      }`}
    >

      <div
        className={`absolute inset-0 opacity-90 transition-colors ${
          theme === "light"
            ? "bg-gradient-to-b from-blue-100 via-white to-gray-100"
            : "bg-gradient-to-b from-blue-900/20 via-[#0B1120] to-black"
        }`}
      ></div>

 
      <div
        className={`absolute -top-10 -left-10 w-60 h-60 rounded-full blur-3xl animate-pulse ${
          theme === "light" ? "bg-blue-200/40" : "bg-blue-500/20"
        }`}
      ></div>
      <div
        className={`absolute -bottom-16 -right-10 w-80 h-80 rounded-full blur-3xl animate-pulse delay-700 ${
          theme === "light" ? "bg-blue-300/30" : "bg-blue-700/30"
        }`}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-wide transition-colors ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Discover Your Next Favorite Book
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`max-w-2xl mx-auto text-sm md:text-base mb-10 transition-colors ${
            theme === "light" ? "text-gray-700" : "text-gray-400"
          }`}
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
            className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ${
              theme === "light"
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-300/30"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30"
            }`}
          >
            All Books
          </Link>
          <Link
            to="/add-book"
            className={`px-6 py-3 font-semibold rounded-lg shadow-md border transition-all duration-300 ${
              theme === "light"
                ? "border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-blue-300/30"
                : "border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-blue-500/30"
            }`}
          >
            Create Book
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
