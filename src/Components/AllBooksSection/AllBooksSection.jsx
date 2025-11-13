import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider"; // import ThemeContext

const AllBooksSection = ({ allBooks }) => {
  const { theme } = useContext(ThemeContext);
  const [sortedBooks, setSortedBooks] = useState(allBooks);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar
          key={i}
          className={theme === "light" ? "text-yellow-500 w-4 h-4" : "text-yellow-400 w-4 h-4"}
        />
      ) : (
        <FaRegStar
          key={i}
          className={theme === "light" ? "text-gray-400 w-4 h-4" : "text-gray-500 w-4 h-4"}
        />
      )
    );

  const sortByRating = (order) => {
    const booksCopy = [...allBooks];
    booksCopy.sort((a, b) => (order === "asc" ? a.rating - b.rating : b.rating - a.rating));
    setSortedBooks(booksCopy);
  };

  return (
    <section
      className={`py-20 transition-colors ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-[#0B1120] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-6 px-5 md:px-15">
        <h2
          className={`text-5xl font-bold mb-4 transition-colors ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Explore Our Library
        </h2>
        <p
          className={`max-w-3xl mx-auto text-lg transition-colors ${
            theme === "light" ? "text-gray-700" : "text-gray-400"
          }`}
        >
          Discover books from various genres, handpicked by our community. Find your next great read and explore the creativity of talented authors.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => sortByRating("asc")}
            className={`py-2 px-4 rounded transition-colors ${
              theme === "light"
                ? "bg-gray-300 text-gray-900 hover:bg-gray-400"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Sort by Rating ↓
          </button>
          <button
            onClick={() => sortByRating("desc")}
            className={`py-2 px-4 rounded transition-colors ${
              theme === "light"
                ? "bg-gray-300 text-gray-900 hover:bg-gray-400"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Sort by Rating ↑
          </button>
        </div>
      </div>

      <div className="max-w-6xl px-5 md:px-15 mx-auto flex flex-col gap-12 mt-8">
        {sortedBooks.map((book, index) => (
          <motion.div
            key={book._id}
            className={`flex flex-col md:flex-row rounded-xl shadow-xl overflow-hidden hover:shadow-blue-600/50 transition-all duration-500 ${
              theme === "light" ? "bg-white" : "bg-[#101830]"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <motion.img
              src={book.coverImage}
              alt={book.title}
              className="w-full md:w-1/3 h-72 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3
                  className={`text-2xl font-bold mb-2 transition-colors ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {book.title}
                </h3>
                <p
                  className={`mb-2 transition-colors ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  by {book.author}
                </p>
                <p
                  className={`inline-block px-2 py-1 mb-3 text-sm rounded transition-colors ${
                    theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  {book.genre}
                </p>
                <div className="flex gap-1 mb-3">{renderStars(book.rating)}</div>
                <p
                  className={`text-sm line-clamp-3 transition-colors ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {book.summary}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link to={`/book-details/${book._id}`}>
                  <button
                    className={`py-2 px-6 rounded-lg font-medium transition-colors ${
                      theme === "light"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    View Details
                  </button>
                </Link>
                <p
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Added by: {book.userEmail}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllBooksSection;
