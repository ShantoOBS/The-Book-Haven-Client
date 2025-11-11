import React from "react";
import { motion } from "framer-motion";

const genres = [
  {
    name: "Fantasy",
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Science Fiction",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Mystery",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Romance",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=60",
  },
];

const StaticSections = () => {
  return (
    <section className="bg-[#0A0F1C] text-white py-10 md:py-20 px-6">
      <div className="max-w-6xl mx-auto px-5 md:px-15 space-y-28">
        
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10"
          >
            Top Genres
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {genres.map((genre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={genre.img}
                  alt={genre.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-400 transition">
                    {genre.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center gap-10">
    
          <motion.img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=900&q=80"
            alt="Book of the Week"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
          />

 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Book of the Week</h2>
            <h3 className="text-xl font-semibold mb-2 hover:text-gray-400 transition">
              “The Lost Realm”
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Dive into the magical world of “The Lost Realm,” a story filled
              with adventure, courage, and destiny. Follow the young hero as he
              uncovers ancient secrets and faces impossible choices that could
              change his world forever.
            </p>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/30">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaticSections;
