import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { getAuth } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const auth = getAuth();

 
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/book-details/${id}`);
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
      const res = await axios.get(`http://localhost:3000/book-comments/${id}`);
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
      await axios.post("http://localhost:3000/add-comment", commentData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewComment("");
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (!book) return <p className="text-white text-center mt-20">No book found.</p>;

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#0B1120] py-10 px-5">
      <div className="max-w-4xl w-full bg-[#111827] rounded-2xl shadow-lg p-8 md:p-10 flex flex-col gap-10 border border-gray-800">
        

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
              <h2 className="text-3xl font-semibold text-white mb-2">{book.title}</h2>
              <p className="text-gray-300 text-lg mb-3">
                by <span className="font-medium text-indigo-400">{book.author}</span>
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">{book.summary}</p>
            </div>
          </div>
        </div>

     
        <div className="mt-6">
          <h3 className="text-xl text-white font-semibold mb-3">Comments</h3>

          {user && (
            <form onSubmit={handleAddComment} className="mb-4 flex flex-col gap-2">
              <textarea
                className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
              <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700">
                Post Comment
              </button>
            </form>
          )}

          <div className="space-y-3">
            {comments.map((c) => (
              <div key={c._id} className="p-3 border border-gray-700 rounded flex gap-3 items-start">
                <img src={c.photoURL} alt={c.userName} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-semibold text-white">{c.userName}</h4>
                  <p className="text-gray-300">{c.comment}</p>
                  <p className="text-xs text-gray-500">
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
