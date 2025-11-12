import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

const LibraryBooks = () => {
 
  const books = [
    {
      _id: 1,
      title: "The Silent Dawn",
      author: "Ava Stone",
      genre: "Mystery",
      rating: 4,
      summary:
        "A gripping tale of hope, mystery, and the resilience of the human spirit.",
      coverImage:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: 2,
      title: "Echoes of Tomorrow",
      author: "Liam Carter",
      genre: "Science Fiction",
      rating: 5,
      summary:
        "A sci-fi adventure exploring the edge of time, love, and technology.",
      coverImage:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: 3,
      title: "Whispers in the Wind",
      author: "Sophia Miles",
      genre: "Romance",
      rating: 3,
      summary:
        "A poetic journey through love and rediscovery in the hills of Tuscany.",
      coverImage:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: 4,
      title: "Shadows of the Past",
      author: "Ethan Black",
      genre: "Thriller",
      rating: 5,
      summary: "An intense thriller that keeps you guessing till the last page.",
      coverImage:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: 5,
      title: "Beyond the Horizon",
      author: "Olivia Green",
      genre: "Adventure",
      rating: 4,
      summary: "An epic adventure across uncharted lands and seas.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: 6,
      title: "Melodies of Life",
      author: "Noah White",
      genre: "Biography",
      rating: 5,
      summary:
        "A heartfelt biography of a musician’s journey through triumph and struggle.",
      coverImage:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
      ) : (
        <FaRegStar key={i} className="text-gray-500 w-4 h-4" />
      )
    );
  };

  return (
    <section className="bg-[#0B1120] text-white py-10 md:py-20 px-6">

        
      <div className="max-w-6xl mx-auto px-5 md:px-15 text-center mb-8 md:mb-12">
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
          Browse our curated collection of books — explore, learn, and enjoy your
          next great read.
        </motion.p>
      </div>

    
      <div className="max-w-6xl mx-auto px-5 md:px-15 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <motion.div
            key={book._id}
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
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition">
                View Details
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LibraryBooks;
