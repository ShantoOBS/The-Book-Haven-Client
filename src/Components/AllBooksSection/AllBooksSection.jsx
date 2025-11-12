import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaStar, FaRegStar } from "react-icons/fa";





const AllBooksFullWidth = ({allBooks}) => {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
      ) : (
        <FaRegStar key={i} className="text-gray-500 w-4 h-4" />
      )
    );

  return (
    <section className="bg-[#0B1120] text-white py-20 ">
     
      <div className="max-w-6xl mx-auto text-center mb-16 px-5 md:px-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Explore Our Library
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Discover books from various genres, handpicked by our community. Find your next great read and explore the creativity of talented authors.
        </motion.p>
      </div>


      <div className="max-w-6xl px-5 md:px-15 mx-auto flex flex-col gap-12">
        {allBooks.map((book, index) => (
          <motion.div
            key={book.id}
            className="flex flex-col md:flex-row bg-[#101830] rounded-xl shadow-xl overflow-hidden hover:shadow-blue-600/50 transition-all duration-500"
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
                <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-300 mb-2">by {book.author}</p>
                <p className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded mb-3 text-sm">
                  {book.genre}
                </p>
                <div className="flex gap-1 mb-3">{renderStars(book.rating)}</div>
                <p className="text-gray-300 text-sm line-clamp-3">{book.summary}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link to='/book-details'>

                   <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-white font-medium transition">
                  View Details
                </button>

                </Link>
    
                <p className="text-gray-500 text-xs">Added by: {book.userEmail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllBooksFullWidth;
