import React from "react";

const BookDetails = () => {
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    rating: 4.7,
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
    summary:
      "A portrait of the Jazz Age in all of its decadence and excess, The Great Gatsby captures the disillusionment of post-war America and the moral decay hidden beneath the glittering surface of high society.",
    published: "April 10, 1925",
    pages: 218,
    language: "English",
    publisher: "Charles Scribner's Sons",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0B1120] py-10 px-5">
      <div className="max-w-4xl w-full bg-[#111827] rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-10 border border-gray-800">
 
        <div className="flex-shrink-0">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-56 h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-2">
              {book.title}
            </h2>
            <p className="text-gray-300 text-lg mb-3">
              by{" "}
              <span className="font-medium text-indigo-400">{book.author}</span>
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-900 text-indigo-300 text-sm px-3 py-1 rounded-full">
                {book.genre}
              </span>
              <span className="text-yellow-400 font-medium">
                ★ {book.rating}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">{book.summary}</p>

            <ul className="text-gray-400 space-y-1">
              <li>
                <span className="font-medium text-gray-300">Published:</span>{" "}
                {book.published}
              </li>
              <li>
                <span className="font-medium text-gray-300">Pages:</span>{" "}
                {book.pages}
              </li>
              <li>
                <span className="font-medium text-gray-300">Language:</span>{" "}
                {book.language}
              </li>
              <li>
                <span className="font-medium text-gray-300">Publisher:</span>{" "}
                {book.publisher}
              </li>
            </ul>
          </div>

       
          <div className="mt-6 flex gap-3">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all">
              Read Now
            </button>
            <button className="border border-indigo-500 text-indigo-400 px-5 py-2 rounded-lg hover:bg-indigo-900 transition-all">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
