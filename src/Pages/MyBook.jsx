import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null); 
  const [showModal, setShowModal] = useState(false); 


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


  const handleUpdate = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };


  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3000/update-book/${selectedBook._id}`, selectedBook);
      if (res.status === 200) {
        toast.success("Book updated successfully!");
        setBooks(
          books.map((b) => (b._id === selectedBook._id ? selectedBook : b))
        );
        setShowModal(false);
      }
    } catch (err) {
      toast.error("Failed to update book");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-15 text-white p-8 py-20 text-center">
        <Toaster position="top-center" reverseOrder={false} />

        {books.length === 0 ? (
          <p className="text-4xl mt-20 font-bold">No books added yet.</p>
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

      {showModal && selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Book</h2>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={selectedBook.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="text"
                name="author"
                value={selectedBook.author}
                onChange={handleChange}
                placeholder="Author"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="text"
                name="genre"
                value={selectedBook.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="number"
                name="rating"
                value={selectedBook.rating}
                onChange={handleChange}
                placeholder="Rating (1–5)"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <textarea
                name="summary"
                value={selectedBook.summary}
                onChange={handleChange}
                placeholder="Summary"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              ></textarea>
              <input
                type="text"
                name="coverImage"
                value={selectedBook.coverImage}
                onChange={handleChange}
                placeholder="Cover Image URL"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="email"
                name="userEmail"
                value={selectedBook.userEmail}
                onChange={handleChange}
                placeholder="User Email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBook;
