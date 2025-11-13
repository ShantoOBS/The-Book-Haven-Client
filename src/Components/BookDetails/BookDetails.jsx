import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { getAuth } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider"; 

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://the-book-haven-server-delta.vercel.app/book-details/${id}`);
        setBook(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`https://the-book-haven-server-delta.vercel.app/book-comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
    const interval = setInterval(fetchComments, 5000);
    return () => clearInterval(interval);
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to comment");

    const token = await auth.currentUser.getIdToken();

    const commentData = {
      bookId: id,
      userEmail: user.email,
      userName: user.displayName,
      photoURL: user.photoURL,
      comment: newComment,
    };

    try {
      await axios.post("https://the-book-haven-server-delta.vercel.app/add-comment", commentData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewComment("");
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!book) return <p className="text-center mt-20">No book found.</p>;

  return (
    <div
      className={`flex justify-center items-start min-h-screen py-10 px-5 transition-colors ${
        theme === "light" ? "bg-gray-100" : "bg-[#0B1120]"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-2xl shadow-lg p-8 md:p-10 flex flex-col gap-10 border transition-colors ${
          theme === "light"
            ? "bg-white border-gray-300"
            : "bg-[#111827] border-gray-800"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-56 h-80 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2
                className={`text-3xl font-semibold mb-2 transition-colors ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                {book.title}
              </h2>
              <p
                className={`text-lg mb-3 transition-colors ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                by <span className="font-medium text-indigo-400">{book.author}</span>
              </p>
              <p
                className={`leading-relaxed mb-4 transition-colors ${
                  theme === "light" ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {book.summary}
              </p>
            </div>
          </div>
        </div>

   
        <div className="mt-6">
          <h3
            className={`text-xl font-semibold mb-3 transition-colors ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Comments
          </h3>

          {user && (
            <form onSubmit={handleAddComment} className="mb-4 flex flex-col gap-2">
              <textarea
                className={`p-2 rounded border transition-colors ${
                  theme === "light"
                    ? "bg-gray-100 border-gray-300 text-gray-900"
                    : "bg-gray-800 border-gray-700 text-white"
                }`}
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
              <button
                className={`px-4 py-2 rounded transition-colors ${
                  theme === "light"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Post Comment
              </button>
            </form>
          )}

          <div className="space-y-3">
            {comments.map((c) => (
              <div
                key={c._id}
                className={`p-3 border rounded flex gap-3 items-start transition-colors ${
                  theme === "light" ? "border-gray-300 bg-gray-50" : "border-gray-700 bg-[#1A1F2D]"
                }`}
              >
                <img
                  src={c.photoURL}
                  alt={c.userName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4
                    className={`font-semibold transition-colors ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {c.userName}
                  </h4>
                  <p
                    className={`transition-colors ${
                      theme === "light" ? "text-gray-800" : "text-gray-300"
                    }`}
                  >
                    {c.comment}
                  </p>
                  <p
                    className={`text-xs transition-colors ${
                      theme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
