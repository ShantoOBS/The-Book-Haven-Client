import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const token = user?.accessToken;

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`https://the-book-haven-server-delta.vercel.app/all-book?email=${user.email}`, {
        headers: { authorization: `Bearer ${token}` },
      });
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
      const res = await axios.delete(`https://the-book-haven-server-delta.vercel.app/delete-book/${id}`, {
        data: { email: user.email },
        headers: { authorization: `Bearer ${token}` },
      });
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
      const res = await axios.patch(
        `https://the-book-haven-server-delta.vercel.app/update-book/${selectedBook._id}`,
        selectedBook,
        { headers: { authorization: `Bearer ${token}` } }
      );
      if (res.status === 200) {
        toast.success("Book updated successfully!");
        setBooks(books.map((b) => (b._id === selectedBook._id ? selectedBook : b)));
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

  if (loading)
    return (
      <p className={`text-center mt-10 transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
        Loading...
      </p>
    );

  return (
    <div className={`min-h-screen transition-colors ${isLight ? "bg-gray-100" : "bg-gray-900"}`}>
      <div className={`max-w-6xl mx-auto px-5 md:px-15 p-8 py-20 text-center transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
        <Toaster position="top-center" reverseOrder={false} />

        {books.length === 0 ? (
          <p className={`text-4xl mt-20 font-bold transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
            No books added yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className={`min-w-full border transition-colors ${isLight ? "border-gray-300" : "border-gray-700"}`}>
              <thead>
                <tr className={isLight ? "bg-gray-200" : "bg-gray-900"}>
                  {["Cover", "Title", "Author", "Genre", "Rating", "Actions"].map((head) => (
                    <th key={head} className={`px-4 py-2 border ${isLight ? "border-gray-300" : "border-gray-700"}`}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id} className={`text-center border ${isLight ? "border-gray-300" : "border-gray-700"}`}>
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
                        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition-colors"
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
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-colors ${
            isLight ? "bg-gray-200 bg-opacity-70" : "bg-gray-900 bg-opacity-70"
          }`}
        >
          <div className={`p-3 rounded-lg shadow-lg w-full max-w-sm max-h-[85vh] overflow-y-auto transition-colors ${isLight ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}>
            <h2 className="text-lg font-semibold mb-2 text-center">Update Book</h2>
            <form onSubmit={handleModalSubmit} className="space-y-2">
              {["title", "author", "genre", "rating", "summary", "coverImage", "userEmail"].map((field) => (
                <div key={field}>
                  <label className="block mb-0.5 text-xs font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {field === "summary" ? (
                    <textarea
                      name={field}
                      value={selectedBook[field]}
                      onChange={handleChange}
                      rows="2"
                      className={`w-full p-1.5 rounded border text-xs transition-colors ${isLight ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-gray-700 border-gray-600 text-white"}`}
                    ></textarea>
                  ) : (
                    <input
                      type={field === "rating" ? "number" : "text"}
                      name={field}
                      value={selectedBook[field]}
                      onChange={handleChange}
                      className={`w-full p-1.5 rounded border text-xs transition-colors ${isLight ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-gray-700 border-gray-600 text-white"}`}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${isLight ? "bg-gray-300 hover:bg-gray-200" : "bg-gray-700 hover:bg-gray-600"}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-2 py-1 rounded text-xs transition-colors ${isLight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                  Save
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
