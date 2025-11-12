import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const LibraryBooks = ({ books = [] }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
      ) : (
        <FaRegStar key={i} className="text-gray-500 w-4 h-4" />
      )
    );
  };


  const latestBooks = [...books]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <section className="bg-[#0B1120] text-white py-10 md:py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3"
        >
          Library Books
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Browse our curated collection of books — explore, learn, and enjoy your next great read.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {latestBooks.length > 0 ? (
          latestBooks.map((book, index) => (
            <motion.div
              key={book._id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-blue-600/50 transition-all duration-500"
            >
              <motion.img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm text-gray-300 mb-1">by {book.author}</p>
                <p className="text-xs text-gray-400 mb-2">{book.genre}</p>
                <div className="flex gap-1 mb-2">{renderStars(book.rating)}</div>
                <p className="text-xs text-gray-300 line-clamp-2">{book.summary}</p>

                <Link to={`/book-details/${book._id}`}>
                  <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition">
                    View Details
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No books available.
          </p>
        )}
      </div>
    </section>
  );
};

export default LibraryBooks;
