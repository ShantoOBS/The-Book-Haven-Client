import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchBooks = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/all-book?email=${user.email}`);
      setBooks(res.data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to fetch books");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      const res = await axios.delete(`http://localhost:3000/delete-book/${id}`);
      if (res.status === 200) {
        setBooks(books.filter((book) => book._id !== id));
        toast.success("Book deleted successfully!");
      }
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };


  const handleUpdate = async (book) => {
    const newTitle = window.prompt("Enter new title", book.title);
    if (!newTitle) return;

    try {
      const res = await axios.patch(`http://localhost:3000/update-book/${book._id}`, {
        title: newTitle,
      });

      if (res.status === 200) {
        setBooks(books.map((b) => (b._id === book._id ? { ...b, title: newTitle } : b)));
        toast.success("Book updated successfully!");
      }
    } catch (err) {
      toast.error("Failed to update book");
    }
  };

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl font-bold mb-6">My Books</h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-2 border border-gray-700">Cover</th>
                <th className="px-4 py-2 border border-gray-700">Title</th>
                <th className="px-4 py-2 border border-gray-700">Author</th>
                <th className="px-4 py-2 border border-gray-700">Genre</th>
                <th className="px-4 py-2 border border-gray-700">Rating</th>
                <th className="px-4 py-2 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id} className="text-center border border-gray-700">
                  <td className="px-4 py-2">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-16 h-20 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{book.title}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.genre}</td>
                  <td className="px-4 py-2">{book.rating}</td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(book)}
                      className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBook;
