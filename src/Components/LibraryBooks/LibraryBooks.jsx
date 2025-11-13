import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
import { ThemeContext } from "../../Provider/ThemeProvider"; 

const LibraryBooks = ({ books = [] }) => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
      ) : (
        <FaRegStar key={i} className={isLight ? "text-gray-400 w-4 h-4" : "text-gray-500 w-4 h-4"} />
      )
    );
  };

  const latestBooks = [...books]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <section
      className={`py-10 md:py-20 px-6 transition-colors ${
        isLight ? "bg-gray-100 text-gray-900" : "bg-[#0B1120] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold mb-3 transition-colors ${
            isLight ? "text-gray-900" : "text-white"
          }`}
        >
         6 Latest Books
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`max-w-2xl mx-auto transition-colors ${
            isLight ? "text-gray-700" : "text-gray-400"
          }`}
        >
          Browse our curated collection of books — explore, learn, and enjoy your next great read.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-15 px-5">
        {latestBooks.length > 0 ? (
          latestBooks.map((book, index) => (
            <motion.div
              key={book._id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
                isLight
                  ? "hover:shadow-blue-500/50 bg-white"
                  : "hover:shadow-blue-600/50 bg-[#101830]"
              }`}
            >
              <motion.img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className={`absolute inset-0 flex flex-col justify-end p-5 transition-colors ${
                  isLight
                    ? "bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 hover:opacity-100"
                    : "bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 hover:opacity-100"
                }`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className={`text-lg font-bold transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
                  {book.title}
                </h3>
                <p className={`text-sm mb-1 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>
                  by {book.author}
                </p>
                <p className={`text-xs mb-2 transition-colors ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                  {book.genre}
                </p>
                <div className="flex gap-1 mb-2">{renderStars(book.rating)}</div>
                <p className={`text-xs line-clamp-2 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>
                  {book.summary}
                </p>

                <Link to={`/book-details/${book._id}`}>
                  <button
                    className={`mt-3 w-full py-2 rounded-lg font-medium transition-colors ${
                      isLight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    View Details
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className={`text-center col-span-full transition-colors ${isLight ? "text-gray-700" : "text-gray-400"}`}>
            No books available.
          </p>
        )}
      </div>
    </section>
  );
};

export default LibraryBooks;
