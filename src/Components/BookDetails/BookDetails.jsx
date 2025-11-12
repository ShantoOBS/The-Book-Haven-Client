import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/book-details/${id}`);
        setBook(res.data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch book details.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;
  if (!book) return <p className="text-white text-center mt-20">No book found.</p>;

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
            <h2 className="text-3xl font-semibold text-white mb-2">{book.title}</h2>
            <p className="text-gray-300 text-lg mb-3">
              by <span className="font-medium text-indigo-400">{book.author}</span>
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-900 text-indigo-300 text-sm px-3 py-1 rounded-full">{book.genre}</span>
              <span className="text-yellow-400 font-medium">★ {book.rating}</span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">{book.summary}</p>

            <ul className="text-gray-400 space-y-1">
              <li>
                <span className="font-medium text-gray-300">Published:</span> {book.published}
              </li>
              <li>
                <span className="font-medium text-gray-300">Pages:</span> {book.pages}
              </li>
              <li>
                <span className="font-medium text-gray-300">Language:</span> {book.language}
              </li>
              <li>
                <span className="font-medium text-gray-300">Publisher:</span> {book.publisher}
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
